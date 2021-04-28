import { useEffect, useState } from 'react';
import { Select } from 'antd';
import { Modal, Form } from 'antd';
import i18n from '../i18n';
import { allTypeStreamList, symbols, futuresSymbols, intervals, levels } from '@constants';
import { extractType, extractCategoryIndex, extractDataSource, extractStreamIndex } from '@common';
import './StreamSettingModal.css';
import PropTypes from 'prop-types';

const { Option } = Select;
const SYMBOL = 'symbol';
const USYMBOL = 'usymbol';
const INTERVAL = 'interval';
const LEVEL = 'levels';

function StreamSettingModal({ indexKey = '', visible = false, onOk, onCancel }) {
  const [type, setType] = useState('');
  const [dataSource, setDataSource] = useState('');
  const [categoryData, setCategoryData] = useState({});
  const [streamData, setStreamData] = useState({ attributeList: [] });
  const [code, setCode] = useState('');
  const [lastAttributeValues, setLastAttributeValues] = useState({});
  useEffect(() => {
    setType(extractType(indexKey));
  }, [indexKey, setType]);
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

  const processSymbolName = (attributeName, value) => {
    return attributeName === SYMBOL || attributeName === USYMBOL ? value.toLowerCase() : value;
  };

  const applyValue = (code, attributeName, value) => {
    value = processSymbolName(attributeName, value);
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
          onOk={() => onOk(type, dataSource, code)}
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
            {streamData.attributeList.includes(USYMBOL) && (
              <Form.Item label="Symbol">
                <Select
                  showSearch
                  style={{ width: 200 }}
                  onChange={value => onAttributeChange(USYMBOL, value)}
                >
                  {futuresSymbols.map(symbol => (
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

StreamSettingModal.propTypes = {
  indexKey: PropTypes.string,
  visible: PropTypes.bool,
  onOk: PropTypes.func,
  onCancel: PropTypes.func
};
export default StreamSettingModal;
