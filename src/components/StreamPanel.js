import { Button, Dropdown } from 'antd';
import i18n from '../i18n';
import { DownOutlined } from '@ant-design/icons';
import { TagDisplay } from './';
import { StreamMenu } from './';

function StreamPanel({ actions, selectedStream }) {
  return (
    <>
      <TagDisplay actions={actions} tags={selectedStream.codes} />
      <div>
        <Dropdown overlay={(<StreamMenu actions={actions} />)} >
          <span >
            {i18n.t('message.selectStream')} <DownOutlined />
          </span>
        </Dropdown>
        <Button type="primary" style={{ margin: '5px' }} onClick={() => actions.subscribeStream()}>
          {i18n.t('label.subscribe')}
        </Button>
      </div>
      
    </>
  );
}

export default StreamPanel;
