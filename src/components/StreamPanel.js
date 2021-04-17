import { useState } from 'react';
import { Button, Dropdown, Menu } from 'antd';
import i18n from '../i18n';
import { allTypeStreamList } from '../assets/constants';
import { DownOutlined } from '@ant-design/icons';
import { TagDisplay } from './';
import StreamSettingModal from './StreamSettingModal';

function StreamPanel({ actions, selectedStream }) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [categoryIndex, setCategoryIndex] = useState(0);
  const [streamIndex, setStreamIndex] = useState(0);

  const handleOk = (code) => {
    if (code) actions.selectStream(code);
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const onClickMenuItem = (e) => {
    const index = e.key.indexOf('-');
    setCategoryIndex(e.key.substring(0, index));
    setStreamIndex(e.key.substring(index+1));
    setIsModalVisible(true);
  };
  const menu = (
    <Menu onClick={onClickMenuItem}>
      {allTypeStreamList.map((streamType, categoryIndex) => {
        return (
        <Menu.ItemGroup
          title={`${streamType.type} ${streamType.dataSource}`}
          key={streamType.type + '-' + categoryIndex}
        >
          {streamType.streamList.map((stream, streamIndex) => {
            return (
              <Menu.Item key={`${categoryIndex}-${streamIndex}`}>
                {stream.streamName}
              </Menu.Item>
            );
          })}
        </Menu.ItemGroup>
        )})
      }
    </Menu>
  );

  return (
    <>
      <TagDisplay actions={actions} tags={selectedStream} />
      <div>
        <Dropdown overlay={menu}>
          <span
            className="ant-dropdown-link"
            onClick={e => e.preventDefault()}
          >
            {i18n.t('message.selectStream')} <DownOutlined />
          </span>
        </Dropdown>
      </div>
      <Button type='primary' onClick={() => actions.subscribeMarketStream()}>
        {i18n.t('label.subscribe')}
      </Button>
      <StreamSettingModal
        actions={actions}
        categoryIndex={categoryIndex}
        streamIndex={streamIndex}
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      />
    </>
  );
}
  
export default StreamPanel;