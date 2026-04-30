<script lang="ts">
  import AddCategory from '$lib/reusable/Add-Category.svelte';
  import ErrorPopup from '$lib/reusable/ErrorPopup.svelte';
  import '../../../styles/category_id.css';
  let { form } = $props();
</script>

<ErrorPopup error={form?.error || null} />
<div class="content">
  <AddCategory path="developers" title="Developer" field="dev" />
</div>