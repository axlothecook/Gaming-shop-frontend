<script lang="ts">
  import EditCategory from '$lib/reusable/Edit-Category.svelte';

  const { data } = $props();
  const dev = {
    title: data.category.name,
    path: data.path,
    details: data.category
  };
//   console.log('update category (dev) page: ', dev.title);
</script>

<EditCategory title={dev.title} path={dev.path} details={data.category} />