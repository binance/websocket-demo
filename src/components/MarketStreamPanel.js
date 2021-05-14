import { useState } from 'react';
import { message, Button, Form, Dropdown, Select, Typography } from 'antd';
import i18n from '../i18n';
import { DownOutlined } from '@ant-design/icons';
import { isUserStream } from '@common';
import { TESTNET, PROD, allMarketStreams } from '@constants';
import { TagDisplay } from '.';
import { StreamMenu } from '.';

const { Title } = Typography;
const { Option } = Select;

function MarketStreamPanel({ actions, selectedStream, hasKey }) {
  const [type, setType] = useState('');
  const onSelectChange = value => {
    setType(value);
    actions.removeAllSelectedStream();
  };
  const onClickSubscribe = env => {
    if (isUserStream(selectedStream.dataSource) && !hasKey) {
      message.error(i18n.t('message.shouldGetKey'));
    } else {
      actions.subscribeMarketStream(env);
    }
  };
  return (
    <>
      <Title level={5}>{i18n.t('label.marketStream')}</Title>
      <Form>
        <Form.Item label="Source">
          <Select placeholder={i18n.t('message.selectStream')} onChange={onSelectChange}>
            {allMarketStreams.map(streamType => (
              <Option key={streamType.type} value={streamType.type}>
                {i18n.t(`label.${streamType.type}`)}
              </Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item label="Streams">
          <Dropdown overlay={type && <StreamMenu actions={actions} type={type} />}>
            <span>
              {i18n.t('message.selectStream')} <DownOutlined />
            </span>
          </Dropdown>
          <TagDisplay actions={actions} tags={selectedStream.codes} />
        </Form.Item>
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

export default MarketStreamPanel;
