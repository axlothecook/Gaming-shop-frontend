import type { FilterConfig } from '../app';

export const filterConfigs: FilterConfig[] = [
    { key: 'Name',        arrayKey: 'alphabetArray', type: 'multi' },
    { key: 'Rating',      arrayKey: 'ratingArray',   type: 'multi' },
    { key: 'Genres',      arrayKey: 'genresArr',     type: 'multi' },
    { key: 'Developers',  arrayKey: 'devsArr',       type: 'multi' },
    { key: 'Price',       arrayKey: 'priceArray',    type: 'single', toggleable: true  },
    { key: 'sort',        arrayKey: 'sortInputArr',  type: 'single' },
    { key: 'page',        arrayKey: 'pagesCount',    type: 'single' },
];