<script lang="ts">
  import IntersectionObserver from "svelte-intersection-observer";

  let viewing = false;
  let element: HTMLElement;
</script>

<IntersectionObserver 
  {element}
  threshold={.5}
  on:intersect={(e) => viewing = e.detail.intersectionRatio > 0}
>
  <div bind:this={element}>
    {#if viewing}
      <slot />
    {/if}
  </div>
</IntersectionObserver>