<script lang="ts">
    import { slide } from 'svelte/transition';
    import ArrowDown from "$lib/icons/arrows/Arrow-down.svelte";

    const { title, children } = $props();
    let counter: boolean = $state(true);
    const onclick = () => counter = !counter;
</script>

<section> 
    <div class="create-selects">
        <button 
            class="filter-category"
            {onclick}
            type="button"
        >
            <h2>{title}</h2>
            <ArrowDown counter={counter} />
        </button>
        {#if counter}
            <div transition:slide={{ duration: 400 }}>
                {@render children()}
            </div>
        {/if}
    </div>
</section>