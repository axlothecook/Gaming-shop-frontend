<script lang="ts">
    let { item, onclick, selected = false } = $props();
</script>
<button 
    class="btn"  
    class:selected
    id="{item.id}" 
    type="button"
    onclick={onclick}
>
    {item.value}
</button>