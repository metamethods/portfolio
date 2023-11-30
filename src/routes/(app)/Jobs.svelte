<script lang="ts">
  import Card from "$components/Card.svelte";

  import jobsJSON from "$lib/jobs.json";

  interface Job {
    banner: string,
    name: string,
    title: string,
    description: string,
    link: string,
    startingDate: string,
    endingDate?: string,
  }

  const jobs: Job[] = jobsJSON;
</script>

<div class="wrapper">
  {#each jobs as job}
    <Card>
      <img class="banner" src={job.banner} alt={job.name} />

      <div class="card-wrapper">
        <div>
          <h1 class="name">{job.name}</h1>
          <h2 class="title">{job.title}</h2>
          <p class="description">{job.description}</p>
        </div>

        <div class="flex justify-between">
          <p class="text-sm text-mute">{job.startingDate} - {job.endingDate ?? "Present"}</p>
          <a href={job.link} class="text-sm text-mute-secondary">View</a>
        </div>
      </div>
    </Card>
  {/each}
</div>

<style lang="scss">
  .wrapper {
    @apply grid grid-cols-1 md:grid-cols-2 gap-4;
    @apply w-full max-w-7xl;
    @apply mx-auto px-8;
  }

  .card-wrapper {
    @apply flex flex-col gap-4;
    @apply px-3 py-4;

    h1.name { @apply text-4xl font-bold; }
    h2.title { @apply text-lg; }
    p.description { @apply text-mute; }
  }

  .banner { @apply w-full h-48 object-cover; }
</style>