<script context="module">

  console.log('🎹 from module in teh component?' );

</script>

<script>
  import { organizations, removeOrganization, getOrganizations } from '$lib/organizations/organizations.store'
  import FilterBar from '$lib/organizations/FilterBar.svelte'
  import Placeholder from '$assets/images/image-placeholder.svg'

  console.log('🎹 from the script component IT RUNS EVERYTIME' );

  // getOrganizations()
  // Props
  // export let organizations
</script>


<FilterBar/>
<div class="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 py-3">
  {#if $organizations}
    {#each $organizations as organization}
      <div class="rounded-lg overflow-hidden shadow-lg bg-white">
      <a
        href={`organization/${organization.name}`}>
        <!--          <img class="w-full" src="https://picsum.photos/200" alt="">-->
        <Placeholder class="w-full h-auto object-cover"/>
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">
            {organization.name}
          </div>
          <p class=" text-base">
            {organization.description}
          </p>
        </div>
        <div class="px-6 py-4">
          <span class="inline-block bg-gray-200 rounded-full px-3 py-0 text-sm font-semibold text-gray-700 mr-2">#photography</span>
          <span class="inline-block bg-gray-200 rounded-full px-3 py-0 text-sm font-semibold text-gray-700 mr-2">#travel</span>
          <span class="inline-block bg-gray-200 rounded-full px-3 py-0 text-sm font-semibold text-gray-700">#winter</span>
        </div>
      </a>
        <span class="btn btn-xs" on:click={()=> removeOrganization(organization.id)}>delete</span>
      </div>
    {/each}
  {/if}

</div>
