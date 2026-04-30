<script lang="ts">
    import Star from "$lib/icons/Star.svelte";
    import { enhance } from '$app/forms';
    import type { GameObject } from "../../../app";
    import ErrorPopup from "$lib/reusable/ErrorPopup.svelte";
    let { data, form } = $props();
    const product: GameObject = data.product;
</script>

<ErrorPopup error={form?.error || null} />
<div class="content">
    <a href="/games" class="btn">Go Back</a>
    <div class="game-card-content">
        <div class="product-content">
            <div class="product-image" style="background-image: {product.url || 'linear-gradient(to right, red, yellow)'}"></div>
            <div class="product-info">
                <div class="basic-info">
                    <div class="title-div">
                        <h1>{product.name}</h1>
                        <h1>
                            {#if (product.price === 0) }
                                Free 
                            {:else if (!product.price) }
                                Whishlist
                            {:else}
                                ${product.price}
                            {/if}
                        </h1>
                    </div>
                    <h2>
                        {#each product.genres as item}
                            {#if item !== product.genres[product.genres.length - 1]}
                                {item},&nbsp
                            {:else}
                                {item}
                            {/if}
                        {/each}
                    </h2>
                </div>
                <p>{product.description}</p>
                <h4>
                    {#if product.rating}
                        <i>Majority of players rated this game {product.rating}/10</i> &nbsp
                        <Star sizeClass="star-big" />
                    {:else}
                        <i>Not out yet</i>
                    {/if}
                </h4>
                <h3>Made by 
                    {#each product.developers as dev}
                        {#if dev !== product.developers[product.developers.length - 1]}
                            <span>{dev},</span>
                        {:else}
                            <span>{dev}</span>
                        {/if}
                    {/each}
                </h3>
            </div>
        </div>

        {#if product.isDefault === false}
            <div class="option-buttons">
                <a href="/games/{product._id}/update" class="btn">Update</a>
                <form method="POST" action="?/delete" use:enhance>
                    <button type="submit" class="btn">Delete</button>
                </form>
            </div>
        {/if}
    </div>
</div>

<style>
    @import '../../../styles/secondary_style.css';
    @import '../../../styles/game_card.css';
</style>