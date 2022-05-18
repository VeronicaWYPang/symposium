<!-- TODO issue doesnt load with refreshing the page-->

<script context="module">
  export const prerender = true;
  // Add pagination
  // https://mattjennings.io/blog/rewriting-my-website-in-sveltekit
  // import all markdown files from ./posts and turn it into an array
  const posts = Object.entries(import.meta.globEager('./blog/**/*.md'))
    // .map(([, post]) => post.metadata)
    .sort((a, b) => (a.created < b.created ? 1 : -1))

  export const load = async () => {
    return {
      props: {
        posts
      }
    }
  }
</script>

<scrtip>
  export let posts
</scrtip>

<div class="flex">
  <div class="w-1/2 flex flex-col gap-4">
    <h2 class="text-3xl">Blog Posts</h2>
    {#each posts as post}
      <a sveltekit:prefetch
         href={post[0].replace('.md', '')}
         class="flex gap-3 "
      >
        <img src={post[1].metadata.img} alt={post[1].metadata.title} class="w-[100px] h-[50px]">
        {post[1].metadata.title}
      </a>
    {/each}
  </div>
</div>
