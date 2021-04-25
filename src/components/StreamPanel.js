import { message, Button, Dropdown } from 'antd';
import i18n from '../i18n';
import { DownOutlined } from '@ant-design/icons';
import { isUserStream } from '@common';
import { TagDisplay } from './';
import { StreamMenu } from './';

function StreamPanel({ actions, selectedStream, hasKey }) {
  const onClickSubscribe = () => {
    if (isUserStream(selectedStream.dataSource) && !hasKey) {
      message.error(i18n.t('message.shouldGetKey'));
    } else {
      actions.subscribeStream();
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
        <Button type="primary" style={{ margin: '5px' }} onClick={onClickSubscribe}>
          {i18n.t('label.subscribe')}
        </Button>
      </div>
    </>
  );
}

export default StreamPanel;
