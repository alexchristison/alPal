import { useState, useEffect, useRef } from 'react';
import * as activitiesAPI from '../../utilities/activities-api';
import * as ordersAPI from '../../utilities/orders-api';
import './NewOrderPage.css';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../../components/Logo/Logo';
import MenuList from '../../components/MenuList/MenuList';
import CategoryList from '../../components/CategoryList/CategoryList';
import OrderDetail from '../../components/OrderDetail/OrderDetail';
import UserLogOut from '../../components/UserLogOut/UserLogOut';

export default function NewOrderPage({ user, setUser }) {
  const [menuActivities, setMenuActivities] = useState([]);
  const [activeCat, setActiveCat] = useState('');
  const [cart, setCart] = useState(null);
  const categoriesRef = useRef([]);
  const navigate = useNavigate();

  useEffect(function() {
    async function getActivities() {
      const activities = await activitiesAPI.getAll();
      console.log("activities to check activitiesAPI", activities)
      categoriesRef.current = [...new Set(activities.map(activity => activity.category.name ))];
      setMenuActivities(activities);
      setActiveCat(categoriesRef.current[0]);
    }
    getActivities();

    // Load cart (a cart is the unpaid order for the logged in user)
      async function getCart() {
        const cart = await ordersAPI.getCart();
        setCart(cart);
      }
      getCart();

  }, []);

  /*--- Event Handlers ---*/
  async function handleAddToOrder(activityId) {
    // 1. Call the addItemToCart function in ordersAPI, passing to it the itemId, and assign the resolved promise to a variable named cart.
    const updatedCart = await ordersAPI.addActivityToCart(activityId);
    // 2. Update the cart state with the updated cart received from the server
    setCart(updatedCart);
  }

  async function handleChangeQty(activityId, newQty) {
    const updatedCart = await ordersAPI.setActivityQtyInCart(activityId, newQty);
    setCart(updatedCart);
  }

  async function handleCheckout() {
    await ordersAPI.checkout();
    navigate('/orders');
  }

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
            handleAddToOrder={handleAddToOrder}
          />
          <OrderDetail 
            order={cart}
            handleChangeQty={handleChangeQty}
            handleCheckout={handleCheckout}
          />
        </main>
  );
}



