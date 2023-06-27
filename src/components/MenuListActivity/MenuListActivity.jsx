import './MenuListActivity.css';

export default function MenuListActivity({ menuActivity }) {
  return (
    <div className="MenuListActivity">
    <h2 className="name">{menuActivity.name}</h2>   
      <div className="description">{menuActivity.description}</div>
      <div className="choose">
        <span>{menuActivity.duration.toFixed(2)} mins</span>
        <button className="btn-sm" onClick={() => console.log('clicked')}>
          ADD
        </button>
      </div>
    </div>
  );
}