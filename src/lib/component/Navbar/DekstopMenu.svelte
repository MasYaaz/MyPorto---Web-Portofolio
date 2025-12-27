<script>
	import { page } from '$app/state';
	import { navItems } from '$lib/stores/array';
	import { theme } from '$lib/stores/DarkModeStates.svelte';
	import { ui } from '$lib/stores/UIStates.svelte';
</script>

<!-- Desktop Nav -->
{#if page.url.pathname === '/'}
	<nav
		class="hidden items-center justify-end overflow-hidden transition-all duration-500 ease-in-out lg:flex"
		class:w-[0%]={ui.firstPageNavbarMode}
		class:w-[75%]={!ui.firstPageNavbarMode}
		class:opacity-0={ui.firstPageNavbarMode}
	>
		{#each navItems as item}
			<button
				onclick={() => ui.scrollToSection(item.id)}
				class="hover:text-light mr-4 w-25 border-b-2 pb-1 text-center font-display text-[13px] tracking-[1px] whitespace-nowrap text-secondary transition-all duration-300 hover:scale-105 hover:cursor-pointer md:text-[15px] lg:mr-10 dark:text-primary"
				class:scale-110={ui.halamanAktif === item.id}
				class:border-transparent={ui.halamanAktif !== item.id}
				class:border-secondary={ui.halamanAktif === item.id && !theme.darkMode}
				class:border-primary={ui.halamanAktif === item.id && theme.darkMode}
				aria-label={item.aria}
			>
				{item.label}
			</button>
		{/each}
	</nav>
{/if}
