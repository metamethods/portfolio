<script lang="ts">
  import { onMount } from 'svelte';

  let hovering = false;
  let element: HTMLElement;
  let mouse: MouseEvent;

  let xDegrees = 0;
  let yDegrees = 0;

  let xOffset = 0;
  let yOffset = 0;

  export let maxDegrees = 40;

  function updateDegrees() {
    if (!hovering) {
      xDegrees = 0;
      yDegrees = 0;
    } else {
      const { top, left, width, height } = element.getBoundingClientRect();

      xOffset = mouse.clientX - left - width / 2;
      yOffset = mouse.clientY - top - height / 2;

      xDegrees = xOffset / width * maxDegrees;
      yDegrees = yOffset / height * maxDegrees;
    }

    requestAnimationFrame(updateDegrees);
  }

  onMount(()=>updateDegrees());
</script>

<div 
  class="card-wrapper"
  style={`transform: rotateX(${yDegrees}deg) rotateY(${xDegrees}deg); scale: ${hovering ? 1.05 : 1}`}
  role="group"
  bind:this={element}
  on:mouseenter={()=>hovering=true}
  on:mouseleave={()=>hovering=false}
>
  <div 
    class="card-inner"
    style={`transform: rotateX(${-yDegrees/Math.PI}deg) rotateY(${xDegrees/Math.PI}deg)`}
  >
    <slot />
  </div>
</div>

<svelte:body on:mousemove={e=>mouse=e} />

<style lang="scss">
  .card-wrapper {
    @apply border-border border;
    @apply rounded-md;
    @apply overflow-hidden;
    @apply transition-all duration-500 ease-out;

    transform-style: preserve-3d;
  }

  .card-inner {
    @apply w-full h-full;
    @apply transform;
    @apply transition-all duration-500 ease-out;

    transform-style: preserve-3d;
  }
</style>