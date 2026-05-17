<script lang="ts">
    import Star from "$lib/icons/Star.svelte";
    let { product } = $props();
    let imgLoaded = $state(false);
    let showImgSpinner = $state(false);

    $effect(() => {
        if (!imgLoaded) {
            const timeout = setTimeout(() => { showImgSpinner = true; }, 400);
            return () => clearTimeout(timeout);
        };
    });
</script>

<a href="/games/{product._id}">
    <div class="default-informative-card" id={product._id}>
        <div class="card-img">
            {#if !imgLoaded && showImgSpinner}
                <div class="img-spinner-overlay">
                    <div class="spinner"></div>
                </div>
            {/if}
            {#if product.url}
                <img
                    src={product.url}
                    alt={product.name}
                    onload={() => imgLoaded = true}
                    class:loaded={imgLoaded}
                />
            {/if}
        </div>
        <div class="card-body card-info">
            <h2 class="fz-1-3 fw-bold">{product.name}</h2>
            <div class="row-wrap">
                <h3 class="fw-200">
                    {#each product.developers as dev}
                        {#if dev !== product.developers[product.developers.length - 1]}
                            {dev},&nbsp
                        {:else}
                            {dev}
                        {/if}
                    {/each}
                </h3>
            </div>
            <div class="row-nowrap justify-content-space-between card-price">
                <h4 class="fw-bold row-nowrap align-items-center">
                    {#if product.rating}
                        <Star size="small" />
                        &nbsp
                        {product.rating}/10
                    {:else}
                        Wishlist
                    {/if}
                </h4>
                <h4>
                    {#if product.price === 0}
                        Free
                    {:else if (!product.price)}
                        --
                    {:else}
                        ${product.price}
                    {/if}
                </h4>
            </div>
        </div>
    </div>
</a>

<style lang="scss">
    @use 'axlothecook-sass-library/sass-library/breakpoints' as bp;

    .card-info {
        height: 43%;
    }
    .card-price h4:last-of-type {
        color: #999999;
    }
    @include bp.xs-down {
        .card-info {
            padding: .8rem;
        }
        .card-info h2 {
            font-size: 1rem;
            font-weight: 600;
        }
        .card-info h3 {
            font-size: .9rem;
        }
        .card-price h4 {
            font-size: .8rem;
        }
    }
</style>