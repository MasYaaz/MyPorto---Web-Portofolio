<script>
	// Contoh data project - Nantinya ini bisa kamu pindahkan ke file konstanta
	const projects = [
		{
			title: 'WhatsApp Chatbot AI',
			pict: './images/chatbot.webp',
			description:
				'Chatbot pintar menggunakan Ollama untuk integrasi AI lokal dengan fitur message buffering.',
			tech: ['Bun', 'Ollama', 'Qwen 2.5', 'WhatsApp Web JS'],
			status: 'local',
			github: '#',
			live: ''
		},
		{
			title: 'Bukber IKPM Registration System',
			pict: './images/bukber-ikpm.webp',
			description:
				'Sistem manajemen event terpadu dengan fitur check-in QR Code dan dashboard admin multi-role untuk efisiensi registrasi peserta secara realtime.',
			tech: ['SvelteKit', 'TailwindCSS', 'Supabase', 'Qr Scanner'],
			status: 'online',
			github: '#',
			live: 'https://admin-bukberikpm.netlify.app/login'
		},
		{
			title: 'My Porto Web',
			pict: './images/myporto.webp',
			description:
				'Website portofolio yang kamu buka sekarang ini yang menerapkan konsep svelte runes secara konsisten.',
			tech: ['Sveltekit'],
			status: 'online',
			github: '#',
			live: '#'
		}
	];
</script>

<section
	id="section_4"
	class="flex min-h-screen w-full items-center bg-secondary py-20 dark:bg-primary"
>
	<div
		class="container mx-auto flex flex-col items-center px-6 transition-all duration-700 ease-out lg:px-16"
	>
		<div class="mb-12 text-center">
			<h2
				class="inline-block border-b-4 border-primary pb-1 font-primary text-3xl font-bold text-primary uppercase sm:text-5xl dark:border-secondary dark:text-secondary"
			>
				Featured Projects
			</h2>
			<p class="mt-4 max-w-2xl text-slate-600 dark:text-slate-400">
				Berikut adalah beberapa proyek pengembangan web dan sistem yang telah saya kerjakan
				baru-baru ini.
			</p>
		</div>

		<div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
			{#each projects as project}
				<div
					class="group relative flex flex-col border border-slate-200 bg-white p-6 transition-all hover:-translate-y-2 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900"
				>
					<img
						alt="Project foto pict"
						src={project.pict}
						class="mb-2 aspect-3/2 w-full object-cover"
					/>
					<h3 class="mb-2 font-primary text-xl font-bold text-primary dark:text-secondary">
						{project.title}
					</h3>

					<p class="mb-6 grow text-sm text-slate-600 dark:text-slate-400">
						{project.description}
					</p>

					<div class="mb-6 flex flex-wrap gap-2">
						{#each project.tech as item}
							<span
								class="rounded-md bg-slate-100 px-2 py-1 text-xs font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-300"
							>
								{item}
							</span>
						{/each}
					</div>

					<div class="flex items-center gap-4">
						<div class="flex items-center gap-2">
							{#if project.status === 'online'}
								<span class="flex h-2 w-2 rounded-full bg-green-500"></span>
								<span class="text-[10px] font-bold text-green-500 uppercase">Live</span>
							{:else if project.status === 'local'}
								<span class="flex h-2 w-2 rounded-full bg-orange-500"></span>
								<span class="text-[10px] font-bold text-orange-500 uppercase">local</span>
							{/if}
						</div>
						<div class="flex items-center gap-2">
							{#if project.github}
								<a
									href={project.github}
									target="_blank"
									rel="noopener noreferrer"
									class="transition-transform hover:scale-110"
									title="View Source Code"
								>
									<img
										src="https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/github.svg"
										alt="GitHub"
										class="h-6 w-6 object-contain dark:invert"
									/>
								</a>
							{/if}
							{#if project.live}
								<a
									href={project.live}
									target="_blank"
									class="hover:bg-opacity-80 rounded-lg bg-primary px-4 py-2 text-xs font-bold text-white transition-colors dark:bg-secondary dark:text-primary"
								>
									Live Demo
								</a>
							{/if}
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>
