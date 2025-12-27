<script>
	import { ui } from '$lib/stores/UIStates.svelte';
	import { ArrowDown } from 'lucide-svelte';
</script>

<div
	class="order-2 flex w-full flex-col items-center gap-6 text-center sm:mb-0 lg:order-3 lg:h-full lg:w-[18%] lg:items-end lg:justify-between lg:py-5 lg:pb-50 lg:text-right"
>
	<div class="flex flex-col items-start lg:items-end lg:space-y-4">
		<p
			class="hidden font-primary text-3xl font-bold text-primary uppercase lg:flex lg:text-4xl dark:text-secondary"
		>
			Interested..?
		</p>
		<p
			class="font-secondary mt-2 block w-60 text-sm font-medium text-primary normal-case opacity-90 md:text-lg lg:text-xl dark:text-secondary"
		>
			Find out more about me with touching button below.
		</p>
		<ArrowDown class="hidden text-primary lg:flex lg:h-20 lg:w-20 dark:text-secondary" />
	</div>

	<button
		onclick={() => ui.scrollToSection('section_2')}
		aria-label="Next Button"
		class="font-secondary bg-primary px-6 py-3 text-lg font-black text-secondary uppercase shadow-xl transition-all duration-300 hover:scale-110 hover:cursor-pointer active:scale-95 lg:text-2xl dark:bg-secondary dark:text-primary"
	>
		Let's Go!
	</button>
</div>
