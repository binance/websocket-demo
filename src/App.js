import './App.css';
import { Layout } from 'antd';
import { SelectionPanel, SubscriptionPanel } from './components';

const { Sider, Content } = Layout;

function App() {
  return (
    <Layout style={{height: '100vh'}}>
      <Sider theme='light' width={400} className='sider'>
        <SelectionPanel />
      </Sider>
      <Content className='content'>
          <SubscriptionPanel />
      </Content>
    </Layout>
  );
}

export default App;
