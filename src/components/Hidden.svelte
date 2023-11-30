<div class="wrapper">
  <div class="box" />
  <slot />
</div>

<style lang="scss">
  .wrapper {
    @apply text-mute;
    @apply relative;
    @apply w-fit h-fit;
    @apply px-1;
    @apply inline-block;
  }

  .box {
    @apply bg-background-secondary border-background-secondary border;
    @apply absolute inset-0;
    @apply w-full h-full;
    @apply rounded-sm;
    @apply transition duration-[5s];

    &:hover {
      @apply bg-transparent;
      @apply duration-200;
    }
  }
</style>