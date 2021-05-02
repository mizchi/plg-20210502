<script lang="ts">
  import { onMount } from "svelte";
  import Tailwind from "./Tailwind.svelte";
  onMount(() => {
    console.log("mounted");
  });
  console.log("hello!");
</script>

<Tailwind />

<h1>Hello</h1>
