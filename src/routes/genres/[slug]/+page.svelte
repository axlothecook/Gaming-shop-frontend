<script lang="ts">
  import IndividualCategory from '$lib/reusable/Individual-Category.svelte';

    const { data } = $props();
    const genre = {
        title: data.category.name,
        btnTitle: "Go back to genres",
        path: data.path,
        details: data.category,
        productsArr: data.productsArr
    };
    console.log('genre page: ', genre.title);
</script>

<IndividualCategory category={genre} />