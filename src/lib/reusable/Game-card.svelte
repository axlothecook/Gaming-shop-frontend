<script>
  import Star from "$lib/icons/Star.svelte";

    const { product } = $props();
    // console.log(product)
</script>

<a href="/games/{product._id}">
    <div class="product-card-wrapper" id="{product._id}">
    <!--background-image: {product.url} -->
        <div class="product-card-img" style="background-image: {product.url || 'linear-gradient(to right, red , yellow)'}"></div>
        <div class="product-card-info">
            <h2>{product.name}</h2>
            <div class="developer-card-info">
                <h3>
                    {#each product.developers as dev}
                        {#if dev !== product.developers[product.developers.length - 1]} 
                            {dev},
                        {:else}
                            {dev}
                        {/if}
                    {/each}
                </h3>
            </div>
            <div class="product-card-price">
                <h4>
                    {#if product.rating}
                        <Star sizeClass="star-small" />
                        &nbsp
                        {product.rating}/10
                    {:else}
                        Wishlist
                    {/if}
                </h4>
                <h4>
                    {#if product.price === 0}
                        Free
                    {:else if (!product.price) }
                        --
                    {:else}
                        ${product.price}
                    {/if}
                </h4>
            </div>
        </div>
    </div>
</a>