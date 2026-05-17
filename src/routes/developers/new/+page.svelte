<script lang="ts">
  import AddCategory from '$lib/reusable/Add-Category.svelte';
  import ErrorPopup from '$lib/reusable/ErrorPopup.svelte';
  let { form } = $props();
</script>

<ErrorPopup error={form?.error || null} />
<div class="column-nowrap gap-1 pt-1-5 w-full">
  <AddCategory path="developers" title="Developer" field="dev" />
</div>