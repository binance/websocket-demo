import { Typography } from 'antd';
import PropTypes from 'prop-types';
import { useEffect, useRef } from 'react';
import './SubscriptionPanel.css';
import { EMPTY_STR } from '@constants';

const { Title, Text } = Typography;
function SubscriptionPanel({ stream = [], path = EMPTY_STR, selectedStream = {} }) {
  const divRef = useRef();
  useEffect(() => {
    divRef.current.scrollIntoView({ behavior: 'smooth', block: 'end' });
  }, [stream]);
  return (
    <>
      <Title level={5}>PATH: {path && <Text keyboard>{path}</Text>}</Title>
      <div className="terminal">
        {stream.length ? (
          stream.map((line, index) => <p key={`p-${index}`}>{'>' + line}</p>)
        ) : (
          <p>{'> Subscription Panel'}</p>
        )}
        <div ref={divRef}></div>
      </div>
    </>
  );
}

SubscriptionPanel.propTypes = {
  /**
   * messages sent from server side
   */
  stream: PropTypes.arrayOf(PropTypes.string),
  path: PropTypes.string,
  selectedStream: PropTypes.object
};

export default SubscriptionPanel;
