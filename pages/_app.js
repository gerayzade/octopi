import App from 'next/app';
import { Provider } from 'react-redux';
import { PageTransition } from 'next-page-transitions';
import withRedux from 'next-redux-wrapper';
import reduxStore from '~/store';
import { updateAuth } from '~/store/actions';
import Loader from '~/components/common/Loader';

import '~/assets/less/main.less';

const TIMEOUT = 400;
const LAYOUT = '.page-layout';

const OctopiApp = ({ Component, pageProps, router, store }) => {
  React.useEffect(() => {
    const tokenExists = !!(localStorage.getItem('octoPI') || sessionStorage.getItem('octoPI'));
    // update store
    store.dispatch(updateAuth(tokenExists));
    // redirects
    tokenExists && (router.pathname === '/login' || router.pathname === '/') && router.push('/my/schedule');
    !tokenExists && router.pathname !== '/login' && router.push('/login');
  }, []);
  
  return (
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
    </>
  )
}

OctopiApp.getInitialProps = async (appContext) => {
  const appProps = await App.getInitialProps(appContext);
  return { ...appProps }
}

export default withRedux(reduxStore)(OctopiApp);