// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
declare global {
	namespace App {
		type NumOrNull = number | null;
		type StringOrNull = string | null;
		type StringOrAny = string | any;
		type FilterStateEntry = { value: Set<string> | string | null };
		type Params = string | string[] | null;

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

		interface FilterConfig {
			key: string;           // URL param name
			arrayKey: string;       // key on responseBody.data / gamesData
			type: 'multi' | 'single';
			toggleable?: boolean;   // can the user click again to deselect (price yes, sort/page no)
		};
	}
}

export {
	NavbarLink,
	PaginationObject,
	GameObject,
	CategoryObject,
	CategoryDetailsObject,
	ErrorObject,
	FilterConfig,

	Params,
	FilterStateEntry
};
