import { Alert, Divider } from 'antd';
import i18n from '../i18n';
import { UserStreamPanel, MarketStreamPanel, ErrorBoundary } from './';

function SelectionPanel({ actions, selectedStream }) {
  const descriptions = (
    <>
      <p>{i18n.t('message.restriction1')}</p>
      <p>{i18n.t('message.restriction2')}</p>
    </>
  );
  return (
    <>
      <Alert
        message={i18n.t('label.info')}
        description={descriptions}
        type="info"
        showIcon
        closable
        style={{ marginBottom: '10px' }}
      />
      <ErrorBoundary>
        <UserStreamPanel actions={actions} />
      </ErrorBoundary>
      <Divider orientation="left" plain />
      <ErrorBoundary>
        <MarketStreamPanel actions={actions} selectedStream={selectedStream} />
      </ErrorBoundary>
    </>
  );
}

export default SelectionPanel;
