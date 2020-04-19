import  Link from 'next/link';
import { Menu, Dropdown, Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const menuItems = [
  {href: '/my/schedule', title: 'Account Settings'}, 
  {href: '/my/schedule', title: 'Edit Schedule'}
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
      <a href="/api/auth/logout">
        Sign Out
      </a>
    </Menu.Item>
  </Menu>
);

const UserMenu = ({ user }) => (
  <div className="page-header_user-menu">
    <Dropdown overlay={dropdownOverlay}>
      <a href="#0" onClick={e => e.preventDefault()} className="page-header_user-link">
        <span className="user-menu_name hidden-sm">{user.email}</span>
        <Avatar icon={<UserOutlined />} />
      </a>
    </Dropdown>
  </div>
)

export default UserMenu;