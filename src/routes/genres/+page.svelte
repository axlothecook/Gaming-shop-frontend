<script lang="ts">
    import Categories from '$lib/reusable/Categories.svelte';
    import type { CategoryDetailsObject } from '../../app.js';
    import '../../styles/categories.css';
	let { data } = $props();
    const category: CategoryDetailsObject = { 
        title: data.title, 
        path: data.path, 
        array: data.array 
    };
</script>

<div class="content">
    <Categories title={category.title} path={category.path} array={category.array} />
</div>