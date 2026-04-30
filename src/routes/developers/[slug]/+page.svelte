<script lang="ts">
  import IndividualCategory from '$lib/reusable/Individual-Category.svelte';

  const { data } = $props();
  const dev = {
    title: data.category.name,
    btnTitle: "Go back to developers",
    path: data.path,
    details: data.category,
    productsArr: data.productsArr
  };
  console.log('developer page: ', dev.title);
</script>

<IndividualCategory category={dev} />