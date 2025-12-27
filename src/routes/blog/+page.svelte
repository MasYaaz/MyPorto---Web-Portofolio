<script lang="ts">
	// Contoh data artikel (nanti bisa diambil dari API atau markdown files)
	const blogPosts = [
		{
			slug: 'membuat-navbar-interaktif-svelte-5',
			title: 'Membuat Navbar Interaktif dengan Svelte 5 Runes',
			description:
				'Panduan lengkap membuat navbar responsif dan dinamis dengan fitur dark mode dan scroll effect.',
			date: '2024-07-20',
			tags: ['Svelte', 'Runes', 'Frontend', 'Tailwind'],
			imageUrl: 'https://picsum.photos/seed/svelte/800/400' // Ganti dengan gambar cover artikel
		},
		{
			slug: 'optimasi-ikon-di-svelte',
			title: 'Optimasi Penggunaan Ikon di Aplikasi Svelte',
			description: 'Cara menggunakan CDN ikon tunggal dan tips optimasi performa loading ikon.',
			date: '2024-07-15',
			tags: ['Svelte', 'Optimasi', 'UI/UX'],
			imageUrl: 'https://picsum.photos/seed/icon/800/400'
		},
		{
			slug: 'struktur-folder-sveltekit-terbaik',
			title: 'Struktur Folder SvelteKit Terbaik untuk Proyek Skala Besar',
			description: 'Tips mengorganisir kode SvelteKit agar mudah dikelola dan diskalakan.',
			date: '2024-07-10',
			tags: ['SvelteKit', 'Arsitektur', 'Proyek'],
			imageUrl: 'https://picsum.photos/seed/folder/800/400'
		}
	];
</script>

<section
	class="min-h-screen bg-secondary px-4 pt-24 pb-16 text-primary
                transition-colors duration-500 md:px-16 lg:px-32
                dark:bg-primary dark:text-secondary"
>
	<div class="container mx-auto max-w-4xl">
		<h1 class="mb-12 text-center font-primary text-4xl font-black lg:text-5xl">Latest Posts</h1>

		<div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-12">
			{#each blogPosts as post (post.slug)}
				<a
					href="/blog/{post.slug}"
					class="group block transform overflow-hidden rounded-xl
                                       border border-gray-200 bg-white transition-all
                                       duration-300 hover:scale-[1.02] hover:shadow-lg dark:border-gray-700 dark:bg-gray-800"
				>
					<img
						src={post.imageUrl}
						alt={post.title}
						class="h-48 w-full object-cover"
						loading="lazy"
					/>
					<div class="p-6">
						<h2
							class="mb-2 font-display text-xl font-bold group-hover:text-blue-500 dark:group-hover:text-cyan-400"
						>
							{post.title}
						</h2>
						<p class="mb-4 text-sm text-gray-600 dark:text-gray-400">
							{post.description}
						</p>
						<div class="flex flex-wrap gap-2 text-xs font-medium">
							{#each post.tags as tag}
								<span
									class="rounded-full bg-blue-100 px-2 py-1 text-blue-800 dark:bg-cyan-900 dark:text-cyan-300"
								>
									{tag}
								</span>
							{/each}
						</div>
						<p class="mt-4 text-xs text-gray-500 dark:text-gray-500">
							{new Date(post.date).toLocaleDateString('en-US', {
								year: 'numeric',
								month: 'long',
								day: 'numeric'
							})}
						</p>
					</div>
				</a>
			{/each}
		</div>

		{#if blogPosts.length === 0}
			<p class="mt-10 text-center text-lg text-gray-500 dark:text-gray-400">
				No blog posts yet. Stay tuned!
			</p>
		{/if}
	</div>
</section>
