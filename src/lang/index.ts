import Vue from 'vue'
import VueI18n from 'vue-i18n'

import elementEnLocale from 'element-ui/lib/locale/lang/en'
import elementZhLocale from 'element-ui/lib/locale/lang/zh-CN'

import enLocale from './en_US'
import zhLocale from './zh_CN'

Vue.use(VueI18n)

const messages = {
  en_US: {
    ...enLocale,
    ...elementEnLocale
  },
  zh_CN: {
    ...zhLocale,
    ...elementZhLocale
  }
}

export const getLocale = () => {
  const cookieLanguage = localStorage.getItem("language")
  if (cookieLanguage) {
    return cookieLanguage
  }
  return 'zh_CN'
}

const i18n = new VueI18n({
  locale: getLocale(),
  messages
})

export default i18n