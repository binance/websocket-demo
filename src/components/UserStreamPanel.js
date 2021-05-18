import { Form, Input, Button, Select, Typography, notification } from 'antd';
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

  const onClickSubscribe = env => {
    if (!key || !env) {
      return notification['error']({
        message: i18n.t('label.error'),
        description: i18n.t('message.userStreamInput')
      });
    }
    actions.subscribeUserStream(key, env);
  };

  return (
    <>
      <Title level={5}>{i18n.t('label.userStream')}</Title>
      <Form>
        <Form.Item label="API key">
          <Input onChange={handleKeyInput} />
        </Form.Item>
        <Form.Item label="Source">
          <Select placeholder={i18n.t('message.selectStream')} onChange={onSelectChange}>
            {allUserStreams.map(stream => (
              <Option key={stream} value={stream}>
                {i18n.t(`label.${stream}`)}
              </Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item label="Listen Key">{listenKey && <Text keyboard>{listenKey}</Text>}</Form.Item>
      </Form>
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
