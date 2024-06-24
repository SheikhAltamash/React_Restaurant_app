import { useEffect, useState } from 'react'
import './App.css'
import ProductList from "./views/ProductList"
import Cart from './views/cart';


function App() {
  const [count, setCount] = useState(0);
  let [showcart, setShowcart] = useState(true);
  let [cardData, setCardData] = useState([]);
  let [countItem, setCountItem] = useState(0);
  let showCart = () => {
    setShowcart(!showcart);
    console.log("clikked")
  }
 
  useEffect(() => {
    let count = 0;
    for (let i of cardData) {
      count += 1;
      
    }
    setCountItem(count);
},[cardData])
  return (
    <>
      <Cart
        showcart={showcart}
        setShowcart={setShowcart}
        showFunc={showCart}
        cardData={cardData}
        countItem={countItem}
      ></Cart>
      <ProductList cardData={cardData} setCardData={setCardData}></ProductList>
    </>
  );
  
}

export default App
