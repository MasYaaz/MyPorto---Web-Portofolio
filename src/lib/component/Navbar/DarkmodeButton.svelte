<script>
	import { theme } from '$lib/stores/DarkModeStates.svelte';
	import { ui } from '$lib/stores/UIStates.svelte';
	import { Moon, Sun } from 'lucide-svelte';
</script>

<button
	onclick={theme.toggleDark}
	aria-label="tombol darkmode"
	class:text-primary={ui.firstPageNavbarMode ? !theme.darkMode : theme.darkMode}
	class:text-secondary={ui.firstPageNavbarMode ? theme.darkMode : !theme.darkMode}
	class=" transition-all duration-300 hover:scale-110 hover:cursor-pointer 2xl:mb-1"
>
	{#if theme.darkMode}
		<Moon size="23" />
	{:else}
		<Sun size="23" />
	{/if}
</button>
