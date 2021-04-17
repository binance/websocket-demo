import { Divider } from 'antd';
import { KeyPanel, StreamPanel } from './';

function SelectionPanel({ actions, listenKey, selectedStream }) {
    return (
      <div style={{ padding: '10px' }}>
        <KeyPanel listenKey={listenKey} actions={actions} />
        <Divider orientation="left" plain />
        <StreamPanel actions={actions} selectedStream={selectedStream} />
      </div>
    );
  }
  
  export default SelectionPanel;
  