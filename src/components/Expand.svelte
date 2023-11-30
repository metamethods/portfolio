<script lang="ts">
	import { cubicInOut } from "svelte/easing";
  import { slide } from "svelte/transition";

  export let title: string = "Some title";

  let expand: boolean = false;

  export function toggleExpand() { expand = !expand; }
  export function setExpand(value: boolean) { expand = value; }
</script>

<button
  class="expand-button"
  on:click={toggleExpand}
>
  <div class="text-wrapper">
    <div class="text">
      <span class="material-symbols-outlined {expand ? "rotate-[135deg]" : "rotate-0"}">add</span>
      <span>{title}</span>
    </div>
    <div class="line" />
  </div>

  {#if expand}
    <div 
      class="content"
      transition:slide={{ axis: "y", easing: cubicInOut }}
    >
      <slot />
    </div>
  {/if}
</button>

<style lang="scss">
  button {
    @apply w-full;
  }

  .text-wrapper {
    @apply grid grid-cols-[auto,1fr] items-center;
    @apply w-full;
    @apply gap-4;
  }

  .line {
    @apply bg-border;
    @apply w-full h-[1px];
  }

  .text { 
    @apply flex gap-4;
    & > * { @apply flex items-center; }
    .material-symbols-outlined { 
      @apply brightness-50; 
      @apply transition duration-500 ease-in-out;
    }
  }

  .content {
    @apply text-mute text-left;
    @apply pl-10;
  }
</style>