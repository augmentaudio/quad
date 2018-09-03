// @flow

import * as React from 'react';
import { withI18n, Trans } from '@lingui/react';
import Img from 'gatsby-image';

import { FeatureLinks } from '../../components/Features';
import { Title } from '../../layouts/utils';


export default withI18n()(({ i18n, ...props }: Props) => (
  <div>
    <Title
      title={i18n.t`Chart`}
      section={i18n.t`Features`}
      description={i18n.t`Have someone keep an eye on your Technical Anlaysis whilst you are not at work.`}
    />

    <header className="header text-white bg-quadblock">
      <div className="container text-center">

        <div className="row">
          <div className="col-12 col-lg-8 offset-lg-2">
            <h1><Trans>Charts</Trans></h1>
          </div>
        </div>

      </div>
    </header>
    <main className="main-content">


      <section className="section overflow-hidden">
        <div className="container text-left">

          <div>
            <header className="section-header text-left">
              <h2><Trans>Make clear decisions</Trans></h2>
              <p>
                <Trans>
                  Quadblock allow you to dissect your portfolio and gain a clear view of your holdings.
                  You can evaluate your overall asset allocation and sector weightings as well as uncover
                  concentrated positions, view the stock holdings behind your mutual funds, measure performance
                  against benchmarks and industry indexes, and stay up-to-date on the latest news and corporate
                  actions relating to your holdings.
                  <br /><br />
                  While the underlying calculations and methodology are quite sophisticated,
                  Quadblock gives <i>graphical representation</i> of results is easy for even novice investors to understand.
                </Trans>
              </p>
            </header>

            <div className="row gap-y">
              <div className="col-md-10 mx-auto mb-7" data-aos="fade-up">
                <Img {...props.data.addIncentive} alt={i18n.t`Add incentive plan`} />
              </div>
            </div>
          </div>

          <div className="row align-items-center my-8">
            <div className="col-md-4">
              <p>
                <Trans>
                  More than simple performance tracking, Portfolio Manager delivers the independent insights,
                  analysis, news, and research you need to understand your performance and improve your financial
                  outlook.
                </Trans>
              </p>
            </div>

            <div className="col-md-8 ml-auto" data-aos="fade-left">
              <Img {...props.data.vestingSchedule} alt={i18n.t`Vesting schedule for ESOPs`} />
            </div>
          </div>

          <hr className="my-8" />

          <div className="row align-items-center my-8">
            <div className="col-md-4 ml-auto">
              <p>
                <Trans>
                Access global markets through an institutional technology platform
                Quadblock one-stop trading portal
                <br /><br />
                Secure trading, management and storage for digital assets, tailorable to specific requirements
                A unified interface for connecting to several exchanges, wallets and cold storage with a consolidated ledger of all assets
                Setup, service and maintenance of all connections and accounts.

                </Trans>
              </p>
            </div>

            <div className="col-md-8 order-md-first" data-aos="fade-right">
              <Img {...props.data.addPool} alt={i18n.t`Add an incentives pool`} />
            </div>
          </div>

          <div className="row align-items-center my-8">
            <div className="col-md-4 ml-auto">
              <p>
                <Trans>
                One integrated back office.
                Single integrated back office for all markets,connections and products.
                Tailored reports and confirmations.
                Personalised back office support
                A cost-sharing infrastructure
                All-in formation cost for full visibility
                <br /><br />
                Pre-defined legal and regulatory infrastructure costs
                Aggregated audit and fund administration costs
                Institutional rates for transaction and prime broker services, regardless of fund size
                Live and tested
                </Trans>
              </p>
            </div>

            <div className="col-md-8" data-aos="fade-left">
              <Img {...props.data.addIncentivePsop} alt={i18n.t`Add incentives from a pool`} />
            </div>
          </div>

          <hr className="my-8" />

          <div>
            <header className="section-header text-left">
              <h2><Trans>Experience</Trans></h2>
              <p>
                <Trans>
                Refined through 20+ years experience in providing financial services,to institutional clients
                in 37 countries.
                Formation time? We’ll have you trading your own hedge fund within three months.
                </Trans>
              </p>
            </header>

            <div className="row gap-y">
              <div className="col-md-10 mx-auto mb-7" data-aos="fade-up">
                <Img {...props.data.incentivesDashboard} alt={i18n.t`ESOPs in the employee dashboard`} />
              </div>
            </div>
          </div>

          <FeatureLinks {...props} i18n={i18n} page="esop" />

        </div>
      </section>


    </main>
  </div>
));


// eslint-disable-next-line no-undef
export const pageQuery = graphql`
  query ESOPQuery {
    ...FeaturesFragment

    addIncentive: imageSharp(id: { regex: "/portfolio-gains.png/" }) {
      sizes(maxWidth: 800) { ...GatsbyImageSharpSizes }
    }
    vestingSchedule: imageSharp(id: { regex: "/chart.png/" }) {
      sizes(maxWidth: 800) { ...GatsbyImageSharpSizes }
    }
    addPool: imageSharp(id: { regex: "/chart2.png/" }) {
      sizes(maxWidth: 800) { ...GatsbyImageSharpSizes }
    }
    addIncentivePsop: imageSharp(id: { regex: "/chart3.png/" }) {
      sizes(maxWidth: 800) { ...GatsbyImageSharpSizes }
    }
    incentivesDashboard: imageSharp(id: { regex: "/incentives-dashboard.png/" }) {
      sizes(maxWidth: 800) { ...GatsbyImageSharpSizes }
    }
  }
`;
