import Head from 'next/head';
import { PreloadFonts } from './ResourceLinks';
import { Layout, Menu } from 'antd';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';

const { Header, Content, Footer, Sider } = Layout;

const PageLayout = ({ children, title }) => {
  // interactions with sidebar
  const [sider, setSider] = React.useState({broken: false, collapsed: false});
  const collapseSider = (collapsed) => setSider({...sider, collapsed: collapsed});
  const breakSider = (broken) => setSider({...sider, broken: broken});
  // when component first mounted
  React.useEffect(() => {
    // scroll document up
    window.scrollTo(0,0)
    // update state if broken
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
      <Layout>
        <Sider 
          className={'page-sidebar' + (sider.collapsed ? ' collapsed' : '')} 
          theme="dark" 
          width="250"
          breakpoint="xl"
          onBreakpoint={(broken) => setSider({broken: broken, collapsed: broken})}
        >
          <div className="logo">Chipi Chipi</div>
          <Menu className="page-sidebar-menu" theme="dark" defaultSelectedKeys={['1']}>
            <Menu.Item key="1" className="page-sidebar-menu-item">
              <span className="nav-text">{title}</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="page-layout" onClick={() => sider.broken && !sider.collapsed ? collapseSider(true) : null}>
          <Header className="page-header">
            {React.createElement(sider.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: () => {collapseSider(!sider.collapsed)}
            })}
            <h2>{title}</h2>
          </Header>
          <Content className="page-content">
            {children}
          </Content>
          <Footer className="page-footer">
            Estuche Chipi Chipi &copy; HESLAF 2020
          </Footer>
        </Layout>
      </Layout>
    </div>
  );
}

export default PageLayout;