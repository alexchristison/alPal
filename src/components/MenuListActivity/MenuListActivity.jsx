// import './MenuListItem.css';

export default function MenuListActivity({ menuActivity }) {
  return (
    <div className="MenuListActivity">
      <div className="description">{menuActivity.description}</div>
      <div className="name">{menuActivity.name}</div>
      <div className="choose">
        <span>{menuActivity.duration.toFixed(2)}</span>
        <button className="btn-sm" onClick={() => console.log('clicked')}>
          ADD
        </button>
      </div>
    </div>
  );
}