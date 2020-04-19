import App from 'next/app';
import { Provider } from 'react-redux';
import { PageTransition } from 'next-page-transitions';
import withRedux from 'next-redux-wrapper';
import reduxStore from '~/store';
import Loader from '~/components/common/Loader';

import '~/assets/less/main.less';

const TIMEOUT = 400;
const LAYOUT = '.page-layout';

const OctopiApp = ({ Component, pageProps, router, store }) => (
  <Provider store={store}>
    <PageTransition
      timeout={TIMEOUT}
      classNames="page-transition"
      loadingComponent={<Loader />}
      loadingDelay={TIMEOUT + 100}
      loadingTimeout={{ enter: TIMEOUT, exit: 0 }}
      loadingClassNames="loading-indicator"
    >
      <Component {...pageProps} key={router.route} />
    </PageTransition>
    <style jsx global>{`
      .page-transition-enter ${LAYOUT},
      .loading-indicator-appear ${LAYOUT},
      .loading-indicator-enter ${LAYOUT}  {
        opacity: 0;
      }
      .page-transition-enter-active ${LAYOUT},
      .loading-indicator-appear-active ${LAYOUT},
      .loading-indicator-enter-active ${LAYOUT} {
        opacity: 1;
        transition: opacity ${TIMEOUT}ms;
      }
      .page-transition-exit ${LAYOUT} {
        opacity: 1;
      }
      .page-transition-exit-active ${LAYOUT} {
        opacity: 0;
        transition: opacity ${TIMEOUT}ms;
      }
    `}</style>
  </Provider>
)

OctopiApp.getInitialProps = async (appContext) => {
  const appProps = await App.getInitialProps(appContext);
  return { ...appProps }
}

export default withRedux(reduxStore)(OctopiApp);