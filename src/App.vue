<template>
  <!-- <nav class="flex justify-between">
    <div class="flex items-center dark:text-white">
      <img src="@/assets/img/logo.svg" alt="LingXuan Logo" />
      <router-link to="/">關於我</router-link> |
      <router-link to="/about">休閒活動</router-link> |
      <router-link to="/about">志工活動</router-link> |
      <router-link to="/about">大學專題</router-link> |
      <router-link to="/about">學習歷程</router-link>
    </div>
    <div>
      <Language />
      <ThemeMode />
    </div>
  </nav> -->
  <nav class="px-6 py-4 md:flex md:justify-between md:items-center
  bg-lightLiner dark:bg-darkLiner border-b-2 border-zinc-100 dark:border-gray-700">
    <div class="flex items-center justify-between">
      <img src="@/assets/img/logo.svg" alt="LingXuan Logo" />
      <div class="flex items-center">
        <ThemeMode class="flex md:hidden"/>
        <!-- Mobile menu button -->
        <div class="flex md:hidden">
          <button @click="showMenu = !showMenu"
            type="button"
            class="text-gray-800 dark:text-white hover:text-gray-400
            focus:outline-none focus:text-gray-400 ml-2">
            <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
              <path fill-rule="evenodd"
                d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0
                2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z">
              </path>
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
    <div class="flex items-center">
      <ThemeMode class="hidden md:flex pl-8"/>
      <ul :class="showMenu ? 'flex' : 'hidden'"
          class="flex-col mt-8 space-y-4
          md:flex md:space-y-0 md:flex-row
          md:items-center md:space-x-10
          md:mt-0 mx-auto text-gray-800 dark:text-white">
        <li class="text-sm font-bold hover:text-mainBlue cursor-pointer">
          <router-link to="/about">關於我</router-link>
        </li>
        <li class="text-sm font-bold hover:text-mainBlue cursor-pointer">
          <router-link to="/sport">休閒運動</router-link>
        </li>
        <li class="text-sm font-bold hover:text-mainBlue cursor-pointer">
          <router-link to="/volunteer">志工活動</router-link>
        </li>
        <li class="text-sm font-bold hover:text-mainBlue cursor-pointer">
          <router-link to="/university">大學專題</router-link>
        </li>
        <li class="text-sm font-bold hover:text-mainBlue cursor-pointer">
          <router-link to="/learning">學習歷程</router-link>
        </li>
      </ul>
    </div>
  </nav>
  <router-view class="mb-12"/>
  <Footer class="border-t-2 border-zinc-100 dark:border-gray-700"/>
</template>

<script>
// @ is an alias to /src
import ThemeMode from '@/components/ThemeMode.vue';
import Footer from '@/components/Footer.vue';
// import Language from '@/components/Language.vue';

export default {
  components: {
    ThemeMode,
    Footer,
    // Language,
  },
  data() {
    return {
      showMenu: false,
    };
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    // font-weight: bold;
    // color: #2c3e50;

    &.router-link-exact-active {
      color: #0ea5e9;
    }
  }
}
</style>
