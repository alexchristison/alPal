import './MenuList.css';
import MenuListActivity from '../MenuListActivity/MenuListActivity';

export default function MenuList({ menuActivities, handleAddToOrder }) {
  const activities = menuActivities.map(activity =>
    <MenuListActivity
      key={activity._id}
      menuActivity={activity}
      handleAddToOrder={handleAddToOrder}
    />
  );
  return (
    <main className="MenuList">
      {activities}
    </main>
  );
}