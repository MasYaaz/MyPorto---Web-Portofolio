<script lang="ts">
	let { item } = $props();
</script>

<div
	class="group flex flex-col items-center bg-white/5 p-4 transition-all duration-300 hover:scale-105 hover:bg-primary/10"
>
	<img
		src={item.logo}
		alt={item.name}
		class="mb-2 h-20 w-20 group-hover:drop-shadow-[0_0_8px_{item.color}] {item.invertDark
			? 'dark:invert'
			: ''}"
	/>
	<span class="text-center text-[10px] font-bold uppercase">{item.name}</span>
</div>
