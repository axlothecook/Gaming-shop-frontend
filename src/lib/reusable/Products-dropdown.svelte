<script lang="ts">
    import ArrowDown from "$lib/icons/arrows/Arrow-down.svelte";

    const { title, children } = $props();
    let counter: boolean = $state(false);
    const onclick = () => counter = !counter;
</script>

<section> 
    <div class="create-selects">
        <!-- {onclick} role="button" tabindex="1" -->
        <div class="filter-category">
            <h2>{title}</h2>
            <ArrowDown counter={counter} />
        </div>
        {@render children()}
    </div>
</section>