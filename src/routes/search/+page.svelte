<script lang="ts">
    import GameCard from '$lib/reusable/Game-card.svelte';
import '../../styles/products_page.css';
    import '../../styles/search.css';
    let { data } = $props();
    const productsArr = data.productsArr;
    console.log('SEARCH RESULTS: ', productsArr);
</script>

<a href="/games" class="btn">Go back to Games</a>
<div class="main-content">
    {#if (productsArr && productsArr.length > 0) }
        <h1>Results:</h1>
        <div class="products-list">
            {#each productsArr as product (product._id) }
                <GameCard product={product} />
            {/each}
        </div>
    {:else}
        <h1 id="no-product-h1">No product found :/</h1>
    {/if}
</div>