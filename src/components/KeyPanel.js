import { Form, Input, Button, Typography } from 'antd';

const { Text } = Typography;

const sampleListenKey = '2rPmgQHpbQbWnhEegELAyv3AafVOYptiUr0A8VmGXvf4WLaVAI6w6k6OEmSV';

function KeyPanel() {
  return (
    <>
      <Form>
        <Form.Item
          label="API key"
          name="apiKey"
        >
          <Input/>
        </Form.Item>
        <Form.Item
          label="Secret key"
          name="secretKey"
        >
          <Input.Password/>
        </Form.Item>
        <Form.Item>
          <Button type="primary">Generate Listen Key</Button>
        </Form.Item>
      </Form>
      <Text strong>Listen Key</Text>
      {sampleListenKey && <Text keyboard>{sampleListenKey}</Text>}
    </>
  );
}
  
export default KeyPanel;