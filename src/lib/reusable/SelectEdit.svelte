<script lang="ts">
    import Checked from "$lib/icons/checkbox/Checked.svelte";
    import Unchecked from "$lib/icons/checkbox/Unchecked.svelte";
    const { selectedItemsArray = [], categoryArray, title, field } = $props();

    // svelte-ignore state_referenced_locally
    let selectedSet = $state(new Set<string>(selectedItemsArray));

    const handleChange = (event: Event) => {
        const select = event.target as HTMLSelectElement;
        const next = new Set<string>();
        for (const option of select.selectedOptions) next.add(option.value);
        selectedSet = next;
    };
</script>

<div class="column-nowrap">
    <h3 class="pb-0-7">{title}</h3>
    <select class="default-select" name="{field}" id="{field}" multiple onchange={handleChange}>
        {#each categoryArray as category (category._id) }
            <option
                value="{category.name}"
                selected={selectedItemsArray.includes(category.name)}
            >
                {#if selectedSet.has(category.name)}
                    <Checked />
                {:else}
                    <Unchecked />
                {/if}
                <h3>{category.name}</h3>
            </option>
        {/each}
    </select>
</div>
