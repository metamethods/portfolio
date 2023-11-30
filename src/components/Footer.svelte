<footer>
  <div class="wrapper">
    <div class="main">
      <section>
        <p>© {new Date().getFullYear()} metamethods</p>
      </section>

      <section class="info">
        <p>
          Hosted on 
          <a href="https://vercel.com">
            <img src="/vercel.svg" alt="Vercel" />
          </a>
          , made with 
          <a href="https://svelte.dev">
            <img src="svelte.svg" alt="Svelte" /> <span class="svelte">Svelte</span>
          </a>
        </p>
      </section>
    </div>
  </div>
</footer>

<style lang="scss">
  footer {
    @apply border-border border-t;
  }

  .wrapper {
    @apply flex flex-col gap-4;
    @apply w-full max-w-7xl mx-auto;
    @apply p-8;

    .main {
      @apply flex sm:flex-row flex-col justify-between;
    }
  }

  .links {
    @apply flex flex-col gap-4;

    h1 { @apply font-bold; }
  }

  .info > p > a > img { @apply inline-block h-4; }
  .svelte { @apply text-svelte; }
</style>