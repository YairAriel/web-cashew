import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

import en from '@/assets/strings/en'
import he from '@/assets/strings/he'

export default new VueI18n({
  locale: 'en',
  messages: {
    en,
    he
  }
})
