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
  <nav class="container px-6 py-4 md:flex md:justify-between md:items-center
  bg-darkLiner dark:bg-lightLiner">
    <div class="flex items-center justify-between">
      <img src="@/assets/img/logo.svg" alt="LingXuan Logo" />
      <div class="flex items-center">
        <ThemeMode class="flex md:hidden"/>
        <!-- Mobile menu button -->
        <div @click="showMenu = !showMenu" @keydown="123" class="flex md:hidden">
          <button
            type="button"
            class="text-white hover:text-gray-400
            focus:outline-none focus:text-gray-400">
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
      <ThemeMode class="hidden md:flex pl-4"/>
      <ul :class="showMenu ? 'flex' : 'hidden'"
          class="flex-col mt-8 space-y-4
          md:flex md:space-y-0 md:flex-row
          md:items-center md:space-x-10
          md:mt-0 mx-auto text-white dark:text-gray-800">
        <li class="text-sm font-bold hover:text-mainBlue cursor-pointer">關於我</li>
        <li class="text-sm font-bold hover:text-mainBlue cursor-pointer">休閒活動</li>
        <li class="text-sm font-bold hover:text-mainBlue cursor-pointer">志工活動</li>
        <li class="text-sm font-bold hover:text-mainBlue cursor-pointer">大學專題</li>
        <li class="text-sm font-bold hover:text-mainBlue cursor-pointer">學習歷程</li>
      </ul>
    </div>
  </nav>
  <router-view />
  <Footer />
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
