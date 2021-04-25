import PropTypes from 'prop-types';
import './SubscriptionPanel.css';

function SubscriptionPanel({ stream = [] }) {
  return (
    <div className="terminal">
      {stream.length ? (
        stream.map((line, index) => <p key={`p-${index}`}>{'>' + line}</p>)
      ) : (
        <p>{'> Subscription Panel'}</p>
      )}
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
