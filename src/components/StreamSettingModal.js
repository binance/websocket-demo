import { useState } from 'react';
import { Select } from 'antd';
import { Modal, Typography } from 'antd';
import { allTypeStreamList, symbols, intervals, levels } from '../assets/constants';
import './StreamSettingModal.css';

const { Option } = Select;
const { Text } = Typography;
const SYMBOL = 'symbol';
const INTERVAL = 'interval';
const LEVEL = 'levels';

function StreamSettingModal({ categoryIndex, streamIndex, visible, onOk, onCancel }) {
  const categoryData = allTypeStreamList[categoryIndex];
  const streamData = categoryData.streamList[streamIndex];
  const [code, setCode] = useState(streamData.attributeList.length ? '' : streamData.code);
  const applyValue = (code, attributeName, value) => {
    return code.replace(`{${attributeName}}`, value);
  };
  const onAttributeChange = (attribute, value) => {
    let streamCode = code ? code : streamData.code;
    setCode(applyValue(streamCode, attribute, value));
  };
  return (
    <>
      <Modal visible={visible} onOk={() => onOk(code)} onCancel={onCancel}>
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
    </>
  );
}
export default StreamSettingModal;
