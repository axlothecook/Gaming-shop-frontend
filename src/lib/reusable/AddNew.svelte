<script lang="ts">
    const { title, path } = $props();
</script>

<div class="row-nowrap align-items-center gap-2">
    <h1 class="fz-2-7 fw-700">{title}</h1>
    <a href="/{path}/new">
        <button
            class="btn-outlined-wheatfield br-xs pt-0-5 pb-0-5 pl-0-8 pr-0-8"
        >
            Add new
        </button>
    </a>
</div>

<style lang="scss">
    @use 'axlothecook-sass-library/sass-library/breakpoints' as bp;

    @include bp.sm-down {
        div { justify-content: center; }
    }
    @include bp.xs-down {
        div {
            flex-direction: column;
            gap: .5rem;
            align-items: center;
        }
    }
</style>