import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUp from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { useState } from "react";
export default function CartData({ item ,badge , setBadgeCount}) {
  let [expandedIndex, setExpandedIndex] = useState(null);
    
  const toggleDetails = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };  return (
    <div className="cart_data">
      <h2>Cart</h2>
      {item.length === 0 && <p>Your cart is empty</p>}
      <ol>
        {item.map((item, index) => (
            <li key={index}>
                <div className="under">
            <h3>
              {item.name}{" "}
              <button
                className="cart_butto"
                onClick={() => toggleDetails(index)}
              >
                {expandedIndex===index? (
                  <KeyboardArrowUp className="down"></KeyboardArrowUp>
                ) : (
                  <KeyboardArrowDownIcon className="down"></KeyboardArrowDownIcon>
                )}
              </button>
                </h3>
                {expandedIndex === index && (
                    <div className={`cart_data_under`}>
                        <p>Oil level :{item.oillevel}</p>
                        <p>Addons : {item.addons}</p>
                        <p>Full Count : {item.fullCount}</p>
                        <p>Half Count : {item.halfCount}</p>
                        <p>Price : {item.totalPrice}</p>
                        </div>)}
                    </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
