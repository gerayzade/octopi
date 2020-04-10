import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

const Loader = () => (
  <div className="loader">
    <Spin indicator={<LoadingOutlined style={{ fontSize: 40, color: '#959db4' }} spin />} />
  </div>
)

export default Loader;