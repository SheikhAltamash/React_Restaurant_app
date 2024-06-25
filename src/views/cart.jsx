import RestaurantIcon from "@mui/icons-material/Restaurant";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CartData from "./cartData";
import Badge from "@mui/material/Badge";
import { useState } from "react";

export default function Cart({
  showcart,
  setShowcart,
  showFunc,
  cardData,
  countItem 
}) {

  return (
    <div className="nav">
      <div className="name">
        <RestaurantIcon className="rest-Logo"></RestaurantIcon>
        <h2 className="cart_h1">Zamzam Restaurant</h2>
      </div>
      <Badge badgeContent={countItem} color="success" className="badge">
        <button onClick={showFunc} className="cart_button">
          {" "}
          <ShoppingCartIcon
            style={{ color: "white" }}
            className="cart"
          ></ShoppingCartIcon>
        </button>
      </Badge>

      {showcart == true && (
        <CartData
          item={cardData}
          
        ></CartData>
      )}
    </div>
  );
}
