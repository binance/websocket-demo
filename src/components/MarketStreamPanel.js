import { message, Button, Dropdown, Typography } from 'antd';
import i18n from '../i18n';
import { DownOutlined } from '@ant-design/icons';
import { isUserStream } from '@common';
import { TESTNET, PROD } from '@constants';
import { TagDisplay } from '.';
import { StreamMenu } from '.';

const { Title } = Typography;

function MarketStreamPanel({ actions, selectedStream, hasKey }) {
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
      <TagDisplay actions={actions} tags={selectedStream.codes} />
      <div>
        <Dropdown overlay={<StreamMenu actions={actions} />}>
          <span>
            {i18n.t('message.selectStream')} <DownOutlined />
          </span>
        </Dropdown>
      </div>
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
