<script>
	import { scrollToSection } from '../utils/scrollTo';
	import { navItems, socialMedia } from '../stores/array';
	import { theme } from '$lib/stores/DarkModeStates.svelte';
	$: logoSrc = theme.darkMode ? './dark-theme.svg' : './light-theme.svg';
</script>

<footer class="font-primary relative w-full overflow-hidden pt-20">
	<!-- Background Image -->
	<div class="absolute inset-0 bg-[url('./images/back.webp')] bg-cover bg-center"></div>

	<!-- Overlay Transparan -->
	<div
		class="absolute inset-0 bg-linear-to-t from-secondary/60 via-secondary/80 to-secondary dark:from-primary/90 dark:via-primary/95 dark:to-primary"
	></div>
	<!-- Ubah ke bg-black/60 jika mau gelap -->

	<!-- Konten Footer -->
	<div class="relative z-10 px-6 py-10 text-primary dark:text-secondary">
		<div class="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-6 md:grid-cols-3">
			<!-- Kolom 1: Brand/Deskripsi -->
			<div>
				<img
					src={logoSrc}
					alt="logo"
					width="187"
					height="187"
					class="-mt-10 -mb-5 h-auto w-30"
					loading="lazy"
				/>
				<p class="max-w-md text-justify text-sm">
					Terima kasih telah mengunjungi portofolio saya. Jangan ragu untuk menghubungi saya untuk
					kerja sama atau proyek!
				</p>
			</div>

			<!-- Kolom 2: Navigasi -->
			<div class="flex flex-col lg:ml-20">
				<h3 class="text-dark mb-2 text-xl font-semibold">Navigasi</h3>
				<ul class="space-y-1 text-sm">
					{#each navItems as nav}
						<li>
							<button
								onclick={() => scrollToSection(nav.id)}
								class="hover:scale-105 hover:cursor-pointer">{nav.label}</button
							>
						</li>
					{/each}
				</ul>
			</div>

			<!-- Kolom 3: Sosial Media -->
			<div class="flex flex-col lg:items-end">
				<h3 class="text-dark mb-2 text-xl font-semibold">Ikuti Saya</h3>
				<div class="flex space-x-4">
					{#each socialMedia as s}
						<a target="_blank" href={s.href} aria-label={s.aria} class="hover:scale-105">
							<img src={s.icon} alt={s.aria} class="text-dark text-xl" />
						</a>
					{/each}
				</div>
			</div>
		</div>

		<!-- Garis dan copyright -->
		<div class="mx-auto flex max-w-7xl flex-col">
			<hr class="my-6 border-[0.5px] border-primary dark:border-secondary" />
			<p class="text-dark2 text-center text-sm">
				&copy; 2025 MyPorto - Web Portofolio . All rights reserved.
			</p>
		</div>
	</div>
</footer>
