<script lang="ts">
  import { onMount } from "svelte";

  import OnLoad from "./OnLoad.svelte";
  import TextSwap from "./TextSwap.svelte";

  import messages from "$lib/messages.json";
  import routesJSON from "$lib/routes.json";

  const routes: Record<string,string> = routesJSON;
</script>

<nav>
  <div class="wrapper">
    <section class="left"><OnLoad>
      <div class="sub-text">
        <TextSwap text={messages} interval={60000} randomIndex />
      </div>
    </OnLoad></section>
    <section class="middle"><img src="/logo.svg" alt="logo" /></section>
    <section class="right links">
      <OnLoad>
        {#each Object.keys(routes) as route}
          <a href={routes[route]}>{route}</a>
        {/each}
      </OnLoad>
    </section>
  </div>
</nav>

<style lang="scss">
  nav {
    @apply bg-background border-border border-b;
    @apply fixed inset-0;
    @apply w-full h-16;
    @apply z-50;
  }

  .wrapper {
    @apply flex items-center;
    @apply w-full max-w-7xl h-full;
    @apply mx-auto px-8;

    display: grid;
    grid-template-columns: 1fr 1fr 1fr;

    section {
      @apply flex items-center;
      @apply h-full;

      &.middle { @apply justify-center; }
      &.right { @apply justify-end; }
    }
  }

  .links {
    @apply flex gap-4;
  
    & > a { 
      @apply text-mute;
      @apply transition duration-300; 
    }
    & > a:hover { @apply text-primary; }
  }

  .sub-text { @apply text-mute; }
</style>