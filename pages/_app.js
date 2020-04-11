import { Provider } from 'react-redux';
import { PageTransition } from 'next-page-transitions';
import withRedux from 'next-redux-wrapper';
import reduxStore from '~/store';
import Loader from '~/components/common/Loader';

import '~/assets/less/main.less';

const TIMEOUT = 400;

const OctopiApp = ({ Component, pageProps, router, store }) => (
  <>
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
    </Provider>
    <style jsx global>{`
      .page-transition-enter,
      .loading-indicator-appear,
      .loading-indicator-enter  {
        opacity: 0;
      }
      .page-transition-enter-active,
      .loading-indicator-appear-active,
      .loading-indicator-enter-active {
        opacity: 1;
        transition: opacity ${TIMEOUT}ms;
      }
      .page-transition-exit {
        opacity: 1;
      }
      .page-transition-exit-active {
        opacity: 0;
        transition: opacity ${TIMEOUT}ms;
      }
    `}</style>
  </>
)

export default withRedux(reduxStore)(OctopiApp);