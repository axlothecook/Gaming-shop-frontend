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
    <div class="column-nowrap gap-0-3 w-full">
        <button
            class="row-nowrap justify-content-space-between gap-1 pt-0-5 pb-0-5 pl-1 pr-1 br-xs w-full t border-style-solid border-width-1 bg-hover-primary-dark-4"
            style="touch-action: manipulation;"
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