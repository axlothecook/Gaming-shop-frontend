<script lang="ts">
    import { slide } from 'svelte/transition';
    import ArrowDown from "$lib/icons/arrows/Arrow-down.svelte";
    const { title, children } = $props();
    const storageKey = `dropdown:${title}`;

    const initialCounter = (() => {
        if (typeof window === 'undefined') return true;
        const stored = sessionStorage.getItem(storageKey);
        return stored === null ? true : stored === 'true';
    })();

    let counter: boolean = $state(initialCounter);
    
    const onclick = () => {
        counter = !counter;
        sessionStorage.setItem(storageKey, String(counter));
    };
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