import './App.css';
import { Layout, Select } from 'antd';
import { SelectionPanel, SubscriptionPanel } from './components';
import { withNamespaces } from 'react-i18next';
import i18n from './i18n';

const { Sider, Content, Footer } = Layout;
const { Option } = Select;

function App() {
  const changeLanguage = language => {
    i18n.changeLanguage(language);
  }
  return (
    <Layout style={{height: '100vh'}}>
        <Sider theme='light' width={400} className='sider' style={{height: '100%'}}>
          <SelectionPanel />
          <Footer style={{ position: "sticky", bottom: "0" }}>
            <Select defaultValue="en" style={{ width: 120 }} onChange={v => changeLanguage(v)}>
              <Option value="en">English</Option>
              <Option value="cn">中文</Option>
            </Select>
          </Footer>
        </Sider> 
      <Content className='content'>
          <SubscriptionPanel />
      </Content>
    </Layout>
  );
}

export default withNamespaces()(App);
