import  Link from 'next/link';
import { Menu, Dropdown, Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const menuItems = [
  {href: '/my/profile', title: 'Profile'}, 
  {href: '/my/schedule', title: 'Daily plan'}
];

const dropdownOverlay = (
  <Menu>
    {menuItems.map((link, i) => (
      <Menu.Item key={i}>
        <Link href={link.href}>
          <a>{link.title}</a>
        </Link>
      </Menu.Item>
    ))}
    <Menu.Divider />
    <Menu.Item key={menuItems.length}>
      <a href="/logout">
        Logout
      </a>
    </Menu.Item>
  </Menu>
);

const UserMenu = ({ user }) => (
  <div className="page-header_user-menu">
    <Dropdown overlay={dropdownOverlay}>
      <a href="#0" onClick={e => e.preventDefault()} className="page-header_user-link">
        <span className="user-menu_name hidden-sm">{user.name}</span>
        <Avatar icon={<UserOutlined />} />
      </a>
    </Dropdown>
  </div>
)

export default UserMenu;