import { useEffect, useState } from 'react';
import { Select } from 'antd';
import { Modal, Typography } from 'antd';
import i18n from '../i18n';
import { allTypeStreamList, symbols, intervals, levels } from '../assets/constants';
import { extractCategoryIndex, extractDataSource, extractStreamIndex } from '../assets/common';
import './StreamSettingModal.css';

const { Option } = Select;
const { Text } = Typography;
const SYMBOL = 'symbol';
const INTERVAL = 'interval';
const LEVEL = 'levels';

function StreamSettingModal({ indexKey, visible, onOk, onCancel }) {
  const [dataSource, setDataSource] = useState('');
  const [categoryData, setCategoryData] = useState({});
  const [streamData, setStreamData] = useState({ attributeList: [] });
  const [code, setCode] = useState('');
  useEffect(() => {
    setDataSource(extractDataSource(indexKey));
  }, [indexKey, setDataSource]);
  useEffect(() => {
    setCategoryData(allTypeStreamList[extractCategoryIndex(indexKey)]);
  }, [indexKey, setCategoryData]);
  useEffect(() => {
    if (categoryData.streamList) {
      setStreamData(categoryData.streamList[extractStreamIndex(indexKey)]);
    }
  }, [indexKey, categoryData, setStreamData]);

  useEffect(() => {
    streamData && setCode(streamData.code);
  }, [setCode, streamData]);

  const applyValue = (code, attributeName, value) => {
    return code.replace(`{${attributeName}}`, value);
  };
  const onAttributeChange = (attribute, value) => {
    setCode(applyValue(code, attribute, value));
  };

  return (
    <>
      {streamData && (
        <Modal
          title={i18n.t(`streamName.${streamData.streamName}`)}
          visible={visible}
          onOk={() => onOk(dataSource, code)}
          onCancel={onCancel}
        >
          {streamData.attributeList.includes(SYMBOL) && (
            <>
              <Text>Symbol</Text>
              <Select style={{ width: 200 }} onChange={value => onAttributeChange(SYMBOL, value)}>
                {symbols.map(symbol => (
                  <Option key={symbol} value={symbol}>
                    {symbol}
                  </Option>
                ))}
              </Select>
            </>
          )}
          {streamData.attributeList.includes(INTERVAL) && (
            <>
              <Text>Interval</Text>
              <Select style={{ width: 200 }} onChange={value => onAttributeChange(INTERVAL, value)}>
                {intervals.map(interval => (
                  <Option key={interval} value={interval}>
                    {interval}
                  </Option>
                ))}
              </Select>
            </>
          )}
          {streamData.attributeList.includes(LEVEL) && (
            <>
              <Text>Level</Text>
              <Select style={{ width: 200 }} onChange={value => onAttributeChange(LEVEL, value)}>
                {levels.map(level => (
                  <Option key={level} value={level}>
                    {level}
                  </Option>
                ))}
              </Select>
            </>
          )}
        </Modal>
      )}
    </>
  );
}
export default StreamSettingModal;
