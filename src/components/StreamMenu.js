import { useState, useMemo } from 'react';
import { Menu } from 'antd';
import i18n from '../i18n';
import { allTypeStreamList } from '../assets/constants';
import { StreamSettingModal } from './';

function StreamMenu({ actions }) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [indexKey, setKey] = useState('');

  const onClickMenuItem = e => {
    setKey(e.key);
    setIsModalVisible(true);
  };

  const menu = useMemo(() => {
    const handleOk = (dataSource, code) => {
      if (dataSource === 'user') actions.selectUserStream(dataSource);
      else if (code) actions.selectStream(dataSource, code);   
      setIsModalVisible(false);
    };
  
    const handleCancel = () => {
      setIsModalVisible(false);
    };
    return (<StreamSettingModal
      indexKey={indexKey}
      visible={isModalVisible}
      onOk={handleOk}
      onCancel={handleCancel}
    />)
  }, [actions, indexKey, isModalVisible]);

  return (
  <>
    <Menu onClick={onClickMenuItem}>
      {allTypeStreamList.map((streamType, categoryIndex) => {
        return (
          <Menu.ItemGroup
            title={`${streamType.type} ${streamType.dataSource}`}
            key={streamType.type + '-' + categoryIndex}
          >
            {streamType.streamList.map((stream, streamIndex) => {
              return (
                <Menu.Item key={`${streamType.dataSource}::${categoryIndex}-${streamIndex}`}>
                  {i18n.t(`streamName.${stream.streamName}`)}
                </Menu.Item>
              );
            })}
          </Menu.ItemGroup>
        );
      })}
    </Menu>
    {indexKey && menu}
  </>);
}
export default StreamMenu;