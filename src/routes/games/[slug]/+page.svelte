<script lang="ts">
    import Star from "$lib/icons/Star.svelte";
    import { enhance } from '$app/forms';
    import type { GameObject } from "../../../app";
    import ErrorPopup from "$lib/reusable/ErrorPopup.svelte";
    let { data, form } = $props();
    const product: GameObject = data.product;
    let imgLoaded = $state(false);
    let showImgSpinner = $state(false);

    $effect(() => {
        if (!imgLoaded) {
            const timeout = setTimeout(() => { showImgSpinner = true; }, 400);
            return () => clearTimeout(timeout);
        };
    });
</script>

<ErrorPopup error={form?.error || null} />
<div class="column-nowrap gap-1 pt-1-5 w-full h-full">
    <a href="/games" class="btn-outlined-wheatfield br-xs pt-0-6 pb-0-6 pl-0-8 pr-0-8">Go Back</a>
    <div class="column-nowrap gap-1 p-2 border-style-solid border-width-1 br-xl">
        <div class="default-split-card">
            <div class="split-card-img">
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
            <div class="split-card-content column-nowrap gap-2 pl-2 product-info">
                <div class="column-nowrap gap-0-5 basic-info">
                    <div class="row-nowrap justify-content-space-between title-div">
                        <h1 class="fw-bold fz-2">{product.name}</h1>
                        <h1 class="fw-bold fz-2">
                            {#if (product.price === 0) }
                                Free
                            {:else if (!product.price) }
                                Whishlist
                            {:else}
                                ${product.price}
                            {/if}
                        </h1>
                    </div>
                    <h2 class="fz-1-2 fw-300">
                        {#each product.genres as item}
                            {#if item !== product.genres[product.genres.length - 1]}
                                {item},&nbsp
                            {:else}
                                {item}
                            {/if}
                        {/each}
                    </h2>
                </div>
                <p class="fw-300" style="line-height: 1.7;">{product.description}</p>
                <h4 class="fz-1-3 fw-300 row-nowrap align-items-center">
                    {#if product.rating}
                        <i>Majority of players rated this game {product.rating}/10</i> &nbsp
                        <Star size="big" />
                    {:else}
                        <i>Not out yet</i>
                    {/if}
                </h4>
                <h3 class="fz-1-3 fw-300">Made by
                    {#each product.developers as dev}
                        {#if dev !== product.developers[product.developers.length - 1]}
                            <span class="fw-bold">{dev},</span>
                        {:else}
                            <span class="fw-bold">{dev}</span>
                        {/if}
                    {/each}
                </h3>
            </div>
        </div>

        {#if product.isDefault === false}
            <div class="row-nowrap gap-2 align-items-center justify-content-flex-end option-buttons">
                <a 
                    href="/games/{product._id}/update" 
                    class="btn-outlined-wheatfield br-xs pl-0-8 pr-0-8"
                    style="padding-top: .65rem; padding-bottom: .65rem;"
                >
                    Update
                </a>
                <form method="POST" action="?/delete" use:enhance>
                    <button type="submit" class="btn-outlined-wheatfield br-xs pt-0-6 pb-0-6 pl-0-8 pr-0-8">Delete</button>
                </form>
            </div>
        {/if}
    </div>
</div>

<style lang="scss">
    @use 'axlothecook-sass-library/sass-library/breakpoints' as bp;

    @include bp.xl-down {
        .default-split-card {
            grid-template-columns: 1fr 1.2fr;
        }
        .title-div {
            gap: 5rem;
        }
    }

    @include bp.md-down {
        .default-split-card {
            display: flex;
            flex-direction: column;
            gap: 2rem;
        }
        .split-card-img {
            height: 25rem;
        }
        .product-info {
            padding-left: 0;
            gap: .9rem;
        }
        .title-div h1 {
            font-size: 1.8rem;
        }
        .option-buttons {
            justify-content: center;
        }
        p {
            font-size: .8rem;
        }
        h4 i, .product-info h3, h3 span {
            font-size: 1rem;
        }
    }

    @include bp.xs-down {
        .split-card-img {
            height: 18rem;
        }
        .title-div {
            gap: 1rem;
        }
        .title-div h1 {
            font-size: 1.2rem;
        }
        .basic-info h2 {
            font-size: 1rem;
        }
    }
</style>