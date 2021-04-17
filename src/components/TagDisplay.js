import { Tag, Typography } from 'antd';
import i18n from '../i18n';

const { Title } = Typography;
function TagDisplay({ actions, tags }) {
  return(
  <>
    <Title level={5}>{i18n.t('label.selectedStream')}</Title>
    <div>
      {tags&&tags.map(tag => (<Tag
        closable={true}
        key={tag}
        color="blue"
        onClose={() => actions.removeSelectedStream(tag)}
      >{tag}</Tag>))}
    </div>
  </>
  );
};
export default TagDisplay;