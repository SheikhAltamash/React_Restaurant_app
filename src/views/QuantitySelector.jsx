import { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import Pricing from "./Pricing";
export default function QuantitySelector({
  data,
  addons,
   fullCount,
          setFullCount,
          halfCount,
          setHalfCount,
          setTotalPrice,
          totalPrice,
}) {
  let increase = (name, setname) => {
    setname(name + 1);
  };
  let decrease = (name, setname) => {
    if (name > 0) setname(name - 1);
  };
  return (
    <div>
      <p>
        Full :
        <button
          onClick={() => decrease(fullCount, setFullCount)}
          className="quantity_button"
        >
          <RemoveIcon className="quantity_icon"></RemoveIcon>
        </button>
        {fullCount}
        <button
          onClick={() => increase(fullCount, setFullCount)}
          className="quantity_button"
        >
          <AddIcon className="quantity_icon"></AddIcon>
        </button>{" "}
      </p>
      <p>
        Half :
        <button
          onClick={() => decrease(halfCount, setHalfCount)}
          className="quantity_button"
        >
          <RemoveIcon className="quantity_icon"></RemoveIcon>
        </button>
        {halfCount}
        <button
          onClick={() => increase(halfCount, setHalfCount
          )}
          className="quantity_button"
        >
          <AddIcon className="quantity_icon"></AddIcon>
        </button>{" "}
      </p>
      <Pricing
        data={data}
        fullCount={fullCount}
        halfCount={halfCount}
        addons={addons}
        totalPrice={totalPrice}
        setTotalPrice={setTotalPrice}
      ></Pricing>
    </div>
  );
}
