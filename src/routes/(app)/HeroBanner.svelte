<script>
  import { scale, fly } from "svelte/transition";

  import Animate from "$components/Animate.svelte";
  import HeroLeft from "./HeroLeft.svelte";
</script>

<div class="hero-banner">
  <div class="hero-main">
    <section class="main">
      <HeroLeft />
    </section>
  </div>
</div>

<style lang="scss">
  .hero-banner {
    @apply relative;
    @apply w-full md:h-[50vh] h-screen;
  }

  .hero-main {
    @apply absolute inset-0;
    @apply w-full max-w-7xl;
    @apply mx-auto px-8 z-10;

    section.main {
      @apply flex justify-between items-center;
      @apply h-full;
    }
  }
</style>