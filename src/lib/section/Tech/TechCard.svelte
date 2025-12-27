<script lang="ts">
  let { item } = $props();
</script>

<div
  class="flex items-center gap-4 p-4 border border-primary/5 hover:border-primary/20 transition-all bg-white/5"
>
  <img
    src={item.logo}
    alt={item.name}
    class="w-8 h-8 {item.name === 'Ollama' ? 'rounded-full' : ''}"
  />
  <div class="flex flex-col">
    <span class="text-xs font-bold uppercase">{item.name}</span>
    {#if item.desc}
      <span class="text-[10px] opacity-60">{item.desc}</span>
    {/if}
  </div>
</div>
