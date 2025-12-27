<script>
	import { page } from '$app/state';
	import { ui } from '$lib/stores/UIStates.svelte';
</script>

{#if page.url.pathname === '/'}
	<button
		onclick={ui.toggleMenuMobile}
		class:w-0={ui.firstPageNavbarMode}
		class:h-0={ui.firstPageNavbarMode}
		class:w-9={!ui.firstPageNavbarMode}
		class:h-9={!ui.firstPageNavbarMode}
		class="group flex flex-col items-center justify-center gap-1.5 transition-transform duration-300 lg:h-0 lg:w-0"
		class:open={ui.menuMobileShow}
		aria-label="Toggle Menu"
	>
		<div
			class="h-0.5 w-6 rounded-full bg-secondary transition-all duration-300 group-[.open]:translate-y-2 group-[.open]:rotate-45 dark:bg-primary"
		></div>

		<div
			class="h-0.5 w-6 rounded-full bg-secondary transition-all duration-300 group-[.open]:opacity-0 dark:bg-primary"
		></div>

		<div
			class="h-0.5 w-6 rounded-full bg-secondary transition-all duration-300 group-[.open]:-translate-y-2 group-[.open]:-rotate-45 dark:bg-primary"
		></div>
	</button>
{/if}
