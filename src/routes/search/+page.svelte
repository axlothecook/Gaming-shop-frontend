<script lang="ts">
    import ErrorPopup from '$lib/reusable/ErrorPopup.svelte';
    import GameCard from '$lib/reusable/Game-card.svelte';
    let { data } = $props();
</script>

<ErrorPopup error={data.error || null} />
<div class="column-nowrap gap-1 pt-1-5 w-full flex-grow-1">
    <a href="/games" class="btn-outlined-wheatfield br-xs pt-0-5 pb-0-5 pl-0-8 pr-0-8">Go back to Games</a>
    {#if data.productsArr && (data.productsArr.length > 0) }
        <div class="column-nowrap gap-1 br-xl p-2 main-content">
            <h1>Results:</h1>
            <div class="grid gap-2 products-list" style="grid-auto-rows: 0fr;">
                {#each data.productsArr as product (product._id) }
                    <GameCard product={product} />
                {/each}
            </div>
        </div>
    {:else}
        <div class="column-nowrap align-items-center justify-content-center flex-grow-1">
            <h1>No product found :/</h1>
        </div>
    {/if}
</div>

<style lang="scss">
    @use 'axlothecook-sass-library/sass-library/breakpoints' as bp;

    .products-list {
        grid-template-columns: repeat(3, 1fr);
    }

    @include bp.xxl-down {
        .products-list {
            grid-template-columns: repeat(2, 1fr);
        }
    }

    @include bp.md-down {
        .products-list {
            grid-template-columns: 1fr;
        }
    }

    @include bp.sm-down {
        .main-content {
            padding: 1rem;
        }
    }
</style>
