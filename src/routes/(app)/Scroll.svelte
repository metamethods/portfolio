<script>
  import { fly } from "svelte/transition";

  import Animate from "$components/Animate.svelte";
</script>

<Animate>
  <div class="scroll">
    <p transition:fly={{ y: -10, delay: 1250 }}>Scroll down to learn more</p>
    <div class="animate-bounce">
      <span 
        class="material-symbols-outlined"
        transition:fly={{ y: -10, delay: 1600 }} 
      >expand_more</span>
    </div>
  </div>
</Animate>

<style lang="scss">
  .scroll {
    @apply flex flex-col items-center justify-center;
    @apply sm:inline-flex hidden;
    @apply gap-2;

    .material-symbols-outlined {
      @apply brightness-50;
    }
  }
</style>