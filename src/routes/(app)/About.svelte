<script>
  import { fly } from "svelte/transition";

  import OnView from "$components/OnView.svelte";
  import Hidden from "$components/Hidden.svelte";
</script>

<div>
  <p>Welcome to my portfolio website! Im currently {new Date().getFullYear() - new Date("Thu Oct 16 2008 07:00:00 GMT+0000").getFullYear()} years closer to death <Hidden>My age if you didn't catch on</Hidden></p>
  <p>Im a full-stack and a Roblox developer who loves to create functional & beautiful websites and games.</p>
</div>

<style lang="scss">
  div {
    @apply text-center;
    @apply w-full;
  }
</style>