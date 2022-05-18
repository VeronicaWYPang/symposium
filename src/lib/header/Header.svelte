<!--<script lang="ts">-->
<!--	import { page } from '$app/stores';-->

<!--  import logo from './svelte-logo.svg';-->
<!--  import LoginButton from '$lib/user/LoginButton.svelte';-->
<!--</script>-->

<!--<div class="flex flex-col w-screen  pt-0">-->
<!--  &lt;!&ndash; Component Start &ndash;&gt;-->
<!--  <nav-->
<!--      class="box-shadow-bar relative w-full flex items-center px-6 h-20 bg-white text-black shadow-md"-->
<!--  >-->
<!--    <a href="/" class="logo-link rounded-full hover:bg-gray-100" aria-label="Go to home page">-->
<!--      <svg-->
<!--          class="fill-current w-10"-->
<!--          width="30"-->
<!--          height="30"-->
<!--          viewBox="0 0 44 44"-->
<!--          fill="none"-->
<!--          xmlns="http://www.w3.org/2000/svg"-->
<!--      >-->
<!--        <circle cx="22" cy="22" r="22" fill="#F49A15" />-->
<!--        <path fill-rule="evenodd" clip-rule="evenodd" d="M23.3519 35.6108C23.8633 36.1696 23.8493 37.0429 23.3203 37.5843C22.7634 38.1543 21.8551 38.1357 21.3209 37.5434L6.23083 20.8131C5.95377 20.5059 5.92271 20.0429 6.15615 19.6998L13.1775 9.38171C13.3403 9.14256 13.607 9 13.8918 9H30.7217C30.9987 9 31.2591 9.13494 31.4231 9.36341L38.8311 19.6838C39.0814 20.0326 39.0506 20.5151 38.758 20.8276L26.8774 33.5125C26.5309 33.8825 25.9515 33.8777 25.6109 33.5019L14.1187 20.8217C13.8369 20.5108 13.8084 20.0396 14.0505 19.6954L16.9187 15.6185C17.0823 15.386 17.3451 15.2482 17.6251 15.2482H27.1714C27.4514 15.2482 27.7142 15.386 27.8778 15.6185L30.7387 19.685C30.9841 20.0339 30.9511 20.5123 30.6602 20.8224L27.3201 24.3831C26.8307 24.9049 26.0215 24.9245 25.5084 24.4271C24.9889 23.9234 24.9713 23.0825 25.4692 22.5564L27.278 20.6456C27.4738 20.4387 27.4948 20.1174 27.3276 19.8857L26.1329 18.2301C25.9688 18.0027 25.7089 17.8685 25.4327 17.8685H19.2206C18.9296 17.8685 18.6578 18.0173 18.4964 18.2651L17.5665 19.6926C17.3402 20.04 17.3801 20.5016 17.6623 20.8031L25.6179 29.2989C25.9576 29.6617 26.5233 29.6653 26.8673 29.3067L35.0174 20.8132C35.3103 20.508 35.3498 20.0328 35.1115 19.6813L30.0433 12.2048C29.8807 11.9649 29.6135 11.8218 29.3282 11.8218H15.4708C15.1841 11.8218 14.9158 11.9663 14.7535 12.2081L9.7251 19.6967C9.49357 20.0415 9.52771 20.5047 9.80716 20.8101L23.3519 35.6108Z" fill="white" />-->
<!--      </svg>-->
<!--    </a>-->

<!--    <div class="lg:ml-6 ml-2 lg:space-x-2 space-x-0 hidden md:flex">-->
<!--      <a-->
<!--          class="h-10 flex items-center lg:px-4 px-3 rounded font-medium hover:bg-gray-100"-->
<!--          href="/"-->
<!--      >-->
<!--        Home-->
<!--      </a>-->
<!--      <a-->
<!--          class="h-10 flex items-center lg:px-4 px-3 rounded font-medium hover:bg-gray-100"-->
<!--          href="/panel"-->
<!--      >-->
<!--        Following-->
<!--      </a>-->

<!--      <a-->
<!--          class="h-10 flex items-center lg:px-4 px-3 rounded font-medium hover:bg-gray-100"-->
<!--          href="/slack"-->
<!--      >-->
<!--        Slack UI-->
<!--      </a>-->

