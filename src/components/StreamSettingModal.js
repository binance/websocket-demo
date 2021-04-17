import { useState } from 'react';
import { Select } from 'antd';
import { Modal, Typography } from 'antd';
import { allTypeStreamList, symbols } from '../assets/constants';
import './StreamSettingModal.css';

const { Option } = Select;
const { Text } = Typography;

function StreamSettingModal({
  categoryIndex,
  streamIndex,
  visible,
  onOk,
  onCancel
}) {
  const [code, setCode] = useState('');
  const categoryData = allTypeStreamList[categoryIndex];
  const streamData = categoryData.streamList[streamIndex];
  const onSymbolChange = (value) => {
    let streamCode = streamData.code;
    setCode(streamCode.replace('{symbol}', value));
  };

  return (
  <>
    <Modal
      visible={visible}
      onOk={() => onOk(code)}
      onCancel={onCancel}
    >
      { streamData.attributeList.includes('symbol') && (
        <>
          <Text>Symbol</Text>
          <Select style={{ width: 200 }} onChange={onSymbolChange}>
            {symbols.map(symbol => <Option key={symbol} value={symbol}>{symbol}</Option>)}
          </Select>
        </>
      )}
    </Modal>
  </>
  );
}
export default StreamSettingModal;