import { Alert, Divider } from 'antd';
import i18n from '../i18n';
import { UserStreamPanel, MarketStreamPanel } from './';

function SelectionPanel({ actions, listenKey, selectedStream }) {
  const description = (
    <>
      <p>{i18n.t('message.restriction1')}</p>
      <p>{i18n.t('message.restriction2')}</p>
    </>
  );
  return (
    <>
      <Alert
        message={i18n.t('label.info')}
        description={description}
        type="info"
        showIcon
        closable
        style={{ marginBottom: '10px' }}
      />
      <UserStreamPanel listenKey={listenKey} actions={actions} />
      <Divider orientation="left" plain />
      <MarketStreamPanel actions={actions} selectedStream={selectedStream} hasKey={!!listenKey} />
    </>
  );
}

export default SelectionPanel;
