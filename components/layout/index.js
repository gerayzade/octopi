import Head from 'next/head';
import fetch from 'isomorphic-unfetch';
import useSWR from 'swr';
import { Layout } from 'antd';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import { PreloadFonts } from './ResourceLinks';
import SidebarMenu from './SidebarMenu';
import UserMenu from './UserMenu';

const fetcher = url => fetch(url).then(r => r.json());

const PageLayout = ({ children, title }) => {
  const { data: user } = useSWR('/api/user/1', fetcher);
  // use state hook
  const [sider, setSider] = React.useState({broken: true, collapsed: true});
  const toggleCollapse = (collapsed) =>  setSider({...sider, collapsed: collapsed});
  // use effect hook
  React.useEffect(() => {
    // scroll document up
    window.scrollTo(0,0);
    // on/off resize event listener
    const handleResize = () => {
      let screenLg = window.innerWidth < 1200;
      setSider({broken: screenLg, collapsed: screenLg})
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []); 
  return (
    <div className="wrapper">
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* browser tab view */}
        <title>{title ? 'Octopi | ' + title : 'Octopi'}</title>
        <link rel="icon" type="image/png" href="/favicon.png" /> 
        {/* preload assets */}
        <PreloadFonts />
      </Head>
      <Layout hasSider={true}>
        <Layout.Sider className={'page-sidebar' + (sider.collapsed ? ' collapsed' : '')} width="250">
          <div className="page-sidebar_logo">Octopi 🐙</div>
          <SidebarMenu />
        </Layout.Sider>
        <Layout 
          className="page-layout" 
          onClick={() => toggleCollapse(sider.broken && !sider.collapsed || sider.collapsed)}
        >
          <Layout.Header className="page-header">
            {React.createElement(sider.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              onClick: (e) => { e.stopPropagation(); toggleCollapse(!sider.collapsed); }
            })}
            <h2>{title}</h2>
            {user && <UserMenu user={user} />}
          </Layout.Header>
          <Layout.Content className="page-content">
            {children}
          </Layout.Content>
          <Layout.Footer className="page-footer">
            Octopi &copy; HESLAF 2020
          </Layout.Footer>
        </Layout>
      </Layout>
    </div>
  );
}

export default PageLayout;