<!--      <a-->
<!--          class="h-10 flex items-center lg:px-4 px-3 rounded font-medium hover:bg-gray-100"-->
<!--          href="/alternate"-->
<!--      >-->
<!--        Alternate UI-->
<!--      </a>-->
<!--      <a-->
<!--          class="h-10 flex items-center lg:px-4 px-3 rounded font-medium hover:bg-gray-100"-->
<!--          href="/blog"-->
<!--      >-->
<!--        Blog-->
<!--      </a>-->
<!--      &lt;!&ndash;        <div class="dropdown">&ndash;&gt;-->
<!--      &lt;!&ndash;          <div tabindex="0" class="m-1 btn">&ndash;&gt;-->
<!--      &lt;!&ndash;            Dropdown&ndash;&gt;-->
<!--      &lt;!&ndash;          </div>&ndash;&gt;-->
<!--      &lt;!&ndash;          <ul class="shadow-lg menu dropdown-content w-52 bg-white rounded">&ndash;&gt;-->
<!--      &lt;!&ndash;            <li>&ndash;&gt;-->
<!--      &lt;!&ndash;              <a&ndash;&gt;-->
<!--      &lt;!&ndash;                class="h-10 flex items-center lg:px-4 px-3 rounded font-medium hover:bg-gray-200"&ndash;&gt;-->
<!--      &lt;!&ndash;                href="/slack"&ndash;&gt;-->
<!--      &lt;!&ndash;              >&ndash;&gt;-->
<!--      &lt;!&ndash;                Slack UI&ndash;&gt;-->
<!--      &lt;!&ndash;              </a>&ndash;&gt;-->
<!--      &lt;!&ndash;            </li>&ndash;&gt;-->
<!--      &lt;!&ndash;            <a&ndash;&gt;-->
<!--      &lt;!&ndash;              class="h-10 flex items-center lg:px-4 px-3 rounded font-medium hover:bg-gray-100"&ndash;&gt;-->
<!--      &lt;!&ndash;              href="/slack"&ndash;&gt;-->
<!--      &lt;!&ndash;            >&ndash;&gt;-->
<!--      &lt;!&ndash;              <li>other</li>&ndash;&gt;-->
<!--      &lt;!&ndash;            </a>&ndash;&gt;-->
<!--      &lt;!&ndash;          </ul>&ndash;&gt;-->
<!--      &lt;!&ndash;        </div>&ndash;&gt;-->
<!--      &lt;!&ndash;        <div tabindex="0" class="menu">&ndash;&gt;-->
<!--      &lt;!&ndash;          <div class="menu-dropdown   focus:bg-gray-200 focus:outline-none">&ndash;&gt;-->
<!--      &lt;!&ndash;            <a&ndash;&gt;-->
<!--      &lt;!&ndash;              class="h-10 flex items-center lg:px-4 px-3 rounded font-medium hover:bg-gray-200"&ndash;&gt;-->
<!--      &lt;!&ndash;              href="/slack"&ndash;&gt;-->
<!--      &lt;!&ndash;            >&ndash;&gt;-->
<!--      &lt;!&ndash;              Slack UI&ndash;&gt;-->
<!--      &lt;!&ndash;            </a>&ndash;&gt;-->
<!--      &lt;!&ndash;            <a&ndash;&gt;-->
<!--      &lt;!&ndash;              class="h-10 flex items-center lg:px-4 px-3 rounded font-medium hover:bg-gray-100"&ndash;&gt;-->
<!--      &lt;!&ndash;              href="/slack"&ndash;&gt;-->
<!--      &lt;!&ndash;            >&ndash;&gt;-->
<!--      &lt;!&ndash;              other&ndash;&gt;-->
<!--      &lt;!&ndash;            </a>&ndash;&gt;-->
<!--      &lt;!&ndash;          </div>&ndash;&gt;-->
<!--      &lt;!&ndash;        </div>&ndash;&gt;-->

