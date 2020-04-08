import Head from 'next/head';
import { Layout } from 'antd';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import { PreloadFonts } from './ResourceLinks';
import SidebarMenu from './SidebarMenu';

const PageLayout = ({ children, title }) => {
  // use state hook
  const [sider, setSider] = React.useState({broken: true, collapsed: true});
  // use effect hook
  React.useEffect(() => {
    // scroll document up
    window.scrollTo(0,0);
  }, []); 
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
      <Layout hasSider={true}>
        <Layout.Sider 
          className={'page-sidebar' + (sider.collapsed ? ' collapsed' : '')} 
          theme="dark" 
          width="250"
          breakpoint="xl"
          onBreakpoint={(broken) => setSider({broken: broken, collapsed: broken})}
        >
          <SidebarMenu />
        </Layout.Sider>
        <Layout 
          className="page-layout" 
          onClick={() => setSider({...sider, collapsed: sider.broken && !sider.collapsed || sider.collapsed})}
        >
          <Layout.Header className="page-header">
            {React.createElement(sider.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: (e) => {
                e.stopPropagation();
                setSider({...sider, collapsed: !sider.collapsed});
              }
            })}
            <h2>{title}</h2>
          </Layout.Header>
          <Layout.Content className="page-content">
            {children}
          </Layout.Content>
          <Layout.Footer className="page-footer">
            Estuche Chipi Chipi &copy; HESLAF 2020
          </Layout.Footer>
        </Layout>
      </Layout>
    </div>
  );
}

export default PageLayout;