import React from 'react'
import { Helmet } from 'react-helmet'
import TranslationProvider from 'src/providers/translation'
import 'src/common.blocks/index.less'
import Navbar from 'src/components/navbar'

const LayoutPure = props => {
  const { pageTitle, language = 'en', children } = props

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{pageTitle}</title>
      </Helmet>
      <Navbar />
      <TranslationProvider language={language}>{children}</TranslationProvider>
    </>
  )
}

export default LayoutPure
