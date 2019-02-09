import React from 'react'
import './page_exchange.less'
import Layout from 'src/components/layout/LayoutPure'
import Preface from 'src/components/sections/preface'
import Demo from 'src/components/demo'

const IndexPage = () => (
  <Layout pageTitle="Platinum" language="en">
    <main className="page_exchange">
      <Demo />
    </main>
  </Layout>
)

export default IndexPage
