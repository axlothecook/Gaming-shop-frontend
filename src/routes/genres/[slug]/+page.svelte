<script lang="ts">
  import ErrorPopup from '$lib/reusable/ErrorPopup.svelte';
  import IndividualCategory from '$lib/reusable/Individual-Category.svelte';
  let { data, form } = $props();
  const genre = {
    title: data.category.name,
    btnTitle: "Go back to genres",
    path: data.path,
    details: data.category,
    productsArr: data.productsArr
  };
</script>

<ErrorPopup error={form?.error || null} />
<div class="content">
  <IndividualCategory category={genre} />
</div>