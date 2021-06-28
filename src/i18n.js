import Vue from 'vue'
import VueI18n from 'vue-i18n'
Vue.use(VueI18n)
// element 对应关系表
const correspondence = {
  zh: 'zh-CN',
  en: 'en'
}

function loadLocaleMessages() {
  const locales = require.context('./locales', true, /[A-Za-z0-9-_,\s]+\.json$/i)
  const elementLocales = require.context(
    'element-ui/lib/locale/lang',
    true,
    /[A-Za-z0-9-_,\s]+\.js$/i
  )
  let elementLocalesArray = elementLocales.keys()
  const messages = {}
  locales.keys().forEach((key) => {
    const matched = key.match(/([A-Za-z0-9-_]+)\./i)
    if (matched && matched.length > 1) {
      const locale = matched[1]
      const localeJson = locales(key)
      let elementName = elementLocalesArray.find((row) => row.includes(correspondence[locale]))
      elementName = elementName
        ? elementLocales(elementName) && elementLocales(elementName).default
        : {}
      messages[locale] = { ...localeJson, ...elementName }
    }
  })
  return messages
}

export default new VueI18n({
  locale: process.env.VUE_APP_I18N_LOCALE || 'en',
  fallbackLocale: process.env.VUE_APP_I18N_FALLBACK_LOCALE || 'en',
  messages: loadLocaleMessages()
})
