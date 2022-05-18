<script>
  import { addOrganization } from "$lib/organizations/organizations.store";

  let name = null
  let description = null

  function add() {
    if (name && description) {
      addOrganization(name, description)
      name = null
      description = null
    }
  }

</script>
<!-- The button to open modal -->

<label
    for="my-modal"
    class="modal-button flex items-center h-10 pl-2 pr-2 md:pr-4 rounded bg-gray-100 ml-auto hover:bg-gray-200 focus:outline-none focus:bg-gray-200 flex-none"
>
  <svg
      class="h-6 fill-current"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
  >
    <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
    />
  </svg>
  <span class="font-medium ml-1 leading-none hidden lg:block">New Panel</span>
</label>


<!-- Put this part before </body> tag -->
<input type="checkbox" id="my-modal" class="modal-toggle"/>
<div class="modal">
  <div class="modal-box">
    <h3 class="font-bold text-lg">Create new panel</h3>
    <p class="py-4">“Average players want to be left alone. Good players want to be coached. Great players want to be told the truth.” Doc Rivers</p>

    <!--    name -->
    <div class="form-control w-full max-w-xs">
      <label class="label">
        <span class="label-text">Panel name</span>
      </label>
      <input bind:value={name} type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs"/>
    </div>

    <!--    Description-->
    <div class="form-control">
      <label class="label">
        <span class="label-text">Description</span>
      </label>
      <textarea bind:value={description} class="textarea textarea-bordered h-24" placeholder="Description"></textarea>
    </div>


    <div class="modal-action">
      <label for="my-modal" class="btn btn-ghost">Cancel</label>
      <label for="my-modal" class="btn" on:click={add}>Create panel</label>
    </div>
  </div>
</div>
