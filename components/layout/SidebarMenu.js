import { Menu } from 'antd';
import { 
  HomeOutlined 
} from '@ant-design/icons';

const SidebarMenu = () => (
  <div className="page-sidebar_menu">
    <div className="page-sidebar_menu-logo">Chipi Chipi</div>
    <Menu className="page-sidebar_menu-list" theme="dark" defaultSelectedKeys={['1']}>
      <Menu.Item className="page-sidebar_menu-item" title="" key="1">
        <HomeOutlined />
        <span>Daily Plan</span>
      </Menu.Item>
    </Menu>
  </div>
)

export default SidebarMenu;