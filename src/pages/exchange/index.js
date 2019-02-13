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
import TradingSignals from 'src/components/sections/tradingSignals'
import TrendChartOverview from 'src/components/sections/trendChartOverview'
import MobileAppOverview from 'src/components/sections/mobileAppOverview'
import DownloadClientApp from 'src/components/sections/downloadClientApp'

const IndexPage = () => (
  <Layout pageTitle="Platinum" language="en">
    <main className="page_exchange">
      <Preface />
      <FullFeatures />
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
      <TradingSignals />
      <TrendChartOverview />
      <MobileAppOverview />
      <DownloadClientApp />
    </main>
  </Layout>
)

export default IndexPage
