import { useState, useMemo } from 'react';
import { Menu } from 'antd';
import i18n from '../i18n';
import { allMarketStreams } from '@constants';
import { extractStreamIndex, generateStreamKey } from '@common';
import { StreamSettingModal } from './';
import PropTypes from 'prop-types';

function StreamMenu({ actions, type }) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [indexKey, setIndexKey] = useState('');
  const [streams, setStreams] = useState([]);

  useMemo(() => {
    const marketStreamType = allMarketStreams.find(streamType => streamType.type === type);
    setStreams(marketStreamType.streamList);
  }, [setStreams, type]);

  const onClickMenuItem = e => {
    setIndexKey(e.key);
    const key = e.key;
    const streamData = streams[extractStreamIndex(key)];
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
        {streams.map((stream, index) => {
          return (
            <Menu.Item key={generateStreamKey(type, index)}>
              {i18n.t(`streamName.${stream.streamName}`)}
            </Menu.Item>
          );
        })}
      </Menu>
      {indexKey && modal}
    </>
  );
}

StreamMenu.propTypes = {
  actions: PropTypes.object,
  type: PropTypes.string
};

export default StreamMenu;
