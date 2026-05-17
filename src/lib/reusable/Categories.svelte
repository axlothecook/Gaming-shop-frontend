<script lang="ts">
    import AddNew from './AddNew.svelte';
    import CategoryCard from './CategoryCard.svelte';
	let { title, path, array } = $props();
</script>

<section class="column-nowrap align-items-flex-start gap-0-5">
    <AddNew title={title} path={path} />
    <div class="grid br-sm category-wrapper w-full">
        {#each array as item (item._id) }
            <CategoryCard {item} {path} />
        {/each}
    </div>
</section>

<style lang="scss">
    @use 'axlothecook-sass-library/sass-library/breakpoints' as bp;

    .category-wrapper {
        grid-template-columns: repeat(5, 1fr);
        gap: 2rem;
        padding: 1rem;
    }

    @include bp.xxl-down {
        .category-wrapper {
            grid-template-columns: repeat(4, 1fr);
        }
    }

    @include bp.xl-down {
        .category-wrapper {
            grid-template-columns: repeat(3, 1fr);
        }
    }

    @include bp.md-down {
        .category-wrapper {
            grid-template-columns: repeat(2, 1fr);
        }
    }

    @include bp.sm-down {
        .category-wrapper {
            grid-template-columns: 1fr;
            padding: 2rem;
        }
    }

    @include bp.xs-down {
        .category-wrapper {
            padding: .5rem;
            gap: 1rem;
        }
    }
</style>