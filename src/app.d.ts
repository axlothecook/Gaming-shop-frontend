// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
declare global {
	namespace App {
		type NumOrNull = number | null;
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
		interface SortInputObject {
			id: string;
			name: string;
			value: string;
			text: string;
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
			genres: Array,
			developers: Array,
			price: NumOrNull,
			description: string,
			rating: NumOrNull,
			isDefault: boolean
		}
		interface CategoryObject {
			_id: string,
			name: string,
			numberOfGames: number,
			isDefault: boolean
		}

		interface CategoryDetailsObject {
			title: string,
			path: string,
			array: CategoryObject[]
		}
	}
}

export {
	SortInputObject,
	PaginationObject,
	GameObject,
	CategoryObject,
	CategoryDetailsObject
};
