import React from 'react'
import './page_exchange.less'
import Layout from 'src/components/layout/LayoutPure'
import Preface from 'src/components/sections/preface'
import MarketTable from 'src/components/sections/marketTable'
import FullFeatures from 'src/components/sections/fullFeatures'
import TerminalOverview from 'src/components/sections/terminalOverview'
import PortfolioShortOverview from 'src/components/sections/portfolioShortOverview'
import SubAccountOverview from 'src/components/sections/subAccountOverview'
import ReferralProgramOverview from 'src/components/sections/referralProgramOverview'
import KycOverview from 'src/components/sections/kycOverview'
import IdentityVerificationOverview from 'src/components/sections/identityVerificationOverview'

const IndexPage = () => (
  <Layout pageTitle="Platinum" language="en">
    <main className="page_exchange">
      <Preface />
      <MarketTable />
      <FullFeatures />
      <section className="section">
        <div className="wrapper_section-content">
          <button className="button_theme_light">
            Get Started
          </button>
        </div>
      </section>
      <TerminalOverview />
      <PortfolioShortOverview />
      <SubAccountOverview />
      <ReferralProgramOverview />
      <section className="section section_kyc-identity-wrapper">
        <div className="wrapper_section-content">
          <KycOverview />
          <IdentityVerificationOverview />
        </div>
      </section>
    </main>
  </Layout>
)

export default IndexPage
