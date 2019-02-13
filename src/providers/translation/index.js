import { IntlProvider } from 'react-intl'
import React from 'react'
import en from 'src/translations/en.json'
import ja from 'src/translations/ja.json'

const TranslationProvider = ({ language, children }) => {
  let intlMessages, intlLocale

  switch (language) {
    case 'en':
      intlMessages = en
      intlLocale = 'en'
      break
    case 'ja':
      intlMessages = ja
      intlLocale = 'ja'
      break
    default:
      intlMessages = en
      intlLocale = 'en'
  }

  return (
    <IntlProvider locale={intlLocale} messages={intlMessages}>
      {children}
    </IntlProvider>
  )
}

export default TranslationProvider
