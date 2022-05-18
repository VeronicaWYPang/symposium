<script lang="ts">
  import Logo from '$lib/Logo.svelte'
  import SocialIcons from "$lib/SocialIcons.svelte"

  import "../app.css"
  import MenuItems from '$lib/menu-items.json'
  import AppFooter from "$lib/AppFooter.svelte";
</script>

<main class="flex flex-col w-screen h-screen bg-base-200">
  <div class="drawer">
    <label for="my-drawer-3"/>
    <input id="my-drawer-3" type="checkbox" class="drawer-toggle"/>
    <div class="drawer-content flex flex-col ">
      <!-- Navbar -->
      <div class="bg-primary">
        <div class="px-3 py-6 flex justify-between items-center  h-[80px] container mx-auto ">

          <div class=" sm:hidden">
            <!-- Open Menu icon-->
            <label for="my-drawer-3" class="btn btn-square btn-ghost">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current text-white">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </label>
            <Logo/>
          </div>

          <div class="hidden w-full sm:flex justify-between items-center">
            <Logo/>
            <ul class="menu menu-horizontal">
              <!-- Navbar menu content here -->
              {#each MenuItems as menu}
                <li>
                  <a class="text-lg font-bold text-white hover:text-white" href={menu.url}>
                    {menu.name}
                  </a>
                </li>
              {/each}
            </ul>
            <SocialIcons/>
          </div>
        </div>
      </div>
      <!-- Page content here -->
      <div class="container h-full mx-auto flex-1  px-3 pt-3">
        <slot class=""/>
      </div>
      <AppFooter/>

    </div>
    <div class="drawer-side ">
      <label for="my-drawer-3" class="drawer-overlay"></label>
      <!-- Sidebar content here -->
      <ul class="menu p-4 overflow-y-auto w-80  bg-gray-800">
        <div class="mb-10">
          <Logo/>
        </div>
        <!-- Sidebar content here -->
        <ul>

          {#each MenuItems as menu}
            <li>

              <a class="text-lg text-white hover:text-white"
                 href={menu.url}
                 on:click={() => {document.getElementById('my-drawer-3').click()}}
              >
                {menu.name}
              </a>
            </li>
          {/each}
        </ul>
        <div class="mt-6">
          <SocialIcons/>
        </div>

      </ul>

    </div>
  </div>

</main>

