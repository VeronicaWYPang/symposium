<script>
  import { goto } from '$app/navigation';
  import supabase from '$lib/db'
  import { user } from '$lib/user/userStore'

  let loading = true
  let username = null
  let website = null
  let avatar_url = null

  async function getProfile() {
    try {
      loading = true
      const user = supabase.auth.user()

      let { data, error, status } = await supabase
        .from('profiles')
        .select(`username, website, avatar_url`)
        .eq('id', user.id)
        .single()


      if (error && status !== 406) throw error
      if (data) {
        username = data.username
        website = data.website
        // avatar_url = data.user_metadata.avatar_url
      }
    } catch (error) {
      console.error(error.message)
    } finally {
      loading = false
    }
  }

  async function updateProfile() {
    try {
      loading = true
      const user = supabase.auth.user()

      const updates = {
        id: user.id,
        username,
        website,
        avatar_url,
        updated_at: new Date(),
      }

      let { error } = await supabase.from('profiles').upsert(updates, {
        returning: 'minimal', // Don't return the value after inserting
      })

      if (error) throw error
    } catch (error) {
      console.error(error.message)
    } finally {
      loading = false
    }
  }

  async function signOut() {
    try {
      loading = true
      let { error } = await supabase.auth.signOut()
      if (error) throw error
    } catch (error) {
      console.error(error.message)
    } finally {
      loading = false
      goto('/')
      user.set(null)
    }

  }
</script>

{#if $user}


  <div>
    <div class="w-11/12">
      <div class="flex justify-center pb-10">
        <img
            src={$user.user_metadata.avatar_url}
            class="h-40 w-40 rounded-full object-cover"
            alt="username"
        >
        <div class="ml-10">
          <div class="flex items-center">
            <h2 class="block leading-relaxed font-light text-gray-700 text-3xl">
              { $user.user_metadata.full_name }
            </h2>
          </div>
          <ul class="flex justify-content-around items-center">
            <li>
              <span class="block text-base flex"><span class="font-bold mr-2">23 </span> Posts</span>
            </li>
            <li>
              <span class="cursor-pointer block text-base flex ml-5"><span class="font-bold mr-2">102k </span> Followers</span>
            </li>
            <li>
              <span class="cursor-pointer block text-base flex ml-5"><span class="font-bold mr-2">654 </span> followed</span>
            </li>
          </ul>
          <br>
          <div>
            { $user.email }
          </div>
          <button
              class=" cursor-pointer mt-5 border-2 border-blue-500 rounded-lg font-bold text-blue-500 px-2 py-2 transition duration-200 ease-in-out hover:bg-blue-500 hover:text-white mr-6"
              depressed
              on:click={signOut} disabled={loading}
          >
            LOG OUT
          </button>
        </div>
      </div>
      <div>
      </div>
      <div class="border-b border-gray-300"/>
    </div>
    <form use:getProfile class="text-center" on:submit|preventDefault={updateProfile}>
      <div>
        <label for="email">Email</label>
        <input id="email" type="text" value={$user.email} disabled/>
      </div>
      <div>
        <label for="username">Name</label>
        <input
            id="username"
            type="text"
            bind:value={username}
        />
      </div>
      <div>
        <label for="website">Website</label>
        <input
            id="website"
            type="website"
            bind:value={website}
        />
      </div>

      <div>
        <input type="submit" class="btn btn-primary btn-sm" value={loading ? 'Loading ...' : 'Update'} disabled={loading}/>
      </div>

      <div>
        <button class="btn mt-6" on:click={signOut} disabled={loading}>
          Sign Out
        </button>
      </div>
    </form>

    <div>
      {JSON.stringify($user)}
    </div>
  </div>
{:else}
  Not logged in {JSON.stringify(user)}
{/if}
