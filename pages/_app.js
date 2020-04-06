import withRedux from 'next-redux-wrapper';
import { Provider } from 'react-redux';
import { PageTransition } from 'next-page-transitions';
import { reduxStore } from '~/store';
import Loader from '~/components/Loader';

import '~/assets/scss/style.scss';

const TIMEOUT = 400;

const App = ({ Component, pageProps, router, store }) => (
  <>
    <Provider store={store}>
      <PageTransition
        timeout={TIMEOUT}
        classNames="page-transition"
        loadingComponent={<Loader />}
        loadingDelay={500}
        loadingTimeout={{ enter: TIMEOUT, exit: 0 }}
        loadingClassNames="loading-indicator"
      >
        <Component {...pageProps} key={router.route} />
      </PageTransition>
    </Provider>
    <style jsx global>{`
      .page-transition-enter {
        opacity: 0;
        transform: translate3d(0, 20px, 0);
      }
      .page-transition-enter-active {
        opacity: 1;
        transform: translate3d(0, 0, 0);
        transition: opacity ${TIMEOUT}ms, transform ${TIMEOUT}ms;
      }
      .page-transition-exit {
        opacity: 1;
      }
      .page-transition-exit-active {
        opacity: 0;
        transition: opacity ${TIMEOUT}ms;
      }
      .loading-indicator-appear,
      .loading-indicator-enter {
        opacity: 0;
      }
      .loading-indicator-appear-active,
      .loading-indicator-enter-active {
        opacity: 1;
        transition: opacity ${TIMEOUT}ms;
      }
    `}</style>
  </>
)


export default withRedux(reduxStore)(App);