import Head from 'next/head';
import { PreloadFonts } from './ResourceLinks';
import { Layout, Menu } from 'antd';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';

const { Header, Content, Footer, Sider } = Layout;

const PageLayout = ({ children, title }) => {
  React.useEffect(() => {window.scrollTo(0,0)}, []); 
  const [collapsed, toggleCollapse] = React.useState(false);
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
        <Sider className={'page-sidebar' + (collapsed ? ' collapsed' : '')} theme="dark" width="250">
          <div className="logo">Chipi Chipi</div>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">
              <span className="nav-text">{title}</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="page-layout">
          <Header className="page-header">
            {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: () => toggleCollapse(!collapsed),
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