<!--      &lt;!&ndash;        <div class="relative flex-col z-10">&ndash;&gt;-->
<!--      &lt;!&ndash;          <button&ndash;&gt;-->
<!--      &lt;!&ndash;            class="dropdown h-10 flex items-center justify-center rounded lg:pl-4 pl-3 lg:pr-2 pr-1 focus:bg-gray-200 focus:outline-none hover:bg-gray-200"&ndash;&gt;-->
<!--      &lt;!&ndash;          >&ndash;&gt;-->
<!--      &lt;!&ndash;            <span class="font-medium">Dropdown</span>&ndash;&gt;-->
<!--      &lt;!&ndash;            <svg&ndash;&gt;-->
<!--      &lt;!&ndash;              class="h-4 w-4 ml-1 mt-1"&ndash;&gt;-->
<!--      &lt;!&ndash;              xmlns="http://www.w3.org/2000/svg"&ndash;&gt;-->
<!--      &lt;!&ndash;              viewBox="0 0 20 20"&ndash;&gt;-->
<!--      &lt;!&ndash;              fill="currentColor"&ndash;&gt;-->
<!--      &lt;!&ndash;            >&ndash;&gt;-->
<!--      &lt;!&ndash;              <path&ndash;&gt;-->
<!--      &lt;!&ndash;                fill-rule="evenodd"&ndash;&gt;-->
<!--      &lt;!&ndash;                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"&ndash;&gt;-->
<!--      &lt;!&ndash;                clip-rule="evenodd"&ndash;&gt;-->
<!--      &lt;!&ndash;              />&ndash;&gt;-->
<!--      &lt;!&ndash;            </svg>&ndash;&gt;-->
<!--      &lt;!&ndash;          </button>&ndash;&gt;-->
<!--      &lt;!&ndash;          <div&ndash;&gt;-->
<!--      &lt;!&ndash;            class="absolute flex-col w-full bg-white py-3 px-2 rounded-br rounded-bl right-0 shadow-lg"&ndash;&gt;-->
<!--      &lt;!&ndash;          >&ndash;&gt;-->
<!--      &lt;!&ndash;            <button @click="navigate">&ndash;&gt;-->
<!--      &lt;!&ndash;              jello&ndash;&gt;-->
<!--      &lt;!&ndash;            </button>&ndash;&gt;-->
<!--      &lt;!&ndash;            <a&ndash;&gt;-->
<!--      &lt;!&ndash;              v-slot="{ href, route, navigate, isActive, isExactActive }"&ndash;&gt;-->
<!--      &lt;!&ndash;              href="/slack"&ndash;&gt;-->
<!--      &lt;!&ndash;              custom&ndash;&gt;-->
<!--      &lt;!&ndash;            >&ndash;&gt;-->
<!--      &lt;!&ndash;              <li&ndash;&gt;-->
<!--      &lt;!&ndash;                :class="[isActive && 'a-active', isExactActive && 'a-exact-active']"&ndash;&gt;-->
<!--      &lt;!&ndash;              >&ndash;&gt;-->
<!--      &lt;!&ndash;                <a :href="href" @click="navigate">{{ route.fullPath }}</a>&ndash;&gt;-->
<!--      &lt;!&ndash;              </li>&ndash;&gt;-->
<!--      &lt;!&ndash;            </a>&ndash;&gt;-->

<!--      &lt;!&ndash;            <a&ndash;&gt;-->
<!--      &lt;!&ndash;              class="h-10 flex items-center px-2 rounded font-medium hover:bg-gray-200 cursor-pointer"&ndash;&gt;-->
<!--      &lt;!&ndash;              routerLink="/slack"&ndash;&gt;-->
<!--      &lt;!&ndash;              @click="navigate"&ndash;&gt;-->
<!--      &lt;!&ndash;            >&ndash;&gt;-->
<!--      &lt;!&ndash;              Slack ui</a>&ndash;&gt;-->
<!--      &lt;!&ndash;            <a class="h-10 flex items-center px-2 rounded font-medium hover:bg-gray-200" href="/">Link&ndash;&gt;-->
<!--      &lt;!&ndash;              2</a>&ndash;&gt;-->
<!--      &lt;!&ndash;            <a class="h-10 flex items-center px-2 rounded font-medium hover:bg-gray-200" href="/">Link&ndash;&gt;-->
<!--      &lt;!&ndash;              3</a>&ndash;&gt;-->
<!--      &lt;!&ndash;          </div>&ndash;&gt;-->
<!--      &lt;!&ndash;        </div>&ndash;&gt;-->
<!--    </div>-->

<!--    <div class="mt-1 mx-4 relative rounded-full bg-gray-100 flex-grow flex">-->
<!--      <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">-->
<!--        <svg-->
<!--            fill="none"-->
<!--            stroke="currentColor"-->
<!--            stroke-linecap="round"-->
<!--            stroke-linejoin="round"-->
<!--            stroke-width="2"-->
<!--            viewBox="0 0 24 24"-->
<!--            class="w-8 h-8 p-1"-->
<!--        ><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>-->
<!--      </div>-->
<!--      &lt;!&ndash;          <input id="price" type="text" name="price" class="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md" placeholder="0.00">&ndash;&gt;-->
<!--      <input-->
<!--          type="search"-->
<!--          name="q"-->
<!--          class=" flex-grow py-2 pr-4 pl-12 group-focus:ring hover:text-blue hover:bg-gray-200 bg-transparent rounded-full focus:outline-none focus:outline-none focus:bg-gray-200 focus:ring"-->
<!--          placeholder="Search..."-->
<!--          autocomplete="off"-->
<!--      >-->
<!--    </div>-->

