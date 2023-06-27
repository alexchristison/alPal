import React, { useEffect, useState } from 'react';

export default function OrderHistoryPage() {
  const [orderHistory, setOrderHistory] = useState([]);

  useEffect(() => {
    fetch('/api/orders/history', {
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem('token') // Modify this based on your authentication setup
      }
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else if (response.status === 401) {
          window.location.href = '/login'; // Redirect to login page if the user is not authenticated
        } else {
          throw new Error('Error: ' + response.status);
        }
      })
      .then((data) => setOrderHistory(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      <h1>Order History</h1>
      {orderHistory.map((order) => (
        <div key={order._id}>
          <h2>Order ID: {order._id}</h2>
          {/* Render other order details here */}
        </div>
      ))}
    </>
  );
}
