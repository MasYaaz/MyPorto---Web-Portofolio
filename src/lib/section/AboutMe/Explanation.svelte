<div class="flex w-full flex-col gap-6 lg:flex-row">
	<div class="flex flex-col items-center gap-6">
		<div class="relative aspect-square w-64 overflow-hidden sm:w-80 lg:w-100">
			<img
				src="./images/profil-light.webp"
				alt="Foto Personal"
				class="absolute inset-0 h-full w-full object-contain transition-opacity duration-700 ease-out dark:opacity-0"
			/>
			<img
				src="./images/profil-dark.webp"
				alt="Foto Personal"
				class="absolute inset-0 h-full w-full object-contain opacity-0 transition-opacity duration-700 ease-out dark:opacity-100"
			/>
		</div>

		<div class="text-center">
			<h2
				class="inline-block border-b-4 border-primary pb-1 font-primary text-3xl font-semibold text-primary uppercase sm:text-4xl lg:text-5xl dark:border-secondary dark:text-secondary"
			>
				About Me
			</h2>
		</div>
	</div>
	<div
		class="flex transform flex-col items-center p-6 text-primary shadow-sm transition-all duration-700 ease-out dark:text-secondary"
	>
		<div class="relative px-8 py-4">
			<span
				class="absolute top-0 left-0 -translate-x-2 -translate-y-4 font-serif text-7xl text-primary opacity-20 select-none md:text-9xl dark:text-secondary"
			>
				“
			</span>

			<p
				class="relative z-10 text-center font-display text-sm leading-relaxed md:text-base lg:text-lg xl:text-xl"
			>
				As an enthusiastic
				<span class="font-bold text-primary dark:text-secondary">Full-Stack Developer</span>, I am
				deeply passionate about building fast and reliable web applications using
				<span class="italic">Svelte</span> and
				<span class="italic">Rust</span>. While I consider myself a continuous learner in this
				evolving field, I have already gained hands-on experience integrating
				<span class="font-semibold text-primary dark:text-secondary">Supabase</span>
				for back-end logic and exploring local AI ecosystems with
				<span class="italic">Ollama</span>.
				<br /><br />
				Currently, I am focusing on developing
				<span class="font-semibold text-primary dark:text-secondary">WhatsApp chatbots</span>
				and complex web interfaces that bridge the gap between functionality and design. My background
				in
				<span class="italic">graphic design</span> and photography gives me a unique perspective in crafting
				clean, user-centric digital experiences that are as visually pleasing as they are technically
				sound.
			</p>

			<span
				class="absolute right-0 bottom-0 translate-x-2 translate-y-6 font-serif text-7xl text-primary opacity-20 select-none sm:-bottom-14 md:text-9xl dark:text-secondary"
			>
				”
			</span>
		</div>
	</div>
</div>
