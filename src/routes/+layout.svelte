<script lang="ts">
	import { setContext } from 'svelte';
	import { navigating } from '$app/stores';
	import favicon from '$lib/assets/favicon.svg';
	import Navbar from '$lib/reusable/Navbar.svelte';
	import Footer from '$lib/reusable/Footer.svelte';
	import '../styles/global.css';
	import '../styles/error-popup.css';
	import '../styles/loading.css';

	let { data, children } = $props();
	setContext('navbarData', data.navbarLinks);

	let showSpinner = $state(false);

	$effect(() => {
		if ($navigating?.to) {
			const timeout = setTimeout(() => {
				showSpinner = true;
			}, 200);
			return () => {
				clearTimeout(timeout);
				showSpinner = false;
			};
		};
	});
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
	{#if showSpinner}
		<div class="loading-overlay">
			<div class="spinner"></div>
		</div>
	{/if}
</div>