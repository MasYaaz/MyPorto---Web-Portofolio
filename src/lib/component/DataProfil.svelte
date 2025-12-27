<script>
  import { FontAwesomeIcon } from "@fortawesome/svelte-fontawesome";

  // Menerima prop 'item' yang berisi icon, value, dan opsional valueClass
  export let item
</script>

<div class="flex-col flex justify-center my-3">
  <FontAwesomeIcon icon={item.icon} class="text-secondary text-4xl xl:text-6xl 2xl:text-8xl mb-2" />
  <p class="font-primary font-bold text-center text-sm md:text-sm lg:text-md xl:text-xl break-words">
    {item.tulisan}
  </p>
</div>
