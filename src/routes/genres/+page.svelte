<script lang="ts">
  import Categories from '$lib/reusable/Categories.svelte';
    import '../../styles/categories.css';
	import { getContext, setContext } from 'svelte';
	let { data } = $props();
    console.log('data genre layout:', data);

	setContext('genresData', () => data);

    const { title, path, array } = getContext('genresData');
</script>

<Categories title={title} path={path} array={array} />

