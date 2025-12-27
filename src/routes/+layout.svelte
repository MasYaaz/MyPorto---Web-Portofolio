<script lang="ts">
	import './layout.css';
	import { fade } from 'svelte/transition';
	import { page } from '$app/state';
	import { onMount } from 'svelte';
	import { ui } from '$lib/stores/UIStates.svelte';
	import Navbar from '$lib/component/Navbar.svelte';

	let { children } = $props();
	onMount(() => {
		window.addEventListener('scroll', ui.handleScroll);
	});
</script>

<svelte:head>
	<link rel="icon" href="./light-theme.svg" media="(prefers-color-scheme: light)" />
	<link rel="icon" href="./dark-theme.svg" media="(prefers-color-scheme: dark)" />
	<title>MyPorto - Web Portofolio</title>
</svelte:head>

<Navbar />
<main
	class="no-scrollbar relative flex min-h-screen w-full flex-col bg-[url('/src/images/bg.webp')] bg-cover bg-center sm:justify-center"
>
	{#key page.url.pathname}
		<div in:fade={{ duration: 300 }} class="relative z-10 h-full w-full">
			{@render children()}
		</div>
	{/key}
</main>
