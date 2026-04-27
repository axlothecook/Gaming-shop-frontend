<script lang="ts">
    const { selectedItemsArray, categoryArray, title, field } = $props();
    // for(let i = 0; i < categoryArray.length; i++) {
    //     console.log('item: ', categoryArray[i].name);
    //     console.log(selectedItemsArray.includes(categoryArray[i].name))
    // } ;
</script>

<div class="edit-selects">
    <h2>{title}</h2>
    <select name="{field}" id="{field}" multiple>
        {#each categoryArray as category (category._id) } 
            {#if selectedItemsArray.includes(category.name)} 
                <option value="{category.name}" selected>{category.name}</option>
            {:else}
                <option value="{category.name}">{category.name}</option>
            {/if}
        {/each}
    </select>
</div>
