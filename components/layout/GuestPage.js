import { Layout } from 'antd';
import Loader from '../common/Loader';
import PageHead from './PageHead';

const GuestPage = ({ children, title, user }) => {
  return user === null ? (
    <div className="wrapper">
      <PageHead title={title} />
      <Layout className="page-layout dark">
        <Layout.Content className="page-content centered login">
          {children}
        </Layout.Content>
      </Layout>
    </div>
  ) : <Loader />
}

export default GuestPage;