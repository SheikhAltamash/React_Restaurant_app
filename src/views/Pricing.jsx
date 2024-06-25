import { useEffect, useState } from "react";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";

export default function Pricing({
  data,
  fullCount,
  halfCount,
  addons,
  setTotalPrice,
}) {
    
    const fullPlatePrice = data.price2 * fullCount;
    const halfPlatePrice = data.price1 * halfCount;
    const extraAddonCost =addons === "extra cheese" ? fullCount * 20 + halfCount * 10 : 0;
    const serviceFees = 40;
    const deliveryFees = 50;
    const surcharges = data.surcharge;
    const tax =(fullPlatePrice +halfPlatePrice +extraAddonCost +serviceFees +deliveryFees) *0.09;
    const totalPrice = fullPlatePrice + halfPlatePrice + extraAddonCost + serviceFees + deliveryFees + tax + surcharges;
    const isTotal = Math.floor(totalPrice);

            useEffect(() => {
              setTotalPrice(totalPrice);
            }, [setTotalPrice,data,addons,halfCount,fullCount,totalPrice]);



  return (
    <div>
      <p>
        Half Plate Price : {data.price1}{" "}
        <CurrencyRupeeIcon className="rs"></CurrencyRupeeIcon>
      </p>
      <p>
        Full Plate Price : {data.price2}{" "}
        <CurrencyRupeeIcon className="rs"></CurrencyRupeeIcon>
      </p>
      <p>
        Service fees : 40 <CurrencyRupeeIcon className="rs"></CurrencyRupeeIcon>
      </p>
      <p>
        Delivery Fees :50 <CurrencyRupeeIcon className="rs"></CurrencyRupeeIcon>
      </p>
      <p>
        Tax 9% :{" "}
        {(halfCount || fullCount) && (
          <span>
            {Math.floor(tax)}
            <CurrencyRupeeIcon className="rs"></CurrencyRupeeIcon>
          </span>
        )}{" "}
      </p>
      <p>
        Surcharges : {extraAddonCost}{" "}
        <CurrencyRupeeIcon className="rs"></CurrencyRupeeIcon>
      </p>
      <p>
        Total :{" "}
        {(halfCount || fullCount) && (
          <span>
            {isTotal}
            <CurrencyRupeeIcon className="rs"></CurrencyRupeeIcon>
          </span>
        )}{" "}
      </p>
    </div>
  );
    

}
