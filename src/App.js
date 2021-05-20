import './App.css';
import { Layout, Select, Typography } from 'antd';
import { SelectionPanel, SubscriptionPanel } from './components';
import { withNamespaces } from 'react-i18next';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import i18n from './i18n';
import actions from './redux/actions';

const { Title } = Typography;
const { Sider, Content, Footer } = Layout;
const { Option } = Select;

function App({ actions, selectedStream, stream, path }) {
  const changeLanguage = language => {
    i18n.changeLanguage(language);
  };
  return (
    <Layout style={{ height: '100vh' }}>
      <Sider theme="light" width={400} className="sider">
        <Title level={3}>Websocket Demo</Title>
        <SelectionPanel actions={actions} selectedStream={selectedStream} />
      </Sider>
      <Content className="content">
        <SubscriptionPanel stream={stream} path={path} selectedStream={selectedStream} />
      </Content>
      <Footer>
        <Select defaultValue="en" style={{ width: 150 }} onChange={v => changeLanguage(v)}>
          <Option value="en">English</Option>
          <Option value="cn">中文</Option>
        </Select>
      </Footer>
    </Layout>
  );
}

const mapStateToProps = state => {
  return {
    selectedStream: state.selectedStream,
    stream: state.stream,
    path: state.path
  };
};

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators({ ...actions }, dispatch)
  };
};

export default withNamespaces()(connect(mapStateToProps, mapDispatchToProps)(App));
