<script lang="ts">
    let { item } = $props();
    // console.log('radio input: ', item);
    // let isPressed = false;
	// $: btnVariant = isPressed ? "filled" : "outline";
</script>
<button 
    class="btn active-radio-btn"  
    id="{item.id}" 
    name="{item.name}" 
    value="{item.value}" 
    type="submit"
    // on:click={() => isPressed = !isPressed}
    // color="green"
	// variant={btnVariant}
    >
    <h3>{item.text}</h3>
</button>
