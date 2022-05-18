<script context="module" lang="ts">
  import {getOrganizations} from "$lib/organizations/organizations.store";
  export const prerender = true;

  console.log('🔥 index module onyle once, but it does it tweace actually');
  // getOrganizations();

  /**
   * IT RUNS SERVER SIDE
   * and everytime time the page enters
   * @param context
   */
  export async function load(context) {
    // THIS RUNS EVERYTIME THE ROUTE CHANGES AND ENTERS
    await getOrganizations();
  console.log('🥦 index load function');
    return {}
  }

</script>

<script lang="ts">
  import List from '$lib/organizations/list.svelte';

  // export let organizations
</script>

<svelte:head>
  <title>Home</title>
</svelte:head>

<div class="flex p-5 pt-0 bg-base-200 h-full">
  <div class="max-w-screen-xl mx-auto">
    <List/>
  </div>
</div>
