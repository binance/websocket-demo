import { Tag, Typography } from 'antd';
import i18n from '../i18n';
import PropTypes from 'prop-types';

const { Title } = Typography;
function TagDisplay({ actions, tags = [] }) {
  return (
    <>
      <Title level={5}>{i18n.t('label.selectedStream')}</Title>
      <div>
        {tags &&
          tags.map(tag => (
            <Tag
              closable={true}
              key={tag}
              color="blue"
              onClose={() => actions.removeSelectedStream(tag)}
            >
              {tag}
            </Tag>
          ))}
      </div>
    </>
  );
}

TagDisplay.propTypes = {
  actions: PropTypes.object,
  /**
   * stream selected by the user
   */
  tags: PropTypes.arrayOf(PropTypes.string)
};

export default TagDisplay;
