<script lang="ts">
	import TechCard from './Tech/TechCard.svelte';
	import TechIcon from './Tech/TechIcon.svelte';

	// Array data untuk Core Technologies
	const techStack = [
		{
			name: 'SvelteKit',
			logo: 'https://raw.githubusercontent.com/sveltejs/branding/master/svelte-logo.svg',
			category: 'web',
			color: 'rgba(255,62,0,0.5)'
		},
		{
			name: 'Rust',
			logo: 'https://www.rust-lang.org/static/images/rust-logo-blk.svg',
			category: 'web',
			color: 'rgba(0,0,0,0.5)',
			invertDark: true
		},
		{
			name: 'TypeScript',
			logo: 'https://www.vectorlogo.zone/logos/typescriptlang/typescriptlang-icon.svg',
			category: 'web',
			color: 'rgba(49,120,198,0.5)'
		},
		{
			name: 'Bun',
			logo: 'https://www.vectorlogo.zone/logos/bunsh/bunsh-icon.svg',
			category: 'web',
			color: 'rgba(251,203,142,0.5)'
		},
		{
			name: 'Supabase',
			logo: 'https://raw.githubusercontent.com/supabase/supabase/master/packages/common/assets/images/supabase-logo-icon.svg',
			category: 'web',
			color: 'rgba(62,175,124,0.5)'
		},
		{
			name: 'Tailwind',
			logo: 'https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg',
			category: 'web',
			color: 'rgba(6,182,212,0.5)'
		},

		{
			name: 'Ollama',
			logo: 'https://ollama.com/public/ollama.png',
			category: 'ai',
			desc: 'Local AI & LLM Integration'
		},
		{
			name: 'WA Bot API',
			logo: 'https://www.vectorlogo.zone/logos/whatsapp/whatsapp-icon.svg',
			category: 'ai',
			desc: 'Automated AI Chatbots'
		},

		{
			name: 'Git',
			logo: 'https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg',
			category: 'tool',
			desc: 'Version Control'
		},
		{
			name: 'VS Code',
			logo: 'https://www.vectorlogo.zone/logos/visualstudio_code/visualstudio_code-icon.svg',
			category: 'tool'
		}
	];

	const webDevs = $derived(techStack.filter((i) => i.category === 'web'));
	const aiTechs = $derived(techStack.filter((i) => i.category === 'ai'));
	const tools = $derived(techStack.filter((i) => i.category === 'tool'));
</script>

<section
	class="flex min-h-screen w-full flex-col items-center justify-center gap-8 bg-secondary py-16 md:pt-30 dark:bg-primary"
	id="section_3"
>
	<div class="container mx-auto w-full px-6 text-primary lg:px-16 dark:text-secondary">
		<div class="bg-brown space-y-10 rounded-2xl border border-primary/5 p-8 shadow-xl">
			<div class="text-center">
				<h2
					class="inline-block border-b-4 border-primary pb-1 font-primary text-xl font-bold uppercase md:text-2xl lg:text-4xl dark:border-secondary"
				>
					Tech Stack
				</h2>
			</div>

			<div class="space-y-4">
				<h3
					class="text-center font-display text-xs font-bold tracking-[0.2em] uppercase opacity-60 md:text-left"
				>
					Web Development & Runtime
				</h3>
				<div class="grid grid-cols-2 gap-4 sm:grid-cols-3">
					{#each webDevs as item}
						<TechIcon {item} />
					{/each}
				</div>
			</div>

			<div class="grid grid-cols-1 gap-8 md:grid-cols-2">
				<div class="space-y-4">
					<h3
						class="text-center font-display text-xs font-bold tracking-[0.2em] uppercase opacity-60 md:text-left"
					>
						AI Integration
					</h3>
					<div class="flex flex-col gap-3">
						{#each aiTechs as item}
							<TechCard {item} />
						{/each}
					</div>
				</div>

				<div class="space-y-4">
					<h3
						class="text-center font-display text-xs font-bold tracking-[0.2em] uppercase opacity-60 md:text-left"
					>
						Tools & Workflow
					</h3>
					<div class="flex flex-col gap-3">
						{#each tools as item}
							<TechCard {item} />
						{/each}
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
