import { useEffect, useState } from 'react';
import { Select } from 'antd';
import { Modal, Form } from 'antd';
import i18n from '../i18n';
import { allTypeStreamList, symbols, intervals, levels } from '../assets/constants';
import { extractCategoryIndex, extractDataSource, extractStreamIndex } from '../assets/common';
import './StreamSettingModal.css';

const { Option } = Select;
const SYMBOL = 'symbol';
const INTERVAL = 'interval';
const LEVEL = 'levels';

function StreamSettingModal({ indexKey, visible, onOk, onCancel }) {
  const [dataSource, setDataSource] = useState('');
  const [categoryData, setCategoryData] = useState({});
  const [streamData, setStreamData] = useState({ attributeList: [] });
  const [code, setCode] = useState('');
  const [lastAttributeValues, setLastAttributeValues] = useState({});
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
    const newCode = code.match(`{${attributeName}}`)
      ? code.replace(`{${attributeName}}`, value)
      : code.replace(`${lastAttributeValues[attributeName]}`, value);
    lastAttributeValues[attributeName] = value;
    setLastAttributeValues(lastAttributeValues);
    return newCode;
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
          <Form>
            {streamData.attributeList.includes(SYMBOL) && (
              <Form.Item label="Symbol">
                <Select
                  showSearch
                  style={{ width: 200 }}
                  onChange={value => onAttributeChange(SYMBOL, value)}
                >
                  {symbols.map(symbol => (
                    <Option key={symbol} value={symbol}>
                      {symbol}
                    </Option>
                  ))}
                </Select>
              </Form.Item>
            )}
            {streamData.attributeList.includes(INTERVAL) && (
              <Form.Item label="Interval">
                <Select
                  style={{ width: 200 }}
                  onChange={value => onAttributeChange(INTERVAL, value)}
                >
                  {intervals.map(interval => (
                    <Option key={interval} value={interval}>
                      {interval}
                    </Option>
                  ))}
                </Select>
              </Form.Item>
            )}
            {streamData.attributeList.includes(LEVEL) && (
              <Form.Item label="Level">
                <Select style={{ width: 200 }} onChange={value => onAttributeChange(LEVEL, value)}>
                  {levels.map(level => (
                    <Option key={level} value={level}>
                      {level}
                    </Option>
                  ))}
                </Select>
              </Form.Item>
            )}
          </Form>
        </Modal>
      )}
    </>
  );
}
export default StreamSettingModal;
