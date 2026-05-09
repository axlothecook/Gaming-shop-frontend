<script lang="ts">
    import Brush from "../icons/homepage/Brush.svelte";
    import Book from "../icons/homepage/Book.svelte";
    import Feather from '../icons/homepage/Feather.svelte';
    import Trash from "../icons/homepage/Trash.svelte";
    // import '../../../../public/sass/index.scss';
</script>

<div class="homepage-content-text-div">
    <section class="section-main-title">
        <h1>Welcome to The Game Shop</h1>
        <h3>We prepared a lot of goodies for you to check out</h3>
    </section>
    <section class="section-introduction">
        <h2>What is it?</h2>
        <h3>A sandbox for tracking products by categories and catalog.</h3>
    </section>
    <section class="section-ruleset">
        <h2>What can you do?</h2>
        <ul>
            <li>
                <Brush />
                <h3>Create any game, genre or developer you want</h3>
            </li>

            <li>
                <Book />
                <h3>Browse the current catalog</h3>
            </li>

            <li>
                <Feather />
                <h3>Update any game, genre or dev you want*</h3>  
            </li>

            <li>
                <Trash />
                <h3>Delete any game, genre or dev you want*</h3>  
            </li>
        </ul>
        <h5>*default games, genres and developers cannot be modified</h5>
    </section>
</div>