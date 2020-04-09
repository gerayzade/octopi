import { Menu } from 'antd';
import { HomeOutlined } from '@ant-design/icons';

const SidebarMenu = () => (
  <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
    <Menu.Item key="1">
      <HomeOutlined />
      <span>Daily Plan</span>
    </Menu.Item>
  </Menu>
)

export default SidebarMenu;