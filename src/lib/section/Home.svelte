<script>
	import Image from './Home/Image.svelte';
	import RightSideText from './Home/RightSideText.svelte';
	import LeftSideText from './Home/LeftSideText.svelte';
</script>

<!-- Section 1 -->
<section
	class="relative flex h-full min-h-screen w-full justify-center overflow-hidden bg-[url('/src/images/back.webp')] bg-cover bg-center px-6 lg:px-16"
	id="section_1"
>
	<div
		class="absolute inset-0 bg-linear-to-b from-secondary/60 to-secondary dark:from-primary/90 dark:to-primary"
	></div>

	<div
		class="z-10 container mx-auto flex w-full flex-col items-stretch justify-between gap-5 pt-20 lg:min-h-screen lg:flex-row lg:pt-26"
	>
		<LeftSideText />
		<Image />
		<RightSideText />
	</div>
</section>
