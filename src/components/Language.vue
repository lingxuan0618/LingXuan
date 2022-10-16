<template>
  <!-- <button @click="selectLanguage('zh')">zh</button>
  <button @click="selectLanguage('en')">en</button> -->
  <label for="langSelect">
  <select id="langSelect" @change="selectLanguage()">
    <option value="" disabled>
      <font-awesome-icon icon="fa-solid fa-language" class="text-2xl"/>
    </option>
    <option value="zh">{{ $t('lang.zh') }}</option>
    <option value="en">{{ $t('lang.en') }}</option>
  </select>
  </label>
</template>

<script>
import i18n from '../assets/js/i18n';

export default {
  data() {
    return {
      lang: 'zh',
      themeColor: 'light',
    };
  },
  name: 'HelloWorld',
  methods: {
    selectLanguage() {
      const val = document.getElementById('langSelect').value;
      this.lang = val;
      // localStorage.setItem('locale', this.lang);
      i18n.global.locale = this.lang;
    },
  },
};
</script>

<style scoped lang="scss">

</style>
