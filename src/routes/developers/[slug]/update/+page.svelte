<script lang="ts">
  import EditCategory from '$lib/reusable/Edit-Category.svelte';
  import ErrorPopup from '$lib/reusable/ErrorPopup.svelte';
  let { data, form } = $props();
  const dev = {
    title: data.category.name,
    path: data.path,
    details: data.category
  };
</script>

<ErrorPopup error={form?.error || null} />
<div class="content">
  <EditCategory title={dev.title} path={dev.path} details={data.category} />
</div>