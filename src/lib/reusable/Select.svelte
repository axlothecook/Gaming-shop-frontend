<script lang="ts">
    import Checked from "$lib/icons/checkbox/Checked.svelte";
    import Unchecked from "$lib/icons/checkbox/Unchecked.svelte";

    const { arr, title = null, selectTitle = null, field = null } = $props();
    // console.log('passed array: ', arr[0]);
</script>


<div>
    {#if selectTitle }
        <h4 style="padding-bottom: .7rem">{selectTitle}</h4>
    {/if}
    <select name="{title || field }" id="{title || field }-select" multiple>
        {#each arr as item (item.id ? item.id : item._id) }
            <option value="{item.name}">
                {#if item.checked === "true" }
                    <Checked />
                {:else}
                    <Unchecked />
                {/if}
                <h3>{item.name === 'null' ? 'Not rated' : item.name}</h3>
                {#if item.numberOfGames}
                    <h3>[ {item.numberOfGames} ]</h3>
                {/if}
            </option>
        {/each}
    </select>
</div>