<script lang="ts">
    import '../../styles/categories.css';
	let { title, path, array } = $props();
    // console.log('data category layout:', title);
</script>

<section>
    <div class="title-and-add-btn-div">
        <h1>{title}</h1>
        <a href="/{path}/new">
            <button class="add-btn">Add New</button>
        </a>
    </div>
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