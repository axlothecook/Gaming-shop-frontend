<script lang="ts">
  import HomepageCategory from "$lib/components/HomepageCategory.svelte";
  import HomepageText from "$lib/components/HomepageText.svelte";
  import '../styles/homepage.css';

  import { getContext } from 'svelte';
  const data: Function = getContext('navbarData');
  // console.log('inside home: ');
  // console.log(data());
</script>

<HomepageText />
<div class="content-links">
  <HomepageCategory item={data().navbarLinks[1]} />
  <div class="content-links-subchild-div">
    <HomepageCategory item={data().navbarLinks[2]} />
    <HomepageCategory item={data().navbarLinks[3]} />
  </div>
</div>