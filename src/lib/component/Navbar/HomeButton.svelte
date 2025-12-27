<script>
	import { goto } from '$app/navigation';
	import { page } from '$app/state';
	import { theme } from '$lib/stores/DarkModeStates.svelte';
	import { ui } from '$lib/stores/UIStates.svelte';
	import { House } from 'lucide-svelte';
</script>

{#if page.url.pathname === '/blog'}
	<button
		onclick={() => goto('/')}
		class:text-primary={ui.firstPageNavbarMode ? !theme.darkMode : theme.darkMode}
		class:text-secondary={ui.firstPageNavbarMode ? theme.darkMode : !theme.darkMode}
		class="h-full transition-transform duration-300 hover:scale-105 hover:cursor-pointer"
		><House /></button
	>
{/if}
