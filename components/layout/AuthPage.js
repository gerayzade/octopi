import Link from 'next/link';
import { Layout } from 'antd';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import Loader from '../common/Loader';
import SidebarMenu from './SidebarMenu';
import UserMenu from './UserMenu';
import PageHead from './PageHead';

const AuthPage = ({ children, title, user }) => {
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
  return user?.id ? (
    <div className="wrapper">
      <PageHead title={title} />
      <Layout hasSider={true}>
        <Layout.Sider className={'page-sidebar' + (sider.collapsed ? ' collapsed' : '')} width="250">
          <div className="page-sidebar_logo">
            <Link href="/my/schedule">
              <img src="/img/logo.png" alt="Octopi" />
            </Link>
          </div>
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
            <h2><strong>{user && user.name.split(' ')[0]}'s</strong> {title}</h2>
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
  ) : <Loader />;
}

export default AuthPage;