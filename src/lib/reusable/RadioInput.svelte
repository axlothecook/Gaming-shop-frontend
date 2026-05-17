<script lang="ts">
    let { item, onclick, selected = false } = $props();
</script>
<button
    class="fz-1 fw-300 p-0-7 br-xs w-fit"
    class:selected
    id="{item.id}"
    type="button"
    onclick={onclick}
>
    {item.value}
</button>

<style lang="scss">
    @use 'axlothecook-sass-library/sass-library/variables' as *;
    @use 'sass:color';

    button.selected {
        background-color: $secondary;
    }
    button:hover {
        background-color: color.mix(#000, $primary, 40%);
    }
</style>