<script lang="ts">
    import '../../styles/categories.css';
    import AddNew from './AddNew.svelte';
    import CategoryCard from './CategoryCard.svelte';
	let { title, path, array } = $props();
</script>

<section>
    <AddNew title={title} path={path} />
    <div class="category-wrapper">
        {#each array as item (item._id) }
            <CategoryCard {item} {path} />
        {/each}
    </div>
</section>