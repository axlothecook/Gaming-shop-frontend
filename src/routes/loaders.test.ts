// Tests for the server load functions that deliver backend data to the pages.
// The backend is mocked (global fetch + the baked LINK env), so these pin down:
//  - the right backend URL is called (query string passed through)
//  - success responses end up in the shape the pages expect
//  - error responses from the backend map to the right behavior
//    (500 -> SvelteKit error page, validation errors -> returned to the page)
import { describe, it, expect, vi, beforeEach } from 'vitest';

vi.mock('$env/static/private', () => ({ LINK: 'http://backend.test' }));

import { load as layoutLoad } from './+layout.server';
import { load as gamesLoad } from './games/+page.server';
import { load as searchLoad } from './search/+page.server';

const fetchMock = vi.fn();
vi.stubGlobal('fetch', fetchMock);

// The backend always answers JSON: { data } on success, { errCode, errType, errBody } on failure.
function backendReplies(body: unknown) {
	fetchMock.mockResolvedValue({ json: async () => body });
}

beforeEach(() => fetchMock.mockReset());

describe('layout load (navbar links)', () => {
	it('returns the navbar links from the backend root', async () => {
		backendReplies({ data: ['Games', 'Genres', 'Developers'] });
		const result = await (layoutLoad as any)({});
		expect(fetchMock).toHaveBeenCalledWith('http://backend.test');
		expect(result).toEqual({ navbarLinks: ['Games', 'Genres', 'Developers'] });
	});

	it('throws a 500 error page when the backend reports an error', async () => {
		backendReplies({ errCode: 500, errBody: [{ msg: 'db down' }] });
		await expect((layoutLoad as any)({})).rejects.toMatchObject({
			status: 500,
			body: { message: 'db down' }
		});
	});
});

describe('games load (list + filters)', () => {
	it('passes the query string through to the backend', async () => {
		backendReplies({ data: { gamesArr: [] } });
		await (gamesLoad as any)({ url: new URL('http://site.test/games?Genres=RPG&page=2') });
		expect(fetchMock).toHaveBeenCalledWith('http://backend.test/games?Genres=RPG&page=2');
	});

	it('calls the plain games endpoint when there is no query', async () => {
		backendReplies({ data: { gamesArr: [] } });
		await (gamesLoad as any)({ url: new URL('http://site.test/games') });
		expect(fetchMock).toHaveBeenCalledWith('http://backend.test/games');
	});

	it('marks the selected filters as checked', async () => {
		backendReplies({
			data: {
				gamesArr: [{ name: 'Elden Ring' }],
				genresArr: [{ name: 'RPG' }, { name: 'Action' }],
				priceArray: [{ value: 'under-20' }, { value: 'over-60' }]
			}
		});
		const result = await (gamesLoad as any)({
			url: new URL('http://site.test/games?Genres=RPG&Price=under-20')
		});
		// multi filter: checked by name being in the selected values
		expect(result.gamesData.genresArr).toEqual([
			{ name: 'RPG', checked: true },
			{ name: 'Action', checked: false }
		]);
		// single filter: checked by exact value match
		expect(result.gamesData.priceArray).toEqual([
			{ value: 'under-20', checked: true },
			{ value: 'over-60', checked: false }
		]);
		expect(result.selectedParams.Genres).toEqual(['RPG']);
		expect(result.selectedParams.Price).toBe('under-20');
	});

	it('throws a 500 error page when the backend reports an error', async () => {
		backendReplies({ errCode: 500, errBody: [{ msg: 'boom' }] });
		await expect(
			(gamesLoad as any)({ url: new URL('http://site.test/games') })
		).rejects.toMatchObject({ status: 500, body: { message: 'boom' } });
	});
});

describe('search load', () => {
	it('returns the found products', async () => {
		backendReplies({ data: { productsArr: [{ name: 'Portal' }] } });
		const result = await (searchLoad as any)({ url: new URL('http://site.test/search?q=por') });
		expect(fetchMock).toHaveBeenCalledWith('http://backend.test/search?q=por');
		expect(result).toEqual({ productsArr: [{ name: 'Portal' }] });
	});

	it('returns validation errors to the page instead of crashing it', async () => {
		backendReplies({ errCode: 400, errType: 'validation', errBody: [{ msg: 'query too short' }] });
		const result = await (searchLoad as any)({ url: new URL('http://site.test/search?q=') });
		expect(result).toEqual({
			error: { type: 'validation', body: [{ msg: 'query too short' }], code: 400 }
		});
	});

	it('throws a 500 error page when the backend itself fails', async () => {
		backendReplies({ errCode: 500, errBody: [{ msg: 'db down' }] });
		await expect(
			(searchLoad as any)({ url: new URL('http://site.test/search?q=por') })
		).rejects.toMatchObject({ status: 500, body: { message: 'db down' } });
	});
});
