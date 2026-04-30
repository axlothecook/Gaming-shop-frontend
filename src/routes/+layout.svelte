<script lang="ts">
	import { setContext } from 'svelte';
	import favicon from '$lib/assets/favicon.svg';
	import Navbar from '$lib/reusable/Navbar.svelte';
	import Footer from '$lib/reusable/Footer.svelte';
	import '../styles/global.css';
	import '../styles/error-popup.css';
	let { data, children } = $props();
	setContext('navbarData', data.navbarLinks);
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>
<div class="global-wrapper">
	<div class="main">
		<Navbar />
		{@render children()}
	</div>
	<Footer />
</div>