<script lang="ts">
    import ErrorPopup from '$lib/reusable/ErrorPopup.svelte';
    import GameCard from '$lib/reusable/Game-card.svelte';
    import '../../styles/products_page.css';
    import '../../styles/search.css';
    let { data } = $props();
</script>

<ErrorPopup error={data.error || null} />
<div class="content">
    <a href="/games" class="btn">Go back to Games</a>
    <div class="main-content">
        {#if data.productsArr && (data.productsArr.length > 0) }
            <h1>Results:</h1>
            <div class="products-list">
                {#each data.productsArr as product (product._id) }
                    <GameCard product={product} />
                {/each}
            </div>
        {:else}
            <h1 id="no-product-h1">No product found :/</h1>
        {/if}
    </div>
</div>