<script>
	import { fade, fly } from 'svelte/transition';

	import Animate from '$components/Animate.svelte';
	import HeroBanner from './HeroBanner.svelte';
	import Particles from '$components/Particles.svelte';
	import Scroll from './Scroll.svelte';
  import About from './About.svelte';
  import Qna from './QNA.svelte';
  import Projects from './Projects.svelte';
  import TechStack from './TechStack.svelte';
  import Jobs from './Jobs.svelte';
  import Card from '$components/Card.svelte';
</script>

<Animate>
	<div class="sparkles" transition:fade={{ duration: 5000, delay: 3000 }}>
		<Particles size={1} count={400} lifespan={3000} direction={(x, y, d, t, i) => ({ x: (-2 / (i/100)) * d/2, y: (5 / (i/100))/2 })} />
	</div>
</Animate>

<div class="hero">
	<HeroBanner />
	<Scroll />
</div>

<main>
  <section>
    <h1>Hey there 👋</h1>
    <About />
  </section>

  <section>
    <h1>Heres who I've worked with</h1>
    <Jobs />
  </section>

  <TechStack />
  <Projects />
  <Qna />
</main>

<style lang="scss">
  main {
    @apply flex flex-col items-start justify-center gap-16;
    @apply w-full max-w-7xl;
    @apply p-8 mx-auto;

    section { 
      @apply flex flex-col gap-3;
      @apply w-full; 
    }
  }

  h1 {
    @apply text-3xl text-center font-bold;
    @apply w-full;
  }

	.sparkles {
		@apply absolute inset-0;
		@apply w-full h-full;
    @apply -z-50;
	}

	.hero {
		@apply flex flex-col gap-8;
	}
</style>
