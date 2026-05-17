<script lang="ts">
	import { setContext } from 'svelte';
	import { navigating } from '$app/state';
	import favicon from '$lib/assets/favicon.svg';
	import Navbar from '$lib/reusable/Navbar.svelte';
	import MobileMenu from '$lib/reusable/MobileMenu.svelte';
	import Footer from '$lib/reusable/Footer.svelte';
	import '$lib/styles/index.scss';

	let { data, children } = $props();
	setContext('navbarData', data.navbarLinks);

	let showSpinner = $state(false);

	$effect(() => {
		if (navigating.to) {
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
<div class="global-wrapper-parent column-nowrap justify-content-space-between">
	<MobileMenu />
	<div class="position-relative pt-1-5 pb-1-5 pr-14 pl-14 flex-grow-1 column-nowrap align-items-center" id="main">
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

<style lang="scss">
	@use 'axlothecook-sass-library/sass-library/breakpoints' as bp;

	@media only screen and (max-width:  1780px) {
		#main {
			padding: 1.5rem 5rem;
		}
	}

	@include bp.xl-down {
		#main {
			padding: 1.5rem 2rem;
		}
	}

	@include bp.sm-down {
		#main {
			padding: 1rem;
		}
	}
</style>