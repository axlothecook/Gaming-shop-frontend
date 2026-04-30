<script lang="ts">
  import EditCategory from '$lib/reusable/Edit-Category.svelte';

  const { data } = $props();
  const genre = {
    title: data.category.name,
    path: data.path,
    details: data.category
  };
//   console.log('update category (genre) page: ', genre.title);
</script>

<EditCategory title={genre.title} path={genre.path} details={data.category} />