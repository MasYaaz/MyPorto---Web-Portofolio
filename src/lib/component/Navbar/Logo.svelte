<script lang="ts">
	import { theme } from '$lib/stores/DarkModeStates.svelte';
	import { ui } from '$lib/stores/UIStates.svelte';
	import { onMount } from 'svelte';

	let isReady = $state(false);

	onMount(() => {
		isReady = true;
	});
</script>

<div class="flex w-[20%] items-center">
	{#if isReady}
		{#key theme.darkMode}
			<img
				src={ui.firstPageNavbarMode
					? theme.darkMode
						? '/dark-theme.svg'
						: '/light-theme.svg'
					: theme.darkMode
						? '/light-theme.svg'
						: '/dark-theme.svg'}
				alt="logo"
				width="187"
				height="187"
				class="w-18 md:w-26 lg:w-34"
				loading="eager"
			/>
		{/key}
	{:else}
		<div class="h-10 w-18 md:w-26 lg:w-34"></div>
	{/if}
</div>
