import PropTypes from 'prop-types';
import { useEffect, useRef } from 'react';
import './SubscriptionPanel.css';

function SubscriptionPanel({ stream = [] }) {
  const divRef = useRef();
  useEffect(() => {
    divRef.current.scrollIntoView({ behavior: 'smooth', block: 'end' });
  }, [stream]);
  return (
    <div className="terminal">
      {stream.length ? (
        stream.map((line, index) => <p key={`p-${index}`}>{'>' + line}</p>)
      ) : (
        <p>{'> Subscription Panel'}</p>
      )}
      <div ref={divRef}></div>
    </div>
  );
}

SubscriptionPanel.propTypes = {
  /**
   * messages sent from server side
   */
  stream: PropTypes.arrayOf(PropTypes.string)
};

export default SubscriptionPanel;
