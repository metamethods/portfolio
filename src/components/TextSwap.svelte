<script lang="ts">
  import { spring } from "svelte/motion";

  export let text: Array<string> = ["Add", "Your", "Text", "Here"];
  export let interval: number = 5000;
  export let startingIndex: number = 0;
  export let randomIndex: boolean = false;

  let lastIndex: number = -1;
  let currentIndex: number = randomIndex ? Math.floor(Math.random() * text.length) : startingIndex;

  let displaySpring = spring(0);

  let oldElement: HTMLElement;

  function updateText() {
    lastIndex = currentIndex;
    while (currentIndex === lastIndex)
      currentIndex = Math.floor(Math.random() * text.length);
    displaySpring = spring(0);
    displaySpring.set(-1);
  }

  setInterval(updateText, interval);
  // updateText();
</script>

<div class="text-swap-wrapper">
  <div 
    class="viewport"
    style="transform: translateY({$displaySpring * 100}%)"
  >
    <p 
      class="old" 
      bind:this={oldElement}
    >{text[lastIndex]}</p>
    <p style={oldElement ? `transform: translateY(${oldElement.clientHeight}px)` : "transform: translateY(0)"}>{text[currentIndex]}</p>
  </div>
</div>

<style lang="scss">
  .text-swap-wrapper {
    @apply h-full;
    @apply overflow-hidden;
  }

  .viewport {
    @apply relative;

    p.old {
      @apply absolute inset-0;
      @apply w-screen;
    }
  }
</style>