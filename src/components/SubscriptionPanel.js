import './SubscriptionPanel.css';

function SubscriptionPanel({ stream }) {
    return (
      <div className='terminal'>
        {stream.length
          ? stream.map((line, index) => (<p key={`p-${index}`}>{'>'+line}</p>))
          : (<p>{'> Subscription Panel'}</p>)}
      </div>
    );
  }
  
  export default SubscriptionPanel;