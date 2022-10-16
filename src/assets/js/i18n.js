import { createI18n } from 'vue-i18n';
// 載入語言
import zh from './lang/zh';
import en from './lang/en';

const i18n = createI18n({
  locale: 'zh',
  // fallbackLocale: 'zh',
  messages: {
    zh,
    en,
  },
});
export default i18n;
