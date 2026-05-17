<script lang="ts">
    let { wide = false } = $props();
</script>

<form
    action="/search"
    method="GET"
    class="row-nowrap align-items-center gap-1 {wide ? 'w-full' : ''}"
>
    <input
        class="border-style-solid border-width-1 br-xs fz-1 fw-500 pt-0-7 pb-0-7 pl-0-5 pr-0-5 {wide ? 'flex-1' : 'w-15'}"
        type="text"
        name="searchString"
        autocomplete="off"
        placeholder="Search products"
    >
    <button
        type="submit"
        class="btn-outlined-wheatfield br-xs pt-0-6 pb-0-6 pl-0-9 pr-0-9"
        style="font-weight: 500;"
    >
        Search
    </button>
</form>

<style lang="scss">
    @use 'axlothecook-sass-library/sass-library/breakpoints' as bp;

    @include bp.xs-down {
        form[action="/search"]:not(.w-full) input {
            width: 9rem;
        }
    }
</style>
