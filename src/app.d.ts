// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
declare global {
	namespace App {
		type NumOrNull = number | null;
		type StringOrNull = string | null;
		type StringOrAny = string | any;
		type FilterStateEntry = { value: Set<string> | string | null };
		type Params = string | string[] | null;
		interface NavbarLink {
			id: number;
			href: string;
			text: string;
			imgPath: StringOrNull;
			txtClr: StringOrNull;
		}
		interface PaginationObject {
			id: number;
			name: string;
		}

		interface GameObject {
			_id: string,
			name: string,
			url: string,
			imgName: string,
			genres: string[],
			developers: string[],
			price: NumOrNull,
			description: string,
			rating: NumOrNull,
			isDefault: boolean
		}

		interface ErrorObject {
			type: string;
			body: StringOrAny[];
			code: number;
		}

		interface FilterConfig {
			key: string;
			arrayKey: string;
			type: 'multi' | 'single';
			toggleable?: boolean;
		};
	}
}

export {
	NavbarLink,
	PaginationObject,
	GameObject,
	ErrorObject,
	FilterConfig,

	Params,
	FilterStateEntry
};
