<!-- <h1>All developers</h1>
<a href="/developers/4">view a dev</a>
<a href="/">go home</a> -->

<script lang="ts">
  import Categories from '$lib/reusable/Categories.svelte';
  import type { CategoryDetailsObject } from '../../app.js';
    import '../../styles/categories.css';
	import { setContext } from 'svelte';
	let { data } = $props();
    // console.log('data dev layout:', data.path);

    const category: CategoryDetailsObject = { 
        title: data.title, 
        path: data.path, 
        array: data.array 
    };

	setContext('devsData', category);
</script>

<Categories title={category.title} path={category.path} array={category.array} />