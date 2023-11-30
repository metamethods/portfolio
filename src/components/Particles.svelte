<script lang="ts">
  import { onMount } from "svelte";

  // Define the particle type
  interface Particle {
    x: number;
    y: number;
    t: number;
    ls: number;
    d: number;
  }

  // Type for the direction function
  type DirectionFunction = (x: number, y: number, d: number, t: number, i: number) => { x: number; y: number };

  // Set default direction function
  export let direction: DirectionFunction = (x, y, d, t) => ({ x: d/4, y: y / 100 + toDecimal(t) });

  export let lifespan: number = 5000;
  export let count: number = 100;
  export let color: { r: number; g: number; b: number } = { r: 255, g: 255, b: 255 };
  export let randomX: boolean = true;
  export let randomY: boolean = false;
  export let size: number = 0.85;

  let particles: Particle[] = [];
  let canvas: HTMLCanvasElement;
  let context: CanvasRenderingContext2D;
  let lastUpdate: number = 0;

  function toDecimal(number: number) {
    return Number(`.${number}`);
  }

  function randomPosition() {
    return {
      x: Math.random() * canvas.width * (randomX ? 1 : 0),
      y: Math.random() * canvas.height * (randomY ? 1 : 0),
    };
  }

  function createParticle(): Particle {
    const position = randomPosition();

    return {
      ...position,
      t: 0,
      ls: Math.random() * lifespan,
      d: Math.random() * 2 - 1,
    };
  }

  function updateCanvas() {
    context.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < particles.length; i++) {
      const particle = particles[i];

      if (particle.ls > lifespan) {
        particles[i] = createParticle();
      }

      const { x, y } = direction(particle.x, particle.y, particle.d, particle.t, i);

      particle.x += x;
      particle.y += y;
      particle.t = Date.now() - lastUpdate;
      particle.ls += particle.t;

      context.fillStyle = `rgba(${color.r}, ${color.g}, ${color.b}, ${1 - particle.ls / lifespan})`;
      context.beginPath();
      context.arc(particle.x, particle.y, size, 0, 2 * Math.PI);
      context.fill();
    }

    lastUpdate = Date.now();

    requestAnimationFrame(updateCanvas);
  }

  onMount(() => {
    canvas = document.getElementById('myCanvas') as HTMLCanvasElement;
    context = canvas.getContext("2d") as CanvasRenderingContext2D;
    context.lineWidth = 2;

    context.canvas.width = canvas.clientWidth;
    context.canvas.height = canvas.clientHeight;

    lastUpdate = Date.now();

    for (let i = 0; i < count; i++)
      particles.push(createParticle());

    updateCanvas();
  });
</script>

<canvas bind:this={canvas} id="myCanvas" class="w-full h-full" />