import './LineActivity.css';

export default function LineActivity({ lineActivity, isPaid, handleChangeQty }) {
  return (
    <div className="LineActivity">
      {/* <div className="flex-ctr-ctr">{lineActivity.activity.description}</div> */}
      <div className="CategoryList"></div>
      <div className="flex-ctr-ctr flex-col">
        <span className="align-ctr">{lineActivity.activity.name}</span>
        {/* <span>{lineActivity.activity.duration.toFixed(2)}</span> */}
      </div>
      <div className="qty" style={{ justifyContent: isPaid && 'center' }}>
        {!isPaid &&
          <button
            className="btn-xs"
            onClick={() => handleChangeQty(lineActivity.activity._id, lineActivity.qty - 1)}
          >−</button>
        }
        <span>{lineActivity.qty}</span>
        {!isPaid &&
          <button
            className="btn-xs"
            onClick={() => handleChangeQty(lineActivity.activity._id, lineActivity.qty + 1)}
          >+</button>
        }
      </div>
      <div className="ext-duration">{lineActivity.extDuration.toFixed(0)} mins </div>
    </div>
  );
}