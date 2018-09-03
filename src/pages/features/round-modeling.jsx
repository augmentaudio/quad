// @flow

import * as React from 'react';
import { withI18n, Trans } from '@lingui/react';
import Img from 'gatsby-image';

import { FeatureLinks } from '../../components/Features';
import { Title } from '../../layouts/utils';


export default withI18n()(({ i18n, ...props }: Props) => (
  <div>
    <Title
      title={i18n.t`Portfolio Management & Accounting`}
      section={i18n.t`Features`}
      description={i18n.t`A multi-asset class portfolio accounting system.`}
    />

    <header className="header text-white bg-quadblock">
      <div className="container text-center">

        <div className="row">
          <div className="col-12 col-lg-8 offset-lg-2">
            <h1><Trans>Portfolio Management & Accounting</Trans></h1>
          </div>
        </div>

      </div>
    </header>
    <main className="main-content">


      <section className="section overflow-hidden">
        <div className="container text-left">

          <div>
            <header className="section-header text-left">
              <h2>
                <Trans>
                  Multi-asset class portfolio accounting system.
                </Trans>
              </h2>
              <p>
                <Trans>
                  A complete view by delivering the tools you need to produce accurate
                  financial reports, reconcile portfolio data, and calculate real-time
                  NAV and P&L.
                  <br />
                  <br />
                  Satisfy investors and regulator requirements with scheduled and automated custom reports. Maintain
                  accurate intraday and historical records of all your transactions and positions.
                  Save time and money by automating repetitive and manual middle- and back-office tasks.
                  Maintain an accurate and holistic view of your portfolios.
                  <br />
                  <br />
                  Get a real-time view of your data the way <i>you want to see it.</i>
                </Trans>
              </p>
            </header>

            <div className="row gap-y">
              <div className="col-md-10 mx-auto mb-7" data-aos="fade-up">
                <Img {...props.data.roundModelingSample} alt={i18n.t`Round Modeling`} />
              </div>
            </div>
          </div>

          <div>
            <header className="section-header text-left">
              <p>
                <Trans>
                  Scroll down, and you will notice that the cap table now
                  indicates the <i>Round Modeling</i> mode.
                  This gives you a detailed overview of who owns how many shares
                  after applying the new financing round. Cool, eh?
                </Trans>
              </p>
            </header>

            <div className="row gap-y">
              <div className="col-md-10 mx-auto mb-7" data-aos="fade-left">
                <Img {...props.data.roundModelingCaptable} alt={i18n.t`Cap table during round modeling`} />
              </div>
            </div>
          </div>

          <div>
            <header className="section-header text-left mt-3">
              <h2><Trans>Share your scenarios</Trans></h2>
              <p>
                <Trans>
                  After you’re finished with modeling your financing round, you can
                  download the scenario as a PDF document and share it with your co-founders,
                  lawyers and investors.
                  The document includes the pre- and post-money valuation of your company,
                  all investments, and convertibles with their resulting share price
                  and the number of shares and, of course, the resulting cap table.
                  At the end of the document, you will also find valuable plots to visualize the new
                  development step of your company.
                </Trans>
              </p>
            </header>

            <div className="row gap-y">
              <div className="col-md-10 mx-auto mb-7" data-aos="fade-up-right">
                <Img {...props.data.roundModelingPdf} alt={i18n.t`PDF export of the financing round`} />
              </div>
            </div>
          </div>

          <hr className="my-8" />


          <div className="row align-items-center">
            <div className="col-md-6 ml-auto">
              <h2><Trans>Convert to transactions</Trans></h2>
              <p>
                <Trans>
                  As soon as you’re done with your financing round, hit the <i>Convert</i> button.
                  This will transform the scenario into real transactions for your
                  share register and make it visible to all shareholders and investors.
                </Trans>
              </p>
            </div>

            <div className="col-md-5" data-aos="fade-left">
              <Img {...props.data.roundModelingConvert} alt={i18n.t`Convert financing round`} />
            </div>
          </div>

          <FeatureLinks {...props} i18n={i18n} page="round-modeling" />

        </div>
      </section>


    </main>
  </div>
));


// eslint-disable-next-line no-undef
export const pageQuery = graphql`
  query RoundModelingQuery {
    ...FeaturesFragment

    roundModelingSample: imageSharp(id: { regex: "/portfolio.png/" }) {
      sizes(maxWidth: 800) { ...GatsbyImageSharpSizes }
    }
    roundModelingCaptable: imageSharp(id: { regex: "/cointrends.png/" }) {
      sizes(maxWidth: 800) { ...GatsbyImageSharpSizes }
    }
    roundModelingPdf: imageSharp(id: { regex: "/google-trends.png/" }) {
      sizes(maxWidth: 2000) { ...GatsbyImageSharpSizes }
    }
    roundModelingConvert: imageSharp(id: { regex: "/ema-google-trends.png/" }) {
      sizes(maxWidth: 800) { ...GatsbyImageSharpSizes }
    }
  }
`;
