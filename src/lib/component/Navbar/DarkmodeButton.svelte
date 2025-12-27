<script lang="ts">
	import { theme } from '$lib/stores/DarkModeStates.svelte';
	import { ui } from '$lib/stores/UIStates.svelte';
</script>

<button
	onclick={theme.toggleDark}
	aria-label="tombol darkmode"
	class="btn-darkmode transition-transform duration-500 hover:scale-110 hover:cursor-pointer"
>
	<div class="icon-toggle"></div>
</button>

<style>
	.icon-toggle {
		width: 24px;
		height: 24px;
		background-color: currentColor; /* Warna mengikuti class text-primary/secondary */
		transition: mask-image 0.2s ease-in-out;
		/* Default: Sun Icon */
		mask-image: url('https://unpkg.com/lucide-static@latest/icons/sun.svg');
		mask-size: contain;
		mask-repeat: no-repeat;
	}

	/* Jika mode Dark, ganti jadi Moon Icon */
	:global(html.dark) .icon-toggle {
		mask-image: url('https://unpkg.com/lucide-static@latest/icons/moon.svg');
	}

	/* Warna Default (Navbar di atas + Light Mode) */
	.btn-darkmode {
		color: var(--color-primary); /* Gunakan variabel warna Tailwind kamu */
		transition: color 0.3s ease;
	}

	/* KONDISI 1: Navbar di atas + Dark Mode */
	:global(html.dark) .btn-darkmode {
		color: var(--color-secondary);
	}

	/* KONDISI 2: Navbar sudah di-scroll (Scrolled) + Light Mode */
	:global(html.navbar-scrolled) .btn-darkmode {
		color: var(--color-secondary);
	}

	/* KONDISI 3: Navbar sudah di-scroll + Dark Mode */
	:global(html.dark.navbar-scrolled) .btn-darkmode {
		color: var(--color-primary);
	}
</style>
