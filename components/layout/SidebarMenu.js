import Link from 'next/link';
import { useRouter } from 'next/router';
import { Menu } from 'antd';

const menuItems = [
  {href: '/my/schedule', title: 'Daily Plan'}, 
  {href: '/my/courses', title: 'Boost Page'}, 
  {href: '/my/challenges', title: 'Challenges'}, 
  {href: '/my/mentors', title: 'Mentors'}
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