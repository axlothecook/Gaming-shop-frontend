<script lang="ts">
  import EditCategory from '$lib/reusable/Edit-Category.svelte';
  import ErrorPopup from '$lib/reusable/ErrorPopup.svelte';
  let { data, form } = $props();
</script>

<ErrorPopup error={form?.error || null} />
<div class="column-nowrap gap-1 pt-1-5 w-full">
  <EditCategory title={data.category.name} path={data.path} details={data.category} />
</div>