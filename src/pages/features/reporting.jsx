// @flow

import * as React from 'react';
import { withI18n, Trans } from '@lingui/react';
import Img from 'gatsby-image';

import { FeatureLinks } from '../../components/Features';
import { Title } from '../../layouts/utils';


export default withI18n()(({ i18n, ...props }: Props) => (
  <div>
    <Title
      title={i18n.t`Blockchain Technology`}
      section={i18n.t`Features`}
      description={i18n.t`Blockchain is a new disruptive technology with huge potential.`}
    />

    <header className="header text-white bg-quadblock">
      <div className="container text-center">

        <div className="row">
          <div className="col-12 col-lg-8 offset-lg-2">
            <h1><Trans>Blockchain</Trans></h1>
          </div>
        </div>

      </div>
    </header>
    <main className="main-content">


      <section className="section overflow-hidden">
        <div className="container text-left">

          <div>
            <header className="section-header text-left">
              <h2><Trans>Take control of your investments.</Trans></h2>
              <p>
                <Trans>
                Focus on the essentials:
                Tailored solution approach, for example, to quantify realizable savings or added value
                with the help of Blockchain technology in the company. Providing up-to-date market knowledge
                and bringing in our end-to-end project experience, in-house developments and proof-of-concepts.


                  <br /><br />
                  Create transparency, reduce complexity:
                  Realistic quantification of optimization potentials by mirroring the process structure and
                  case-specific simulation of smart contracts with the goal of process digitization.
                </Trans>
              </p>
            </header>

            <div className="row gap-y">
              <div className="col-md-12 mx-auto mb-7" data-aos="fade-up">
                <Img {...props.data.shareRegisterPdf} alt={i18n.t`PDF export of the share register`} />
              </div>
            </div>
          </div>


          <hr className="my-8" />


          <header className="section-header text-left">
            <h2><Trans>Smart contracts</Trans></h2>
          </header>

          <div className="row align-items-center my-8">
            <div className="col-md-6 ml-auto">
              <p>
                <Trans>
                Smart contracts in the financial industry: when hype becomes reality
                The potential of so-called smart contracts - programmable contracts that
                automatically execute actions such as payments as soon as predefined
                conditions are met - is currently much discussed in the financial industry.

                  <br /><br />
                  These virtual contracts are based on Distributed Ledger Technology (DLT), also
                  known as Blockchain, and are considered to be the cure for many of the
                  drawbacks of traditional financial contracts that do not meet the new
                  opportunities of digital transformation.
                  <br /><br />
                  Reduce hours of tedious work to just a few seconds. Hurray!
                </Trans>
              </p>
            </div>

            <div className="col-md-5" data-aos="fade-left">
              <Img {...props.data.sendHoldingConfirmation} alt={i18n.t`Dialog for holding confirmation`} />
            </div>
          </div>


          <div>
            <header className="section-header text-left">
              <p>
                <Trans>
                By evaluating investment strategies and holdings in numerous ways,
                Quadblock arms financial professionals with valuable insight for
                more informed investing decisions.


                  <br />
                  All documents are ready to be sent to the tax authority!
                </Trans>
              </p>
            </header>

            <div className="row gap-y">
              <div className="col-md-8 mx-auto mb-7" data-aos="fade-right">
                <Img {...props.data.holdingConfirmationPdf} alt={i18n.t`Holding confirmation`} />
              </div>
            </div>
          </div>

          <hr className="my-8" />


          <div>
            <header className="section-header text-left">
              <h2><Trans>Bring order to your documents</Trans></h2>
              <p>
                <Trans>
                  monitor the markets to effectively manage your investments.
                  Data is stored in the cloud or locally on your computer,
                  and can be shared between users with our integrated on-line
                  sync service.
                  <br /><br />
                  Quadblock can connect to all popular exchanges using the API feature
                  and it automatically fetches the new trading data. Apart from saving time,
                  this ensures you are always aware of your investments in real-time.
                </Trans>
              </p>
            </header>

            <div className="row gap-y">
              <div className="col-md-10 mx-auto mb-7" data-aos="fade-left">
                <Img {...props.data.documentManagement} alt={i18n.t`Document management`} />
              </div>
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
  query ReportingQuery {
    ...FeaturesFragment

    shareRegisterPdf: imageSharp(id: { regex: "/cointracking.png/" }) {
      sizes(maxWidth: 2400) { ...GatsbyImageSharpSizes }
    }
    sendHoldingConfirmation: imageSharp(id: { regex: "/smartcontracts.png/" }) {
      sizes(maxWidth: 800) { ...GatsbyImageSharpSizes }
    }
    holdingConfirmationPdf: imageSharp(id: { regex: "/bitcoin-chart.png/" }) {
      sizes(maxWidth: 2000) { ...GatsbyImageSharpSizes }
    }
    documentManagement: imageSharp(id: { regex: "/document-management.png/" }) {
      sizes(maxWidth: 800) { ...GatsbyImageSharpSizes }
    }
  }
`;
