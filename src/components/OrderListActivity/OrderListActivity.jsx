import './OrderListActivity.css';

export default function OrderListActivity({ order, activeOrder, setActiveOrder }) {
  return (
    <div
      className={`OrderListActivity ${order === activeOrder ? 'selected' : ''}`}
      onClick={() => setActiveOrder(order)}
    >
      <div>
        <div>Order Id: <span className="smaller">{order.orderId}</span></div>
        <div className="smaller">{new Date(order.updatedAt).toLocaleDateString()}</div>
      </div>
      <div className="align-rt">
        {/* <div>{order.orderTotal.toFixed(2)}</div> */}
        {/* <div className="smaller">{order.orderQty} Activity{order.orderQty > 1 ? 'ies' : ''}</div> */}
        <div className="smaller"> {order.orderQty} {order.orderQty === 1 ? 'Activity' : 'Activities'} </div>
      </div>
    </div>
  );
}