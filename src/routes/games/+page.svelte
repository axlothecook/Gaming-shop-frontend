<script lang="ts">
    import { beforeNavigate } from '$app/navigation';
    import AddNew from "$lib/reusable/AddNew.svelte";
    import ProductsDropdown from "$lib/reusable/Products-dropdown.svelte";
    import GameCard from "$lib/reusable/Game-card.svelte";
    import RadioInput from "$lib/reusable/RadioInput.svelte";
    import SelectMultiple from "$lib/reusable/SelectMultiple.svelte";
    import SortBy from "$lib/reusable/SortBy.svelte";
    import SelectOne from "$lib/reusable/SelectOne.svelte";
    import { filterConfigs } from "$lib/filters";
    import type { 
        FilterStateEntry,
        PaginationObject 
    } from "../../app";
    let { data } = $props();

    let pagesLengthArr: PaginationObject[] = [];
    if (data.gamesData.pagesCount > 1) {
        for (let i = 1; i <= data.gamesData.pagesCount; i++) {
            pagesLengthArr.push({ id: i - 1, name: 'page', value: i });
        };
    } else pagesLengthArr.push({ id: 0, name: 'page', value: 1 });

    const filterState = $state(
        Object.fromEntries( 
            filterConfigs.map(filter => [
                filter.key, 
                filter.type === 'multi' ? { value: new Set<string>() } : { value: null }
            ])
        ) as Record<string, FilterStateEntry>
    );

    $effect(() => {
        for (const filter of filterConfigs) {
            const param = data.selectedParams[filter.key];
            (filter.type === 'multi') 
                ? filterState[filter.key].value = new Set(param as string[])
                : filterState[filter.key].value = param as string ?? null; 
        };
    });

    beforeNavigate((nav) => {
        if (nav.to && nav.to.url.pathname !== '/games') {
            for (let i = sessionStorage.length - 1; i >= 0; i--) {
                const key = sessionStorage.key(i);
                if (key?.startsWith('dropdown:')) sessionStorage.removeItem(key);
            };
        };
    });

    const submitWithState = () => {
        const form = document.getElementById('main-form') as HTMLFormElement;
        form.querySelectorAll('input[data-injected]').forEach(element => element.remove()); 

        const inject = (name: string, value: string) => {
            const input = document.createElement('input');
            input.type = 'hidden';
            input.name = name;
            input.value = value;
            input.dataset.injected = 'true';
            form.appendChild(input);
        };

        for (const filter of filterConfigs) {
            const value = filterState[filter.key].value;
            if (filter.type === 'multi') {
                (value as Set<string>).forEach(item => inject(filter.key, item));
            } else if (value !== null) {
                inject(filter.key, String(value));
            };
        };

        form.submit();
    };

    const handleMultiChange = (event: Event, key: string) => {
        const select = event.target as HTMLSelectElement;
        const set = filterState[key].value as Set<string>;
        for (const option of select.selectedOptions) {
            if (set.has(option.value)) set.delete(option.value);
            else set.add(option.value);
        };
        for (const option of select.options) {
            option.selected = set.has(option.value);
        };
        filterState['page'].value = null;
        submitWithState();
    };

    const handleSingleSelect = (value: string, key: string, toggleable: boolean) => {
        const current = filterState[key].value;
        filterState[key].value = (toggleable && current === value) ? null : value;
        if (key !== 'page') filterState['page'].value = null;
        submitWithState();
    };
</script>

<div class="column-nowrap gap-1 pt-1-5 w-full">
    <AddNew title="Games" path="games" />
    <form method="GET" action="/games" id="main-form" class="pt-1">
        <div class="grid gap-2 main-content" style="grid-template-columns: 1fr 4fr;">
            <div class="column-nowrap gap-1-2 filters-wrapper">
                <div>
                    <div class="border-style-solid border-width-1 br-xs p-0-5">
                        <h2>Sort By</h2>
                    </div>
                    <div class="column-wrap gap-0-6 p-0-5 mt-0-5">
                        <SortBy 
                            array={data.gamesData.sortInputArr} 
                            activeSort={data.selectedParams['sort']}
                            onclick={(value: string) => handleSingleSelect(value, 'sort', false)}
                        />
                    </div>
                </div>

                <ProductsDropdown title="Name">
                    <SelectMultiple 
                        arr={data.gamesData.alphabetArray} 
                        title="Name" 
                        selected={filterState['Name'].value}
                        counts={data.gamesData.counts['Name']}
                        onchange={(e: Event) => handleMultiChange(e, 'Name')} 
                    />
                </ProductsDropdown>


                <ProductsDropdown title="Price">
                    <SelectOne 
                        arr={data.gamesData.priceArray} 
                        selected={data.selectedParams['Price']}
                        counts={data.gamesData.counts['Price']}
                        onclick={(value: string) => handleSingleSelect(value, 'Price', true)} 
                    />
                </ProductsDropdown>

                <ProductsDropdown title="Rating">
                    <SelectMultiple 
                        arr={data.gamesData.ratingArray} 
                        title="Rating" 
                        selected={filterState['Rating'].value}
                        counts={data.gamesData.counts['Rating']}
                        onchange={(e: Event) => handleMultiChange(e, 'Rating')} 
                    />
                </ProductsDropdown>

                <ProductsDropdown title="Genres">
                    <SelectMultiple 
                        arr={data.gamesData.genresArr} 
                        title="Genres" 
                        selected={filterState['Genres'].value}
                        counts={data.gamesData.counts['Genres']}
                        onchange={(e: Event) => handleMultiChange(e, 'Genres')} 
                    />
                </ProductsDropdown>

                <ProductsDropdown title="Developers">
                    <SelectMultiple 
                        arr={data.gamesData.devsArr} 
                        title="Developers" 
                        selected={filterState['Developers'].value}
                        counts={data.gamesData.counts['Developers']}
                        onchange={(e: Event) => handleMultiChange(e, 'Developers')} 
                    />
                </ProductsDropdown>
            </div>
            <div class="column-nowrap gap-3">
                <div class="grid gap-2 products-list" style="grid-auto-rows: 0fr;">
                    {#each data.gamesData.gamesArr as product (product._id) }
                        <GameCard product={product} />
                    {/each}
                </div>
                <div class="row-nowrap align-items-center justify-content-center gap-0-5 pb-2">
                    {#each pagesLengthArr as page (page.id) } 
                        <RadioInput 
                            item={page} 
                            selected={String(data.selectedParams['page'] ?? '1') === String(page.value)}
                            onclick={() => handleSingleSelect(String(page.value), 'page', false)} 
                        />
                    {/each}
                </div>
            </div>
        </div>
    </form>
</div>

<style lang="scss">
    @use 'axlothecook-sass-library/sass-library/breakpoints' as bp;

    .products-list {
        grid-template-columns: repeat(3, 1fr);
    }

    @include bp.xxl-down {
        .main-content {
            grid-template-columns: 1fr 3fr;
        }

        .products-list {
            grid-template-columns: repeat(2, 1fr);
        }
    }

    @include bp.md-down {
        .main-content {
            grid-template-columns: 1fr 2fr;
        }

        .products-list {
            grid-template-columns: 1fr;
        }
    }
    @include bp.sm-down {
        .main-content {
            display: flex;
            flex-direction: column;
        }
        .filters-wrapper {
            gap: 1rem;
        }
    }
</style>