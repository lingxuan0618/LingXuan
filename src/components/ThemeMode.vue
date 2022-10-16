<template>
    <button v-if="themeColor === 'light'" id="light"
    :class="{'light': themeColor === 'light'}"
    class="px-4 py-2 rounded-full bg-white border-gray-400 border-2"
    @click="changeThemeColor('dark')">
      {{ $t('theme.light') }} <font-awesome-icon icon="fa-solid fa-sun" class="text-yellow-500"/>
    </button>
    <button  v-else id="dark"
    :class="{'dark': themeColor === 'dark'}"
    class="px-4 py-2 rounded-full bg-gray-700 border-gray-700 border-2 text-white"
    @click="changeThemeColor('light')">
      {{ $t('theme.dark') }} <font-awesome-icon icon="fa-solid fa-moon" class="text-yellow-500"/>
    </button>
</template>

<script>
export default {
  data() {
    return {
      themeColor: 'light',
    };
  },
  name: 'HelloWorld',
  methods: {
    changeThemeColor(mode) {
      document.documentElement.classList.toggle('dark');
      this.themeColor = mode;
    },
  },
};
</script>

<style scoped lang="scss">

</style>
