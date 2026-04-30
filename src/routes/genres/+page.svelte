<script lang="ts">
  import Categories from '$lib/reusable/Categories.svelte';
  import type { CategoryDetailsObject } from '../../app.js';
    import '../../styles/categories.css';
	import { setContext } from 'svelte';
	let { data } = $props();
    // console.log('data genre layout:', data.path);

    const category: CategoryDetailsObject = { 
        title: data.title, 
        path: data.path, 
        array: data.array 
    };

	// setContext('genresData', category.title);
</script>

<Categories title={category.title} path={category.path} array={category.array} />