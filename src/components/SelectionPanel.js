import { Divider } from 'antd';
import { KeyPanel, StreamPanel } from './';

function SelectionPanel({ listenKey, actions }) {
    return (
      <div style={{ padding: '10px' }}>
        <KeyPanel listenKey={listenKey} actions={actions} />
        <Divider orientation="left" plain />
        <StreamPanel/>
      </div>
    );
  }
  
  export default SelectionPanel;
  