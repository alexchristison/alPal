import { useState, useEffect, useRef } from 'react';
import * as activitiesAPI from '../../utilities/activities-api';
// import './NewOrderPage.css';
import { Link } from 'react-router-dom';
import Logo from '../../components/Logo/Logo';
import MenuList from '../../components/MenuList/MenuList';
import CategoryList from '../../components/CategoryList/CategoryList';
import OrderDetail from '../../components/OrderDetail/OrderDetail';
import UserLogOut from '../../components/UserLogOut/UserLogOut';

export default function NewOrderPage({ user, setUser }) {
  const [menuActivities, setMenuActivities] = useState([]);
  const [activeCat, setActiveCat] = useState('');
  const categoriesRef = useRef([]);

  useEffect(function() {
    async function getActivities() {
      const activities = await activitiesAPI.getAll();
      console.log("activities to check activitiesAPI", activities)
      categoriesRef.current = [...new Set(activities.map(activity => activity.category.name ))];
      setMenuActivities(activities);
      setActiveCat(categoriesRef.current[0]);
    }
    getActivities();
  }, []);

  return (
    <main className="NewOrderPage">
          <aside>
            <Logo />
            <CategoryList
              categories={categoriesRef.current}
              activeCat={activeCat}
              setActiveCat={setActiveCat}
            />
            <Link to="/orders" className="button btn-sm">PREVIOUS ORDERS</Link>
            <UserLogOut user={user} setUser={setUser} />
          </aside>
          <MenuList
            menuActivities={menuActivities.filter(activity => activity.category.name === activeCat)}
          />
          <OrderDetail />
        </main>
  );
}



