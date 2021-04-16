import { Button, Form, Select } from 'antd';
import i18n from '../i18n';
import { streamList } from '../assets/constants';

const { Option } = Select;

function StreamPanel() {
  const children = streamList.map(stream => stream.streamName);
  function handleChange(value) {}
  return (
    <>
      <Form>
        <Form.Item label={i18n.t('label.selectedStream')}>
          <Select
            mode='multiple'
            size='default'
            placeholder={i18n.t('message.selectStream')}
            onChange={handleChange}
            style={{ width: '100%' }}
          >
          {children.map((stream, index) => <Option key={`stream${index}`}>{i18n.t(`streamName.${stream}`)}</Option>)}
          </Select>
        </Form.Item>
        <Form.Item>
          <Button type='primary'>{i18n.t('label.subscribe')}</Button>
        </Form.Item>
      </Form>
    </>
  );
}
  
export default StreamPanel;