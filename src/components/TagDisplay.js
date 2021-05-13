import { Tag } from 'antd';
import PropTypes from 'prop-types';

function TagDisplay({ actions, tags = [] }) {
  return (
    <>
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
