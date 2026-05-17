<script lang="ts">
  import HomepageCategory from "$lib/components/HomepageCategory.svelte";
  import HomepageText from "$lib/components/HomepageText.svelte";
  import type { NavbarLink } from '../app';
  import { getContext } from 'svelte';
  const links: NavbarLink = getContext('navbarData');
</script>

<div class="grid gap-3 w-full pt-2-5 content" style="grid-template-columns: repeat(2, 1fr);">
  <HomepageText />
  <div class="column-nowrap gap-2">
    <HomepageCategory item={links[1]} />
    <div class="row-nowrap gap-1">
      <HomepageCategory item={links[2]} cover />
      <HomepageCategory item={links[3]} cover />
    </div>
  </div>
</div>

<style lang="scss">
  @use 'axlothecook-sass-library/sass-library/breakpoints' as bp;

  @include bp.md-down {
    .content {
      display: flex;
      flex-direction: column;
    }
  }
</style>