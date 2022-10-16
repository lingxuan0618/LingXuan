<template>
  <nav class="flex justify-between">
    <div>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <div>
      <Language/>
      <ThemeMode/>
    </div>
  </nav>
  <router-view/>
</template>

<script>
// @ is an alias to /src
import ThemeMode from '@/components/ThemeMode.vue';
import Language from '@/components/Language.vue';

export default {
  components: {
    ThemeMode,
    Language,
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
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
