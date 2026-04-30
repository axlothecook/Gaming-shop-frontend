<script lang="ts">
  import HomepageCategory from "$lib/components/HomepageCategory.svelte";
  import HomepageText from "$lib/components/HomepageText.svelte";
  import '../styles/homepage.css';
  import type { NavbarLink } from '../app';
  import { getContext } from 'svelte';
  const links: NavbarLink = getContext('navbarData');
</script>

<!-- class="content"  -->
<div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 3rem; width: 100%; padding-top: 2.5rem;">
  <HomepageText />
  <div class="content-links">
    <HomepageCategory item={links[1]} />
    <div class="content-links-subchild-div">
      <HomepageCategory item={links[2]} />
      <HomepageCategory item={links[3]} />
    </div>
  </div>
</div>