<script lang="ts">
	import { setContext } from 'svelte';
	import favicon from '$lib/assets/favicon.svg';
	import ErrorPopup from '$lib/reusable/ErrorPopup.svelte';
	import Navbar from '$lib/reusable/Navbar.svelte';
	import Footer from '$lib/reusable/Footer.svelte';
	import '../styles/global.css';
	let { data, children } = $props();
	setContext('navbarData', () => data);
	// $inspect(data);
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>
<div class="global-wrapper">
	<div class="main">
		<Navbar />
		<ErrorPopup />
		<div class="content">
			{@render children()}
		</div>
	</div>
	<Footer />
</div>