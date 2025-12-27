<script lang="ts">
	import { page } from '$app/stores';

	// 1. Definisikan Data (Idealnya ini di +page.ts, tapi jika di sini gunakan const)
	const articleContent: Record<string, any> = {
		'membuat-navbar-interaktif-svelte-5': {
			title: 'Membuat Navbar Interaktif dengan Svelte 5 Runes',
			date: '2024-07-20',
			author: 'Aflah Mahdi Yazdi',
			bodyHtml: `... isi html ...`
		}
		// ... artikel lainnya
	};

	// 2. Gunakan $derived untuk menggantikan $: (Svelte 5 Way)
	let slug = $derived($page.params.slug);
	let post = $derived(
		slug
			? articleContent[slug]
			: {
					title: 'Not Found',
					bodyHtml: '<p>Artikel tidak ditemukan.</p>'
				}
	);
</script>

<svelte:head>
	<title>{post.title} | My Blog</title>
</svelte:head>

<section
	class="min-h-screen bg-secondary px-4 pt-32 pb-16 text-primary
           transition-colors duration-500 md:px-16 lg:px-32
           dark:bg-primary dark:text-secondary"
>
	<article class="container mx-auto max-w-3xl">
		{#if post.title !== 'Not Found'}
			<header class="mb-12 border-b border-primary/10 pb-8 dark:border-secondary/10">
				<h1
					class="mb-6 font-primary text-4xl leading-tight font-black tracking-tighter lg:text-6xl"
				>
					{post.title}
				</h1>

				<div class="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
					<div class="flex flex-col">
						<span class="font-bold text-primary dark:text-secondary">{post.author}</span>
						<span
							>{new Date(post.date).toLocaleDateString('en-US', {
								year: 'numeric',
								month: 'long',
								day: 'numeric'
							})}</span
						>
					</div>
				</div>
			</header>

			<div
				class="prose dark:prose-invert prose-headings:font-black
                      prose-headings:tracking-tight prose-p:leading-relaxed
                      prose-p:text-lg prose-img:rounded-2xl
                      prose-img:shadow-2xl prose-pre:bg-gray-900
                      prose-pre:shadow-inner max-w-none"
			>
				{@html post.bodyHtml}
			</div>
		{:else}
			<div class="py-20 text-center">
				<h1 class="mb-4 font-primary text-5xl font-black text-red-500">404</h1>
				<p class="text-xl opacity-60">Maaf, artikel yang kamu cari tidak ada.</p>
			</div>
		{/if}

		<footer class="mt-20 border-t border-primary/10 pt-10 dark:border-secondary/10">
			<div class="text-center">
				<a
					href="/blog"
					class="group inline-flex items-center gap-2 text-sm font-bold tracking-widest uppercase
                           transition-colors hover:text-blue-600 dark:hover:text-cyan-400"
				>
					<span class="transition-transform group-hover:-translate-x-2">&larr;</span>
					Back to Blog
				</a>
			</div>
		</footer>
	</article>
</section>
