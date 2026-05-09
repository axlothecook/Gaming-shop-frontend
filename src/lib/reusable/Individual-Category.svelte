<script lang="ts">
    import '../../styles/category_id.css';
    import GameCard from './Game-card.svelte';
    import { enhance } from '$app/forms';
	let { category } = $props();
</script>

<a href="/{category.path}" class="btn">Go Back</a>
<div class="main-content">
    <div class="category-info">
        <div class="category-img" style="background-image: {category.details.url}; background-size: 70% 120%">
            <div class="category-details">
                <h1>{category.details.name}</h1>
                <h3><i>
                    Contains {category.numberOfGames}
                    {#if (category.numberOfGames === 1) }
                        game
                    {:else}
                        games
                    {/if}
                </i></h3>
                {#if (category.isDefault) }
                    <div class="option-buttons">
                        <a href="/{category.path}/{category.details._id}/update" class="btn">Update</a>
                        <form method="POST" action="?/delete" use:enhance>
                            <button type="submit" class="btn">Delete</button>
                        </form>
                    </div>
                {/if}
            </div>
        </div>
    </div>
    <div class="products-list">
        {#each category.productsArr as product (product._id) }
            <GameCard product={product} />
        {/each}
    </div>
</div>