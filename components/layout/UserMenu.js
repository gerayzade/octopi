import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const UserMenu = ({ user }) => (
  <div className="page-header_user-menu">
    <span className="user-menu_name hidden-sm">{user.name}</span>
    <Avatar icon={<UserOutlined />} />
  </div>
)

export default UserMenu;