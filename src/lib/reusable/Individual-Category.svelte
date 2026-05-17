<script lang="ts">
    import GameCard from './Game-card.svelte';
    import { enhance } from '$app/forms';
	let { category } = $props();
    let imgLoaded = $state(false);
    let showImgSpinner = $state(false);

    $effect(() => {
        if (!imgLoaded) {
            const timeout = setTimeout(() => { showImgSpinner = true; }, 400);
            return () => clearTimeout(timeout);
        }
    });
</script>

<a href="/{category.path}" class="btn-outlined-wheatfield br-xs pt-0-5 pb-0-5 pl-0-8 pr-0-8">Go Back</a>
<div class="column-nowrap gap-2">
    <div class="category-img">
        {#if !imgLoaded && showImgSpinner}
            <div class="img-spinner-overlay">
                <div class="spinner"></div>
            </div>
        {/if}
        <img
            src={category.details.url}
            alt={category.details.name}
            onload={() => imgLoaded = true}
            class:loaded={imgLoaded}
        />
        <div class="card-overlay-frosted category-details">
            <h1>{category.details.name}</h1>
            <h3 class="pb-1"><i>
                Contains {category.numberOfGames}
                {#if (category.numberOfGames === 1)}
                    game
                {:else}
                    games
                {/if}
            </i></h3>
            {#if (!category.details.isDefault)}
                <div class="row-nowrap gap-2 justify-content-flex-end mt-1">
                    <a href="/{category.path}/{category.details._id}/update" class="btn-outlined-wheatfield text-primary br-xs pt-0-5 pb-0-5 pl-0-8 pr-0-8">Update</a>
                    <form method="POST" action="?/delete" use:enhance>
                        <button type="submit" class="btn-outlined-wheatfield text-primary br-xs pt-0-5 pb-0-5 pl-0-8 pr-0-8">Delete</button>
                    </form>
                </div>
            {/if}
        </div>
    </div>
    <div class="grid gap-2 br-xl pt-1 pb-2 products-list" style="grid-auto-rows: 0fr;">
        {#each category.productsArr as product (product._id)}
            <GameCard product={product} />
        {/each}
    </div>
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
        .category-details h1 {
            font-size: 2.7rem;
            font-weight: 600;
        }
        .category-details h3 i {
            font-size: 1.5rem;
        }
    }

    @include bp.xs-down {
        .products-list {
            padding: 1rem;
        }
    }
</style>