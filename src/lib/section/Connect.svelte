<script lang="ts">
	const socialLinks = [
		{
			name: 'Github',
			label: 'Github',
			href: 'https://github.com/MasYaaz',
			icon: './images/github.svg',
			shouldInvert: true
		},
		{
			name: 'Assets',
			label: 'Assets',
			href: 'https://www.shutterstock.com/g/MasYaaz',
			icon: './images/shutterstock.svg',
			shouldInvert: false
		},
		{
			name: 'Blog',
			label: 'Blog',
			href: '/blog',
			icon: 'https://unpkg.com/lucide-static@latest/icons/book-open.svg',
			shouldInvert: true
		}
	];
</script>

<section
	class="z-30 flex min-h-screen w-full flex-col items-center justify-center gap-12 bg-secondary py-20 dark:bg-primary"
	id="section_5"
>
	<div class="px-6 text-center">
		<h2 class="mb-4 font-primary text-3xl font-black text-primary lg:text-5xl dark:text-secondary">
			Mari Berkolaborasi
		</h2>
		<p class="text-primary/70 dark:text-secondary/70">
			Lihat hasil karya saya atau baca pemikiran saya di bawah ini.
		</p>
	</div>

	<div class="container grid grid-cols-1 gap-8 px-6 md:grid-cols-3 lg:px-16">
		{#each socialLinks as link}
			<a
				href={link.href}
				target="_blank"
				class="group flex flex-col items-center rounded-2xl bg-white/5 p-8 transition-all hover:bg-white/10"
			>
				<img
					src={link.icon}
					alt={link.name}
					class="mb-4 h-20 w-20 transition-transform group-hover:scale-110 lg:h-16 lg:w-16"
					class:dark:invert={link.shouldInvert}
					loading="lazy"
				/>
				<span class="font-bold dark:text-white">{link.label}</span>
			</a>
		{/each}
	</div>

	<p class="mt-20 font-primary text-primary italic opacity-50 dark:text-secondary">
		-- Thanks for your attention --
	</p>
</section>
