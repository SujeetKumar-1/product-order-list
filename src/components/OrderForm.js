import React, { useState } from 'react';
import '../App.css';

const OrderForm = ({ addToOrderList, orderList }) => {
  const [product, setProduct] = useState('Choose Product');
  const [quantity, setQuantity] = useState('Choose Quantity');

  const handleAdd = () => {
    if (product === 'Choose Product' || quantity === 'Choose Quantity') {
      alert('Please choose both a product and a quantity');
      return;
    }
    addToOrderList(product, quantity);
    setProduct('Choose Product');
    setQuantity('Choose Quantity');
  };

  return (
    <div>
      <h2>Add Products</h2>
      <hr></hr>
      {orderList.length < 8 && (
        <div className="row">
          <select value={product} onChange={(e) => setProduct(e.target.value)}>
            <option>Choose Product</option>
            <option>Pencil</option>
            <option>Eraser</option>
            <option>Pens</option>
          </select>
          <select value={quantity} onChange={(e) => setQuantity(e.target.value)}>
            <option>Choose Quantity</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
          <button onClick={handleAdd}>ADD</button>
        </div>
      )}
    </div>
  );
};

export default OrderForm;
