<script lang="ts">
    import AddNew from "$lib/reusable/AddNew.svelte";
    import ProductsDropdown from "$lib/reusable/Products-dropdown.svelte";
    import '../../styles/secondary_style.css';
    import '../../styles/products_page.css';
    import GameCard from "$lib/reusable/Game-card.svelte";
    import RadioInput from "$lib/reusable/RadioInput.svelte";
    import SelecMultiple from "$lib/reusable/SelectMultiple.svelte";
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
        }
        for (const option of select.options) {
            option.selected = set.has(option.value);
        }
        submitWithState();
    };

    const handleSingleSelect = (value: string, key: string, toggleable: boolean) => {
        const current = filterState[key].value;
        filterState[key].value = (toggleable && current === value) ? null : value;
        submitWithState();
    };
</script>

<div class="content">
    <AddNew title="Games" path="games" />
    <form method="GET" action="/games" id="main-form">
        <div class="main-content">
            <div class="filters-wrapper">
                <!-- sort -->
                <div>
                    <h2>Sort By</h2>
                    <div class="radio-input-div">
                        <SortBy 
                            array={data.gamesData.sortInputArr} 
                            activeSort={data.selectedParams['sort']}
                            onclick={(value: string) => handleSingleSelect(value, 'sort', false)}
                        />
                    </div>
                </div>

                <!-- name -->
                <ProductsDropdown title="Name">
                    <SelecMultiple 
                        arr={data.gamesData.alphabetArray} 
                        title="Name" 
                        selected={filterState['Name'].value}
                        counts={data.gamesData.counts['Name']}
                        onchange={(e: Event) => handleMultiChange(e, 'Name')} 
                    />
                </ProductsDropdown>


                <!-- price -->
                <ProductsDropdown title="Price">
                    <SelectOne 
                        arr={data.gamesData.priceArray} 
                        selected={data.selectedParams['Price']}
                        counts={data.gamesData.counts['Price']}
                        onclick={(value: string) => handleSingleSelect(value, 'Price', true)} 
                    />
                </ProductsDropdown>

                <!-- rating -->
                <ProductsDropdown title="Rating">
                    <SelecMultiple 
                        arr={data.gamesData.ratingArray} 
                        title="Rating" 
                        selected={filterState['Rating'].value}
                        counts={data.gamesData.counts['Rating']}
                        onchange={(e: Event) => handleMultiChange(e, 'Rating')} 
                    />
                </ProductsDropdown>

                <!-- genre -->
                <ProductsDropdown title="Genres">
                    <SelecMultiple 
                        arr={data.gamesData.genresArr} 
                        title="Genres" 
                        selected={filterState['Genres'].value}
                        counts={data.gamesData.counts['Genres']}
                        onchange={(e: Event) => handleMultiChange(e, 'Genres')} 
                    />
                </ProductsDropdown>

                <!-- devs -->
                <ProductsDropdown title="Developers">
                    <SelecMultiple 
                        arr={data.gamesData.devsArr} 
                        title="Developers" 
                        selected={filterState['Developers'].value}
                        counts={data.gamesData.counts['Developers']}
                        onchange={(e: Event) => handleMultiChange(e, 'Developers')} 
                    />
                </ProductsDropdown>
            </div>
            <div class="product-list-container">
                <div class="products-list">
                    {#each data.gamesData.gamesArr as product (product._id) }
                        <GameCard product={product} />
                    {/each}
                </div>
                <div class="pagination-wrapper">
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

<style>
    @import '../../styles/secondary_style.css';
</style>