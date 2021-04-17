import { Tag, Typography } from 'antd';
import i18n from '../i18n';

const { Title } = Typography;
function TagDisplay({ tags }) {
  return(
  <>
    <Title level={5}>{i18n.t('label.selectedStream')}</Title>
    <div>
      {tags&&tags.map(tag => (<Tag key={tag} color="blue">{tag}</Tag>))}
    </div>
  </>
  );
};
export default TagDisplay;