<script lang="ts">
	import DarkmodeButton from './Navbar/DarkmodeButton.svelte';
	import HamburgerButton from './Navbar/HamburgerButton.svelte';
	import DekstopMenu from './Navbar/DekstopMenu.svelte';
	import MobileMenu from './Navbar/MobileMenu.svelte';
	import { ui } from '$lib/stores/UIStates.svelte';
	import HomeButton from './Navbar/HomeButton.svelte';
	import Logo from './Navbar/Logo.svelte';
</script>

<header class="flex w-full justify-center">
	<div
		class:shadow-none={ui.firstPageNavbarMode}
		class:bg-transparent={ui.firstPageNavbarMode}
		class:dark:shadow-none={ui.firstPageNavbarMode}
		class:dark:bg-transparent={ui.firstPageNavbarMode}
		class="fixed top-0 z-50 flex h-16 w-full justify-center bg-primary/90 px-6 shadow-xl/50 transition-all duration-200 ease-in lg:h-20 lg:px-16 dark:bg-secondary/90"
	>
		<div class="container flex w-full justify-between">
			<Logo />
			<DekstopMenu />

			<div class="flex w-[5%] items-center justify-end gap-2">
				<HomeButton />
				<DarkmodeButton />
				<!-- Hamburger -->
				<HamburgerButton />
			</div>
		</div>
	</div>
	<MobileMenu />
</header>
