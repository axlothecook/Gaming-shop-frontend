<script lang="ts">
    let { item, cover = false } = $props();
</script>

<a href="{item.href}" class={cover ? 'flex-1' : ''}>
    <div
        class="grid align-items-center br-md bg-pos-center-center bg-repeat-no view-links-div {cover ? 'bg-size-cover' : 'bg-size-100'}"
        style="grid-template-columns: 1fr 2.2fr; transition: transform .5s; background-image: {item.imgPath};"
    >
        <span class="fz-2-2 fw-600" style="color: {item.txtClr}">{item.text}</span>
    </div>
</a>

<style lang="scss">
    @use 'axlothecook-sass-library/sass-library/breakpoints' as bp;

    .view-links-div {
        padding: 8rem 1rem;
    }
    .view-links-div:hover {
        transform: scale(1.05);
    }

    @include bp.xl-down {
        .view-links-div {
            padding: 7rem 1rem;
        }
    }

    @include bp.md-down {
        .view-links-div {
            padding: 5rem 1rem;
        }
    }
</style>
