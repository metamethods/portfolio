<script lang="ts">
  import SvelteMarkdown from "svelte-markdown";

  import Expand from "$components/Expand.svelte";

  import qnaJSON from "$lib/qna.json";

  const qna: Record<string, string> = qnaJSON;
</script>

{#each Object.keys(qna) as question}
  <Expand title={question}>
    <SvelteMarkdown source={qna[question]} />
  </Expand>
{/each}
