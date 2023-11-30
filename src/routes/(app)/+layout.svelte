<script>
  import "$styles/global.scss";

  import Footer from "$components/Footer.svelte";
  import Navigation from "$components/Navigation.svelte";
</script>

<div class="wrapper">
  <Navigation />
  <slot />
  <Footer />
</div>

<style lang="scss">
  .wrapper {
    @apply relative;
    @apply w-full h-full;
    @apply mt-16;
  }
</style>