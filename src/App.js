import './App.css';
import { Layout, Select } from 'antd';
import { SelectionPanel, SubscriptionPanel } from './components';
import { withNamespaces } from 'react-i18next';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import i18n from './i18n';
import actions from './redux/actions';

const { Sider, Content, Footer } = Layout;
const { Option } = Select;

function App({ actions, listenKey, selectedStream, stream }) {
  const changeLanguage = language => {
    i18n.changeLanguage(language);
  };
  return (
    <Layout style={{ height: '100vh' }}>
      <Sider theme="light" width={400} className="sider" style={{ height: '100%' }}>
        <SelectionPanel listenKey={listenKey} actions={actions} selectedStream={selectedStream} />
        <Footer style={{ position: 'sticky', bottom: '0' }}>
          <Select defaultValue="en" style={{ width: 120 }} onChange={v => changeLanguage(v)}>
            <Option value="en">English</Option>
            <Option value="cn">中文</Option>
          </Select>
        </Footer>
      </Sider>
      <Content className="content">
        <SubscriptionPanel stream={stream} />
      </Content>
    </Layout>
  );
}

const mapStateToProps = state => {
  return {
    listenKey: state.listenKey,
    selectedStream: state.selectedStream,
    stream: state.stream
  };
};

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators({ ...actions }, dispatch)
  };
};

export default withNamespaces()(connect(mapStateToProps, mapDispatchToProps)(App));
