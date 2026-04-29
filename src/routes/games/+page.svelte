<script lang="ts">
    import AddNew from "$lib/reusable/AddNew.svelte";
    import Filter from "$lib/reusable/Filter.svelte";
    import '../../styles/secondary_style.css';
    import '../../styles/products_page.css';
    import GameCard from "$lib/reusable/Game-card.svelte";
    import RadioInput from "$lib/reusable/RadioInput.svelte";
    import type { SortInputObject, PaginationObject } from "../../app";
    import Select from "$lib/reusable/Select.svelte";

    console.log('in /games');

    let { data } = $props();

    const sortInputArr: SortInputObject[] = [
        {
            id: 'ascending',
            name: "sort",
            value: 1,
            text: "Ascending"
        },
        {
            id: 'decending',
            name: "sort",
            value: -1,
            text: "Descending"
        }
    ];

    let pagesLengthArr: PaginationObject[] = [];
    if (data.gamesData.pagesCount > 1) {
        // console.log(data.gamesData.pagesCount);
        for (let i = 1; i <= data.gamesData.pagesCount; i++) {
            pagesLengthArr.push(
                {
                    id: i - 1, 
                    name: 'page',
                    value: i
                }
            );
        };
    } else pagesLengthArr.push({ id: 0, name: 'page', value: 1 });

    // console.log('pagesLengthArr: ', pagesLengthArr);
</script>

<AddNew title="Games" />
<div class="main-content">
    <div class="filters-wrapper">
        <form method="GET" action="/games" class="filter-form" id="filter-form">
            <!-- sort -->
            <div>
                <h2>Sort By</h2>
                <div class="radio-input-div">
                    <div class="radio-input-container">
                        {#each sortInputArr as item (item.id)}
                            <RadioInput item={item} />
                        {/each}
                    </div>
                </div>
            </div>

            <!-- name -->
            <Filter title="Name">
                <Select arr={data.gamesData.alphabetArray} title="Name" />
            </Filter>

            <!-- price -->
            <Filter title="Price">
                <div class="long-radio-input-div">
                    {#each data.gamesData.priceArray as item (item.id)}
                        <div class="radio-input-container">
                            {#if (item.value === 'null') }
                                <RadioInput item={item} additionalText="Not out yet" replaceValue="NaN" />
                            {:else}
                                <RadioInput item={item} />
                            {/if}
                        </div>
                    {/each}
                </div>
            </Filter>

            <!-- rating -->
            <Filter title="Rating">
                <Select arr={data.gamesData.ratingArray} title="Rating" />
            </Filter>

            <!-- genre -->
            <Filter title="Genres">
                <Select arr={data.gamesData.genresArr} title="Genres" />
            </Filter>

            <!-- devs -->
            <Filter title="Developers">
                <Select arr={data.gamesData.devsArr} title="Developers" />
            </Filter>
            <button class="btn" style="width: 100%;" type="submit">Filter</button>
        </form>
    </div>
    <div class="product-list-container">
        <div class="products-list">
            {#each data.gamesData.gamesArr as product (product._id) }
                <GameCard product={product} />
            {/each}
        </div>
        <form method="GET" action="/games" class="pagination-form" id="pagination-form">
            {#each pagesLengthArr as page (page.id) }
                <div>
                    <RadioInput item={page} />
                </div>
            {/each}
            <button class="btn" type="submit">submit</button>
        </form>
    </div>
</div>

<style>
    @import '../../styles/secondary_style.css';
</style>