import './App.css';
import React, { useState } from 'react';
import OrderForm from './components/OrderForm';
import OrderList from './components/OrderList';


const App = () => {
  const [orderList, setOrderList] = useState([]);
  const [showOrder, setShowOrder] = useState(false);

  const addToOrderList = (product, quantity) => {
    setOrderList([...orderList, { product, quantity }]);
  };
  
  const clearIncompleteRows = () => {
    const filteredList = orderList.filter(item => item.product !== 'Choose Product' && item.quantity !== 'Choose Quantity');
    setOrderList(filteredList);
    setShowOrder(true);
  };

  const readOrder = () => {
    const orderText = orderList.map(item => `${item.product} ${item.quantity}`).join(', ');
    fetch('https://api.voicerss.org/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: new URLSearchParams({
        'key': 'dc1d7d8791f048e0b69b77869996b3f7',
        'src': !orderText?"order List Empty":orderText,
        'hl': 'en-us',
        'r': '0',
        'c': 'mp3',
        'f': '8khz_8bit_mono'
      })
    })
      .then(response => response.blob())
      .then(blob => {
        const audioUrl = URL.createObjectURL(blob);
        const audio = new Audio(audioUrl);
        audio.play();
      })
      .catch(error => console.error('Error:', error));
  };

  return (
    <div className="container">
      <OrderForm addToOrderList={addToOrderList} orderList={orderList} />
      <button onClick={clearIncompleteRows} className="btn">Show Order</button>
      {showOrder && <OrderList orderList={orderList} />}
      <br></br>
      <button onClick={readOrder} className="btn1">What is my Order?</button>
    </div>
  );
}

export default App;
