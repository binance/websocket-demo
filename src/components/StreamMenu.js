import { useState, useMemo } from 'react';
import { Menu } from 'antd';
import i18n from '../i18n';
import { allTypeStreamList } from '@constants';
import {
  extractCategoryIndex,
  extractDataSource,
  extractStreamIndex,
  generateStreamKey,
  isUserStream
} from '@common';
import { StreamSettingModal } from './';

function StreamMenu({ actions }) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [indexKey, setIndexKey] = useState('');

  const onClickMenuItem = e => {
    setIndexKey(e.key);
    const key = e.key;
    const dataSource = extractDataSource(key);
    const streamData =
      allTypeStreamList[extractCategoryIndex(key)].streamList[extractStreamIndex(key)];
    if (streamData.attributeList.length) {
      setIsModalVisible(true);
    } else {
      if (isUserStream(dataSource)) {
        actions.selectUserStream(dataSource);
      } else {
        actions.selectStream(dataSource, streamData.code);
      }
    }
  };

  const menu = useMemo(() => {
    const handleOk = (dataSource, code) => {
      if (code) actions.selectStream(dataSource, code);
      setIsModalVisible(false);
    };

    const handleCancel = () => {
      setIsModalVisible(false);
    };
    return (
      <StreamSettingModal
        indexKey={indexKey}
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      />
    );
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
                  <Menu.Item
                    key={generateStreamKey(streamType.dataSource, categoryIndex, streamIndex)}
                  >
                    {i18n.t(`streamName.${stream.streamName}`)}
                  </Menu.Item>
                );
              })}
            </Menu.ItemGroup>
          );
        })}
      </Menu>
      {indexKey && menu}
    </>
  );
}
export default StreamMenu;
