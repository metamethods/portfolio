<script>
  import { scale, fly } from "svelte/transition";

  import Animate from "$components/Animate.svelte";
  import TextSwap from "$components/TextSwap.svelte";

  import greetings from "$lib/greetings.json";
  import jobs from "$lib/developer_types.json";
</script>

<div class="wrapper">
  <Animate>
    <div 
      class="header"
      transition:scale={{ start: .95 }}
    >
      <div class="text">
        <TextSwap text={greetings} interval={5000} randomIndex />
        , I'm
      </div>
      <h1 transition:fly={{ y: 10, delay: 500 }}>metamethods</h1>
    </div>

    <div
      class="sub-text"
      transition:fly={{ y: 10, delay: 1000 }}
    >
      <div class="lighter"><TextSwap text={jobs} interval={3000} /></div>
      developer from the United States.
    </div>
  </Animate>
</div>

<style lang="scss">
  .wrapper {
    @apply flex flex-col md:items-start items-center justify-center;
    @apply h-full md:w-auto w-full;
  }

  .header {
    @apply text-5xl font-semibold;
    @apply md:text-left text-center;
    h1 { @apply font-extrabold tracking-[.05rem]; }
    .text { 
      @apply text-secondary;
      @apply flex;
    }
  }

  .sub-text {
    @apply text-mute;
    @apply flex gap-1;
    @apply md:text-left text-center;
    @apply mt-4;

    .lighter { @apply text-mute-secondary font-semibold; }
  }
</style>