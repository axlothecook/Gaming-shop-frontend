<script lang="ts">
    import Brush from "../icons/homepage/Brush.svelte";
    import Book from "../icons/homepage/Book.svelte";
    import Feather from '../icons/homepage/Feather.svelte';
    import Trash from "../icons/homepage/Trash.svelte";
</script>

<div class="column-nowrap gap-3">
    <section class="column-nowrap align-items-center t-center gap-0-5">
        <h1 class="fz-2-5 section-main-title-h1">Welcome to The Game Shop</h1>
        <h3>We prepared a lot of goodies for you to check out</h3>
    </section>
    <section class="column-nowrap align-items-center t-center gap-0-5">
        <h2>What is it?</h2>
        <h3 class="fw-200">A sandbox for tracking products by categories and catalog.</h3>
    </section>
    <section class="column-nowrap align-items-center t-center gap-0-5">
        <h2>What can you do?</h2>
        <ul class="column-nowrap gap-1">
            <li class="row-nowrap align-items-center gap-0-5">
                <Brush />
                <h3>Create any game, genre or developer you want</h3>
            </li>

            <li class="row-nowrap align-items-center gap-0-5">
                <Book />
                <h3>Browse the current catalog</h3>
            </li>

            <li class="row-nowrap align-items-center gap-0-5">
                <Feather />
                <h3>Update any game, genre or dev you want*</h3>
            </li>

            <li class="row-nowrap align-items-center gap-0-5">
                <Trash />
                <h3>Delete any game, genre or dev you want*</h3>
            </li>
        </ul>
        <h5>*default games, genres and developers cannot be modified</h5>
    </section>
</div>

<style lang="scss">
    @use 'axlothecook-sass-library/sass-library/breakpoints' as bp;

    @include bp.xl-down {
        .section-main-title-h1 {
            font-size: 2rem;
        }
        h2 {
            font-size: 1.3rem;
        }
        h3 {
            font-size: 1rem;
        }
    }

    @include bp.xs-down {
        .section-main-title-h1 {
            font-size: 1.5rem;
            font-weight: 700;
        }
        h2 {
            font-size: 1.1rem;
            font-weight: 600;
        }
        h3 {
            font-size: .8rem;
        }
        h5 {
            font-size: .5rem;
        }
    }

    @media only screen and (max-width:  337px) {
        h3 {
            font-size: .6rem;
        }
        h5 {
            font-size: .4rem;
        }
    }
</style>
