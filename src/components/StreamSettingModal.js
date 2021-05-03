import { useEffect, useState } from 'react';
import { Select } from 'antd';
import { Modal, Form } from 'antd';
import i18n from '../i18n';
import {
  SYMBOL,
  USYMBOL,
  INTERVAL,
  CONTRACT_TYPE,
  PAIR,
  LEVEL,
  allTypeStreamList,
  symbols,
  futuresSymbols,
  intervals,
  levels,
  pairs,
  contractTypes
} from '@constants';
import { extractType, extractCategoryIndex, extractDataSource, extractStreamIndex } from '@common';
import './StreamSettingModal.css';
import PropTypes from 'prop-types';

const { Option } = Select;

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
    return attributeName === SYMBOL || attributeName === USYMBOL || attributeName === PAIR
      ? value.toLowerCase()
      : value;
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

  const renderSelect = (attributeName, labelName, optionList) => {
    return (
      <Form.Item label={labelName}>
        <Select
          showSearch
          style={{ width: 200 }}
          onChange={value => onAttributeChange(attributeName, value)}
        >
          {optionList.map(option => (
            <Option key={option} value={option}>
              {option}
            </Option>
          ))}
        </Select>
      </Form.Item>
    );
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
            {streamData.attributeList.includes(SYMBOL) && renderSelect(SYMBOL, 'Symbol', symbols)}
            {streamData.attributeList.includes(USYMBOL) &&
              renderSelect(USYMBOL, 'Symbol', futuresSymbols)}
            {streamData.attributeList.includes(PAIR) && renderSelect(PAIR, 'Pair', pairs)}
            {streamData.attributeList.includes(CONTRACT_TYPE) &&
              renderSelect(CONTRACT_TYPE, 'Contract Type', contractTypes)}
            {streamData.attributeList.includes(INTERVAL) &&
              renderSelect(INTERVAL, 'Interval', intervals)}
            {streamData.attributeList.includes(LEVEL) && renderSelect(LEVEL, 'Level', levels)}
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
