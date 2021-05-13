import { Form, Input, Button, Select, Typography } from 'antd';
import i18n from '../i18n';
import { useState } from 'react';
import { TESTNET, PROD, allUserStreams } from '@constants';

const { Text, Title } = Typography;
const { Option } = Select;

function UserStreamPanel({ listenKey, actions }) {
  const [key, setKey] = useState('');
  const handleKeyInput = e => {
    setKey(e.target.value);
  };

  const onSelectChange = value => {
    actions.selectUserStream(value);
  };

  const onClickSubscribe = async env => {
    actions.subscribeUserStream(key, env);
  };

  return (
    <>
      <Title level={5}>{i18n.t('label.userStream')}</Title>
      <Form>
        <Form.Item label="API key" name="apiKey">
          <Input onChange={handleKeyInput} />
        </Form.Item>
        <Form.Item label="Source" name="source">
          <Select placeholder={i18n.t('message.selectStream')} onChange={onSelectChange}>
            {allUserStreams.map(stream => (
              <Option key={stream.type} value={stream.type}>
                {i18n.t(`label.${stream.type}`)}
              </Option>
            ))}
          </Select>
        </Form.Item>
      </Form>
      <Title level={5}>Listen Key</Title>
      {listenKey && (
        <div>
          <Text keyboard>{listenKey}</Text>
        </div>
      )}
      <Button type="default" style={{ margin: '5px' }} onClick={() => onClickSubscribe(TESTNET)}>
        {i18n.t('label.testSubscribe')}
      </Button>
      <Button type="primary" style={{ margin: '5px' }} onClick={() => onClickSubscribe(PROD)}>
        {i18n.t('label.prodSubscribe')}
      </Button>
    </>
  );
}

export default UserStreamPanel;
