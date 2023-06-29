import './OrderDetail.css';
import LineActivity from '../LineActivity/LineActivity';

// Used to display the activities of any order, including the cart (unpaid order)
export default function OrderDetail({ order, handleChangeQty, handleCheckout }) {
  if (!order) return null;

  const lineActivities = order.lineActivities.map(activity =>
    <LineActivity
      lineActivity={activity}
      isPaid={order.isPaid}
      handleChangeQty={handleChangeQty}
      key={activity._id}
    />
  );

  return (
    <div className="OrderDetail">
      <div className="section-heading">
        {order.isPaid ?
          <span>ORDER <span className="smaller">{order.orderId}</span></span>
          :
          <span>NEW ORDER</span>
        }
        <span>{new Date(order.updatedAt).toLocaleDateString()}</span>
      </div>
      <div className="line-activity-container flex-ctr-ctr flex-col scroll-y">
        {lineActivities.length ?
          <>
            {lineActivities}
            <section className="total">
              {order.isPaid ?
                <span className="right">TOTAL&nbsp;&nbsp;</span>
                :
                <button
                  className="btn-sm"
                  onClick={handleCheckout}
                  disabled={!lineActivities.length}
                >book alPal</button>
              }
              <span>{order.totalQty}</span>
              <span className="right">{order.orderTotal.toFixed(2)} mins total </span>
            </section>
          </>
          :
          <div className="bored">Bored AF?</div>
        }
      </div>
    </div>
  );
}
