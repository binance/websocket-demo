import { Divider } from 'antd';
import { KeyPanel, StreamPanel } from './';

function SelectionPanel({ actions, listenKey, selectedStream }) {
  return (
    <>
      <KeyPanel listenKey={listenKey} actions={actions} />
      <Divider orientation="left" plain />
      <StreamPanel actions={actions} selectedStream={selectedStream} />
    </>
  );
}

export default SelectionPanel;
