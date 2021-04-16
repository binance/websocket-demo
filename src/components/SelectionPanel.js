import { Divider } from 'antd';
import { KeyPanel, StreamPanel } from './';

function SelectionPanel() {
    return (
      <div style={{ padding: '10px' }}>
        <KeyPanel/>
        <Divider orientation="left" plain />
        <StreamPanel/>
      </div>
    );
  }
  
  export default SelectionPanel;
  