<!--    <button-->
<!--        class="flex items-center h-10 pl-2 pr-2 sm:pr-4 rounded bg-gray-100 ml-auto hover:bg-gray-200 focus:outline-none focus:bg-gray-200"-->
<!--    >-->
<!--      <svg-->
<!--          class="h-6 fill-current"-->
<!--          xmlns="http://www.w3.org/2000/svg"-->
<!--          fill="none"-->
<!--          viewBox="0 0 24 24"-->
<!--          stroke="currentColor"-->
<!--      >-->
<!--        <path-->
<!--            stroke-linecap="round"-->
<!--            stroke-linejoin="round"-->
<!--            stroke-width="2"-->
<!--            d="M12 6v6m0 0v6m0-6h6m-6 0H6"-->
<!--        />-->
<!--      </svg>-->
<!--      <span class="font-medium ml-1 leading-none hidden sm:block">New Panel</span>-->
<!--    </button>-->

<!--    <div-->
<!--        class="flex items-center justify-center h-10 w-10 rounded ml-4 hover:bg-gray-200 focus:bg-gray-200"-->
<!--    >-->
<!--      <svg-->
<!--          class="h-7 w-7 stroke-current"-->
<!--          xmlns="http://www.w3.org/2000/svg"-->
<!--          fill="none"-->
<!--          viewBox="0 0 24 24"-->
<!--          stroke="currentColor"-->
<!--      >-->
<!--        <path-->
<!--            stroke-linecap="round"-->
<!--            stroke-linejoin="round"-->
<!--            stroke-width="2"-->
<!--            d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"-->
<!--        />-->
<!--      </svg>-->
<!--    </div>-->
<!--    <LoginButton />-->

<!--    <div-->
<!--        class="-->
<!--        flex-col-->
<!--        md:hidden-->
<!--        ml-4"-->
<!--    >-->
<!--      <button-->
<!--          class="menu-btn h-10 w-10 flex items-center justify-center rounded focus:bg-gray-200 focus:outline-none hover:bg-gray-200"-->
<!--      >-->
<!--        <svg-->
<!--            class="w-7 h-7"-->
<!--            xmlns="http://www.w3.org/2000/svg"-->
<!--            fill="none"-->
<!--            viewBox="0 0 24 24"-->
<!--            stroke="currentColor"-->
<!--        >-->
<!--          <path-->
<!--              stroke-linecap="round"-->
<!--              stroke-linejoin="round"-->
<!--              stroke-width="2"-->
<!--              d="M4 6h16M4 12h16M4 18h16"-->
<!--          />-->
<!--        </svg>-->
<!--      </button>-->
<!--      <div-->
<!--          class="absolute flex-col w-full bg-white py-3 px-4 rounded-br rounded-bl right-0 shadow-lg"-->
<!--      >-->
<!--        <a class="h-10 flex items-center px-2 rounded font-medium hover:bg-gray-100" href="/">Link-->
<!--          1</a>-->
<!--        <a class="h-10 flex items-center px-2 rounded font-medium hover:bg-gray-100" href="/">Link-->
<!--          2</a>-->
<!--        <a class="h-10 flex items-center px-2 rounded font-medium hover:bg-gray-100" href="/">Link-->
<!--          3</a>-->
<!--      </div>-->
<!--      <LoginButton />-->
<!--    </div>-->
<!--  </nav>-->
<!--  &lt;!&ndash; Component End  &ndash;&gt;-->
<!--</div>-->

<style>
    .box-shadow-bar {
        box-shadow: rgb(0 0 0 / 10%) 0px 8px 8px -8px
    }

    .logo-link{
        display: flex;
        align-items: center;
        justify-content: center;
        height: 44px;
        width:44px;
    }
    .logo-link svg{
        transition: all ease 250ms;
        /*width:100px;*/
        /*height:100px;*/
    }

    .logo-link:active svg{
        transform:  scale(0.9, 0.9);
    }

    .menu-btn + div {
        display: none;
    }

</style>
