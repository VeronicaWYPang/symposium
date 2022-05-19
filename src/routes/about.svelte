<script>
  export const [{ metadata:content }] = Object.values(import.meta.globEager("$content/about.md"))
</script>

<svelte:head>
  <title>About</title>
</svelte:head>

<div class="max-w-screen-lg w-full mx-auto pt-20 px-3">

  <div class="font-bold text-2xl">
    {content.title1}
  </div>

  <img src={content.image1} class="my-10 w-full h-auto rounded" alt="about part 1">
  <p class="mt-8">
    {content.text1}
  </p>

  <!---->
  <div class="grid grid-cols-1 sm:grid-cols-2 gap-10 my-20">
    <div>
      <div class="font-bold text-xl">
        {content.title2}
      </div>
      <p class="mt-8">
        {content.text2}
      </p>
    </div>
    <div>
      <img src={content.image2} class="my-2 w-full h-auto rounded" alt="about part 2">
    </div>
  </div>


  <!---->
  <div class="grid grid-cols-1 sm:grid-cols-2 gap-10 mt-20 mb-40">
    <div class="order-2  sm:order-1">
      <img src={content.image3} class="my-2 w-full h-auto rounded" alt="about part 3">
    </div>
    <div class="order-1 sm:order-2">
      <div class="font-bold text-xl">
        {content.title3}
      </div>
      <p class="mt-8">
        {content.text3}
      </p>
    </div>

  </div>

</div>
