import { Layout } from 'antd';
import Loader from '~/components/common/Loader';
import PageHead from './PageHead';

const GuestPage = ({ children, title, isLoggedIn }) => {
  return !isLoggedIn ? (
    <div className="wrapper">
      <PageHead title={title} />
      <Layout className="page-layout">
        <Layout.Content className="page-content login">
          {children}
        </Layout.Content>
      </Layout>
    </div>
  ) : <Loader/>;
}

export default GuestPage;