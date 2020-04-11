import Link from 'next/link';
import { useRouter } from 'next/router';
import { Menu } from 'antd';

const menuItems = [
  {href: '/my/schedule', title: 'My Daily Plan'}, 
  {href: '/my/courses', title: 'My Boost Page'}, 
  {href: '/my/schedule', title: 'Challenges'}, 
  {href: '/my/schedule', title: 'Mentors'}
];

const SidebarMenu = () => {
  const router = useRouter();
  const getSelectedKey = [`${menuItems.findIndex(item => item.href === router.pathname)}`]
  return (
    <Menu 
      theme="dark" 
      mode="inline" 
      className="page-sidebar_menu" 
      defaultSelectedKeys={getSelectedKey}
    >
      {menuItems.map((link, i) => (
      <Menu.Item key={i}>
        <Link href={link.href}>
          <a>{link.title}</a>
        </Link>
      </Menu.Item>
      ))}
    </Menu>
  )
}

export default SidebarMenu;