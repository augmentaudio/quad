// @flow

import * as React from 'react';
import { withI18n, Trans } from '@lingui/react';
import Link from 'gatsby-link';

import { Feature } from '../components/Features';
import { Title } from '../layouts/utils';

const Hr = () => <hr className="my-3" />;


export default withI18n()(({ i18n, ...props }: Props) => (
  <div>
    <Title title={i18n.t`Features`} />

    <header className="header text-white bg-quadblock">
      <div className="container text-center">

        <div className="row">
          <div className="col-12 col-lg-8 offset-lg-2">

            <h1><Trans>Manage your Portfolio.<br />Not your Excel.</Trans></h1>

          </div>
        </div>

      </div>
    </header>
    <main className="main-content">


      <section className="section pt-5">
        <div className="container">

          <Feature
            {...props}
            name={i18n.t`Consistency`}
            title={i18n.t`Guaranteed Error-Free`}
            url="consistency"
          >
            <Trans>
              Did you know that many excel spreadsheets with API calls fail just when you need them most?
              Tracking trades and investments with Excel or Word can quickly lead to
              inconsistencies.
            Track your portfolio with Quadblock
              and be sure that all data is consistent at any time.
            </Trans>
          </Feature>

          <Hr />

          <Feature
            {...props}
            name={i18n.t`Portfolio Management`}
            url="round-modeling"
            left
          >
            <Trans>
              A complete view by delivering the tools you need to produce accurate financial reports,
              reconcile portfolio data, and calculate real-time NAV and P&L.
            </Trans>
          </Feature>

          <Hr />

          <Feature
            {...props}
            name={i18n.t`Charts`}
            url="charts"
          >
            <Trans>
              Technical Analysis is the forecasting of future financial price movements based on an
              examination of past price movements. Like weather forecasting, technical analysis does
              not result in absolute predictions about the future. Instead, technical analysis can
              help investors anticipate what is “likely” to happen to prices over time. <br />
              Technical analysis uses a wide variety of charts that show price over time.
            </Trans>
          </Feature>

          <Hr />

          <Feature
            {...props}
            name={i18n.t`Reporting & Documents`}
            url="reporting"
            left
          >
            <Trans>
              Oh, it’s tax season again, and 50 holding confirmations are
              waiting to be sent to your shareholders.
              This means pasting names into document templates,
              computing the tax value of all shares… <br />
              Don’t worry. Generate and send all relevant documents with a single click on quadblock.
            </Trans>
          </Feature>

          <Hr />

          <Feature
            {...props}
            title={i18n.t`Investor Dashboard`}
            name={i18n.t`the Investor Dashboard`}
            url="investors"
          >
            <Trans>
              Are you an investor and want to track your portfolio companies?
              The founders are busy and the numbers they give you are different
              from your own records?<br />
              With their share register on quadblock, there’s only a single source of truth.
              Convince your companies, and you will never miss anything regarding your investments.
            </Trans>
          </Feature>

          <div className="mx-auto text-center my-8">
            <Link href to={`${props.prefix}/all-features/`} className="btn btn-block d-sm-inline btn-round btn-xl btn-outline-primary mt-6" >
              <Trans>Discover all blockchain investments features</Trans>
            </Link>
          </div>

          <hr className="my-8 w-20" />

          <div className="row gap-y text-center">

            <div className="col-md-6 offset-xl-2 col-xl-4">
              <i className="text-primary fa fa-shield fa-3x mb-2" />
              <h5><Trans>Privacy</Trans></h5>
              <p>
                <Trans>
                  Blockchain investment data is sensitive.
                  That’s why we genuinely care about your privacy.
                </Trans>
                <br />
                <Link href to={`${props.prefix}/privacy/`}><Trans>Read more</Trans>  <i className="ti-angle-right fs-10 ml-1" /></Link>
              </p>
            </div>

            <div className="col-md-6 col-xl-4">
              <i className="text-success fa fa-lock fa-3x mb-2" />
              <h5><Trans>Security</Trans></h5>
              <p>
                <Trans>
                  Your data is safe with us. Enjoy the highest security standards. No kidding.
                </Trans>
                <br />
                <Link href to={`${props.prefix}/security/`}><Trans>Read more</Trans>  <i className="ti-angle-right fs-10 ml-1" /></Link>
              </p>
            </div>
          </div>

        </div>
      </section>


      <p className="col-md-6 offset-md-5 text-right text-lighter small-2">
        <Trans>Illustrations by</Trans> <a href="https://www.freepik.com/alekksall">Alekksall</a>
      </p>

    </main>
  </div>
));


// eslint-disable-next-line no-undef
export const pageQuery = graphql`
  query FeaturesPageQuery {
    ...FeaturesFragment
  }
`;
