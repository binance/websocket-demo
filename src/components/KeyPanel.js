import { Form, Input, Button, Typography } from 'antd';
import i18n from '../i18n';
import { useState } from 'react';

const { Text, Title } = Typography;

function KeyPanel({ listenKey, actions }) {
  const [key, setKey] = useState('');
  const handleKeyInput = e => {
    setKey(e.target.value);
  };

  return (
    <>
      <Form>
        <Form.Item label="API key" name="apiKey">
          <Input onChange={handleKeyInput} />
        </Form.Item>
        <Form.Item>
          <Button type="primary" onClick={() => actions.generateSpotUserStreamKey(key)}>
            {i18n.t('label.generateKey')}
          </Button>
        </Form.Item>
      </Form>
      <Title level={5}>Listen Key</Title>
      {listenKey && <Text keyboard>{listenKey}</Text>}
    </>
  );
}

export default KeyPanel;
