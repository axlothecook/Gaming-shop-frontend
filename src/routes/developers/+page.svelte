<script lang="ts">
    import Categories from '$lib/reusable/Categories.svelte';
	let { data } = $props();
</script>

<div class="column-nowrap gap-2 pt-1-5 w-full">
    <Categories title={data.title} path={data.path} array={data.array} />
</div>