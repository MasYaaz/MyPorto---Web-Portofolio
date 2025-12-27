<script>
	import { navItems } from '$lib/stores/array';
	import { ui } from '$lib/stores/UIStates.svelte';
	import { slide } from 'svelte/transition';
</script>

<!-- Mobile Menu -->
{#if ui.menuMobileShow}
	<nav
		transition:slide={{ duration: 400 }}
		class="fixed inset-0 z-20 flex flex-col items-center justify-center bg-gray-900/50 backdrop-blur-sm 2xl:hidden"
	>
		{#each navItems as item}
			<button
				onclick={() => ui.scrollToSection(item.id)}
				aria-label={item.aria}
				class="my-4 w-[80%] border-b p-2 text-xl font-semibold tracking-wide text-white transition-colors hover:text-secondary"
			>
				{item.label}
			</button>
		{/each}
	</nav>
{/if}
