// import './MenuList.css';
import MenuListActivity from '../MenuListActivity/MenuListActivity';

export default function MenuList({ menuActivities }) {
  const activities = menuActivities.map(activity =>
    <MenuListActivity
      key={activity._id}
      menuActivity={activity}
    />
  );
  return (
    <main className="MenuList">
      {activities}
    </main>
  );
}