import './MenuListActivity.css';

export default function MenuListActivity({ menuActivity, handleAddToOrder }) {
  return (
    <div className="MenuListActivity">
    <h2 className="name">{menuActivity.name}</h2>   
      <div className="description">{menuActivity.description}</div>
      <div className="choose">
        <span>{menuActivity.duration.toFixed()} mins</span>
        <button className="btn-sm" onClick={() => handleAddToOrder(menuActivity._id)}>
          ADD
        </button>
      </div>
    </div>
  );
}