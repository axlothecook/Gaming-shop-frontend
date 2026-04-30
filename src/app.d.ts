// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
declare global {
	namespace App {
		type NumOrNull = number | null;
		type StringOrNull = string | null;
		type StringOrAny = string | any;

		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
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
			genres: Array,
			developers: Array,
			price: NumOrNull,
			description: string,
			rating: NumOrNull,
			isDefault: boolean
		}

		type ObjOrNull = GameObject | null;

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

		interface ErrorObject {
			type: string;
			body: Array[StringOrAny];
			code: number;
		}
	}
}

export {
	NavbarLink,
	PaginationObject,
	GameObject,
	CategoryObject,
	CategoryDetailsObject,
	ErrorObject,
};
