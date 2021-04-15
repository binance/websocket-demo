import { Dropdown, Menu, Typography, Tag } from 'antd';
import { DownOutlined } from '@ant-design/icons';

const { Text } = Typography;
const tagList = ['stream1', 'stream2', 'stream3'];
function StreamPanel() {
  const menu = (
    <Menu>
      <Menu.Item key='stream1'>Stream 1</Menu.Item>
      <Menu.Item key='stream2'>Stream 2</Menu.Item>
    </Menu>
  );
  return (
    <>
      <Text>Selected Stream</Text>
      {tagList.map((tag, index) => (<Tag closable key={`tag-${index}`}>{tag}</Tag>))}
      <Dropdown overlay={menu}>
        <span>
        Choose a Stream to Subscribe <DownOutlined />
        </span>
      </Dropdown>
    </>
  );
}
  
export default StreamPanel;