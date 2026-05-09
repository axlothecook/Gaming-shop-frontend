<script lang="ts">
  import ErrorPopup from '$lib/reusable/ErrorPopup.svelte';
  import IndividualCategory from '$lib/reusable/Individual-Category.svelte';
  let { data, form } = $props();
  const dev = {
    title: data.category.name,
    btnTitle: "Go back to developers",
    path: data.path,
    details: data.category,
    productsArr: data.productsArr,
    numberOfGames: data.numberOfGames
  };
</script>

<ErrorPopup error={form?.error || null} />
<div class="content">
  <IndividualCategory category={dev} />
</div>