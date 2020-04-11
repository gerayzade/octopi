import Link from 'next/link';
import { Menu } from 'antd';

const menuItems = [
  {href: '/my/schedule', title: 'My Daily Plan'}, 
  {href: '/my/schedule', title: 'My Boost Page'}, 
  {href: '/my/schedule', title: 'Challenges'}, 
  {href: '/my/schedule', title: 'Mentors'}
];

const SidebarMenu = () => (
  <Menu theme="dark" mode="inline" className="page-sidebar_menu" defaultSelectedKeys={['1']}>
    {menuItems.map((link, i) => (
    <Menu.Item key={i}>
      <Link href={link.href}>
        <a>{link.title}</a>
      </Link>
    </Menu.Item>
    ))}
  </Menu>
)

export default SidebarMenu;