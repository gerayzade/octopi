import Head from 'next/head';
import { PreloadFonts } from './header/ResourceLinks';
import Header from './header';
import Footer from './footer';

const Layout = ({ children, title }) => {
  React.useEffect(() => {window.scrollTo(0,0)}, []); 
  return (
    <div className="wrapper">
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* browser tab view */}
        <title>{title ? 'Chipi Chipi | ' + title : 'Chipi Chipi'}</title>
        <link rel="icon" type="image/png" href="/favicon.png" /> 
        {/* preload assets */}
        <PreloadFonts />
      </Head>
      <Header />
      <main className="content">
        {children}
      </main>
      <Footer />
    </div>
  );
}

export default Layout;