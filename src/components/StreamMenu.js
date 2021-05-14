import { useState, useMemo } from 'react';
import { Menu } from 'antd';
import i18n from '../i18n';
import { allMarketStreams } from '@constants';
import { extractCategoryIndex, extractStreamIndex, generateStreamKey } from '@common';
import { StreamSettingModal } from './';
import { extractType } from '../assets/common';
import PropTypes from 'prop-types';

const { SubMenu } = Menu;

function StreamMenu({ actions }) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [indexKey, setIndexKey] = useState('');

  const onClickMenuItem = e => {
    setIndexKey(e.key);
    const key = e.key;
    const type = extractType(key);
    const streamData =
      allMarketStreams[extractCategoryIndex(key)].streamList[extractStreamIndex(key)];
    if (streamData.attributeList.length) {
      setIsModalVisible(true);
    } else {
      actions.selectStream(type, streamData.code);
    }
  };

  const modal = useMemo(() => {
    const handleOk = (type, code) => {
      if (code) actions.selectStream(type, code);
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
        {allMarketStreams.map((streamType, categoryIndex) => {
          return (
            <SubMenu
              title={`${i18n.t(`label.${streamType.type}`)}`}
              key={streamType.type + '-' + categoryIndex}
            >
              {streamType.streamList.map((stream, streamIndex) => {
                return (
                  <Menu.Item key={generateStreamKey(streamType.type, categoryIndex, streamIndex)}>
                    {i18n.t(`streamName.${stream.streamName}`)}
                  </Menu.Item>
                );
              })}
            </SubMenu>
          );
        })}
      </Menu>
      {indexKey && modal}
    </>
  );
}

StreamMenu.propTypes = {
  actions: PropTypes.object
};

export default StreamMenu;
