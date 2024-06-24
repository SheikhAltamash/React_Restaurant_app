import { useEffect, useState } from "react";

export default function Pricing({
  data,
  fullCount,
  halfCount,
  addons,
  setTotalPrice,
}) {

    const fullPlatePrice = data.price1 * fullCount;
    const halfPlatePrice = data.price2 * halfCount;
    const extraAddonCost =addons === "extra cheese" ? fullCount * 20 + halfCount * 10 : 0;
    const serviceFees = data.service;
    const deliveryFees = data.deliveryFees;
    const surcharges = data.surcharge;
    const tax =(fullPlatePrice +halfPlatePrice +extraAddonCost +serviceFees +deliveryFees) *0.09;
    const totalPrice = fullPlatePrice + halfPlatePrice + extraAddonCost + serviceFees + deliveryFees + tax + surcharges;
    const isTotal = Math.floor(totalPrice);

            useEffect(() => {
              setTotalPrice(totalPrice);
            }, [setTotalPrice,data,addons,halfCount,fullCount,totalPrice]);



  return (
      <div>
          <p>Half Plate Price : {data.price1}</p>
      <p>Full Plate Price : {data.price2}</p>
      <p>Service fees : 40</p>
      <p>Delivery Fees :50</p>
      <p>Tax : 9% </p>
      <p>Surcharges : {extraAddonCost}</p>
          <p>Total : {(halfCount  || fullCount) && <span>{isTotal}</span>}  </p>
    </div>
    );
    

}
