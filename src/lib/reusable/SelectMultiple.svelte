<script lang="ts">
    import Checked from "$lib/icons/checkbox/Checked.svelte";
    import Unchecked from "$lib/icons/checkbox/Unchecked.svelte";
    const { 
        arr, 
        title = null, 
        selectTitle = null, 
        field = null,
        onchange = null,
        counts = {},
        selected = new Set<string>()
    } = $props();
</script>

<div>
    {#if selectTitle}
        <h3 class="pb-0-7">{selectTitle}</h3>
    {/if}
    <select 
        class="default-select"        
        onchange={onchange} 
        multiple
    >
        {#each arr as item (item.id || item._id) }
            <option 
                value="{item.name}"
                class:selected={selected.has(item.name)}
            >
                {#if selected.has(item.name) }
                    <Checked />
                {:else}
                    <Unchecked />
                {/if}
                <h3>{item.name === 'null' ? 'Not out yet' : (item.value ?? item.name)}</h3>
                <h3>[ {counts[item.name] ?? 0} ]</h3>
            </option>
        {/each}
    </select>
</div>