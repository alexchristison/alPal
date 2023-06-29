import './OrderList.css';
import OrderListActivity from '../OrderListActivity/OrderListActivity';

export default function OrderList({ orders, activeOrder, setActiveOrder }) {

  const orderList = orders.map(order => <OrderListActivity
    order={order}
    activeOrder={activeOrder}
    setActiveOrder={setActiveOrder}
    key={order.id}
  />);

  return (
    <main className={`OrderList ${orders.length ? '' : 'no-orders'}`}>
      {orderList}
    </main>
  );
} 