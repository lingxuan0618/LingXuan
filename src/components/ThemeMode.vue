<template>
  <div class="md:order-5">
    <button v-if="themeColor === 'light'" id="light"
    :class="{'light': themeColor === 'light'}"
    class="flex items-center justify-center px-2 py-1 rounded-full
    bg-lightLiner border-gray-400 border-2 min-w-[80px]"
    @click="changeThemeColor('dark')">
      <span class="text-xs pr-2">{{ $t('theme.light') }}</span>
      <font-awesome-icon icon="fa-solid fa-sun" class="text-yellow-500"/>
    </button>
    <button  v-else id="dark"
    :class="{'dark': themeColor === 'dark'}"
    class="flex items-center justify-center px-2 py-1 rounded-full bg-darkLiner border-gray-400
    border-2 hover:bg-gray-100 min-w-[80px]"
    @click="changeThemeColor('light')">
      <span class="text-xs pr-2 text-white">{{ $t('theme.dark') }}</span>
      <font-awesome-icon icon="fa-solid fa-moon" class="text-yellow-500"/>
    </button>
  </div>
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
