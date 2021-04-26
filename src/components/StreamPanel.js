import { message, Button, Dropdown } from 'antd';
import i18n from '../i18n';
import { DownOutlined } from '@ant-design/icons';
import { isUserStream } from '@common';
import { TESTNET, PROD } from '@constants';
import { TagDisplay } from './';
import { StreamMenu } from './';

function StreamPanel({ actions, selectedStream, hasKey }) {
  const onClickSubscribe = env => {
    if (isUserStream(selectedStream.dataSource) && !hasKey) {
      message.error(i18n.t('message.shouldGetKey'));
    } else {
      actions.subscribeStream(env);
    }
  };
  return (
    <>
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

export default StreamPanel;
