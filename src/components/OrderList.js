import React from 'react';
import '../App.css';

const OrderList = ({ orderList }) => {
  return (
    <div>
      <ul className="items">
        {orderList.map((item, index) => (
        <tr>
          <td key={index}>{item.product}</td>
          <td key={index}>{item.quantity}</td>
        </tr>
        ))}
      </ul>
    </div>
  );
};

export default OrderList;
