<script lang="ts">
  import ErrorPopup from '$lib/reusable/ErrorPopup.svelte';
  import IndividualCategory from '$lib/reusable/Individual-Category.svelte';
  let { data, form } = $props();
  const genre = $derived({
    title: data.category.name,
    btnTitle: "Go back to genres",
    path: data.path,
    details: data.category,
    productsArr: data.productsArr,
    numberOfGames: data.numberOfGames
  });
</script>

<ErrorPopup error={form?.error || null} />
<div class="column-nowrap gap-1 pt-1-5 w-full">
  <IndividualCategory category={genre} />
</div>