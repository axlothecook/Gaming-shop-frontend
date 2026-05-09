<script lang="ts">
    import Checked from "$lib/icons/checkbox/Checked.svelte";
    import Unchecked from "$lib/icons/checkbox/Unchecked.svelte";
    let { 
        arr, 
        onclick,
        counts = {},
        selected = null
    } = $props();
</script>

<div class="select-imitation">
    {#each arr as item (item.id)}
        <button 
            class="select-radio-btn" 
            class:selected={String(selected) === String(item.value)}
            type="button"
            onclick={() => onclick(item.value)}
        >
            {#if String(selected) === String(item.value) }
                <Checked />
            {:else}
                <Unchecked />
            {/if}
            <h3>{item.value === 'NaN' ? 'Not out yet' : item.value}</h3>
            <h3>[ {counts[item.value === 'null' ? 'NaN' : item.value] ?? 0} ]</h3>
        </button>
    {/each}
</div>