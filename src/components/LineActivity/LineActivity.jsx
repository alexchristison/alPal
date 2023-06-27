import './LineActivity.css';

export default function LineActivity({ lineActivity, isPaid }) {
  return (
    <div className="LineActivity">
      <div className="flex-ctr-ctr">{lineActivity.activity.description}</div>
      <div className="flex-ctr-ctr flex-col">
        <span className="align-ctr">{lineActivity.activity.name}</span>
        <span>{lineActivity.activity.duration.toFixed(2)}</span>
      </div>
      <div className="qty" style={{ justifyContent: isPaid && 'center' }}>
        {!isPaid &&
          <button
            className="btn-xs"
            onClick={() => alert('clicked')}
          >−</button>
        }
        <span>{lineActivity.qty}</span>
        {!isPaid &&
          <button
            className="btn-xs"
            onClick={() => alert('clicked')}
          >+</button>
        }
      </div>
      <div className="ext-price">${lineActivity.extDuration.toFixed(2)}</div>
    </div>
  );
}