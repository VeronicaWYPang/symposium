<script>
  import { user } from '$lib/user/userStore'
  import { dev } from '$app/env';
  import supabase from "../db";

  // You have to this because class is a reserved keyword in JavaScript
  // let className;
  // export { className as class };

  let loading = false
  /**
   * Login to Supabase
   * @returns {Promise<void>}
   */
  const handleLogin = async () => {
    try {
      loading = true
      const { error } = await supabase.auth.signIn({ provider: 'google' }, {
        redirectTo: dev ? 'http://localhost:3000' : null
      })
      if (error) throw error
    } catch (error) {
      alert(error.error_description || error.message)
    } finally {
      loading = false
    }
  }

</script>

{#if $user}
  <a href="/profile" class="hover:bg-gray-100 rounded-full h-12 w-12 flex items-center justify-center flex-none">
    <img src={ supabase.auth.user()?.user_metadata.avatar_url}
         class="cursor-pointer h-8 w-8 rounded-full bg-green-400"
         alt="avatar"
    />
  </a>
{:else}
  <!--  <div class="btn" on:click={handleLogin}>Login</div>-->
  <div class="btn btn-ghost whitespace-nowrap" on:click={handleLogin}>
    Login with Google
  </div>
{/if}
