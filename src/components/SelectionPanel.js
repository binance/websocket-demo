import { Divider } from 'antd';
import { KeyPanel, StreamPanel } from './';

function SelectionPanel() {
    return (
      <>
        <KeyPanel/>
        <Divider orientation="left" plain />
        <StreamPanel/>
      </>
    );
  }
  
  export default SelectionPanel;
  