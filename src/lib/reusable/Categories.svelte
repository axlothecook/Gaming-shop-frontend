<script lang="ts">
    import '../../styles/categories.css';
  import AddNew from './AddNew.svelte';
	let { title, path, array } = $props();
    // console.log('data category layout:', title);
</script>

<section>
    <AddNew title={title} path={path} />
    <div class="category-wrapper">
    {#each array as item (item._id) }
        <a href="/{path}/{item._id.toString()}">
            <div class="category-card" style="background-image: {item.url}">
            {#if path !== 'developers' }
                <div class="genre-card">
                    <h3>{item.name}</h3>
                </div>
            {/if}
            </div>
        </a>
    {/each}
    </div>
</section>