<template>
  <nav class="flex justify-between">
    <div class="flex items-center dark:text-white">
      <img src="@/assets/img/logo.svg" alt="Logo">
      <router-link to="/">關於我</router-link> |
      <router-link to="/about">休閒活動</router-link> |
      <router-link to="/about">志工活動</router-link> |
      <router-link to="/about">大學專題</router-link> |
      <router-link to="/about">學習歷程</router-link>
    </div>
    <div>
      <!-- <Language/> -->
      <ThemeMode/>
    </div>
  </nav>
  <router-view/>
  <Footer/>
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
      color: #0EA5E9;
    }
  }
}
</style>
