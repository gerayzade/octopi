import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const UserMenu = ({ user }) => (
  <div className="page-header_user-menu">
    <Avatar icon={<UserOutlined />} />
    <span>{user.name}</span>
  </div>
)

export default UserMenu;