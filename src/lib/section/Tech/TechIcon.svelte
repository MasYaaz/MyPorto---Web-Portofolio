<script lang="ts">
  let { item } = $props();
</script>

<div
  class="flex flex-col items-center p-4 bg-white/5 hover:bg-primary/10 hover:scale-105 transition-all duration-300 group"
>
  <img
    src={item.logo}
    alt={item.name}
    class="w-10 h-10 mb-2 group-hover:drop-shadow-[0_0_8px_{item.color}] {item.invertDark
      ? 'dark:invert'
      : ''}"
  />
  <span class="text-[10px] font-bold uppercase text-center">{item.name}</span>
</div>
