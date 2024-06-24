import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import QuantitySelector from "./QuantitySelector";
import Button from "@mui/material/Button";
import CloseIcon from "@mui/icons-material/Close";
export default function OptionSelector({
  data,
  isopen,
  onclose,
  spicyLevel,
  setSpicyLevel,
  oilLevel,
  setOilLevel,
  addons,
  setAddons,
  fullCount,
  setFullCount,
  halfCount,
  setHalfCount,
  addTocart,
  name, setName
  
}) {
  let close = () => {
    onclose();
  };
  const [totalPrice, setTotalPrice] = useState(0);
  const handleChange = (e, setState) => {
    setState(e.target.value);
  };

  const submit = (e) => {
    e.preventDefault();
  
  };
  const addCartData = () => {
      addTocart({
        spicyLevel,
        oilLevel,
        addons,
        fullCount,
        halfCount,
        name: data.name,
        totalPrice,
      });
    try {
        
    }
    catch (e) {
      console.log(e);
    }
  }

  return (
    <div className={`options ${isopen ? "visible" : "hidden"}`}>
      <button onClick={close} className="close_icon_button">
        <CloseIcon className="close_icon"></CloseIcon>
      </button>
      <h2>{data.name}</h2>
      <form onSubmit={submit}>
        <div className="div">
          <FormControl fullWidth margin="normal" className="option_from">
            <InputLabel id="spicy-level-label">Spicy Level</InputLabel>
            <Select
              labelId="spicy-level-label"
              id="spicy-level"
              value={spicyLevel}
              label="Spicy Level"
              onChange={(e) => handleChange(e, setSpicyLevel)}
            >
              <MenuItem value="spicy">Spicy</MenuItem>
              <MenuItem value="mid spicy">Mid Spicy</MenuItem>
              <MenuItem value="less spicy">Less Spicy</MenuItem>
            </Select>
          </FormControl>

          <FormControl fullWidth margin="normal" className="option_from">
            <InputLabel id="oil-level-label">Oil Level</InputLabel>
            <Select
              labelId="oil-level-label"
              id="oil-level"
              value={oilLevel}
              label="Oil Level"
              onChange={(e) => handleChange(e, setOilLevel)}
            >
              <MenuItem value="less oil">Less Oil</MenuItem>
              <MenuItem value="oily">Oily</MenuItem>
            </Select>
          </FormControl>

          <FormControl fullWidth margin="normal" className="option_from">
            <InputLabel id="addons-label">Addons</InputLabel>
            <Select
              labelId="addons-label"
              id="addons"
              value={addons}
              label="Addons"
              onChange={(e) => handleChange(e, setAddons)}
            >
              <MenuItem value="no addons">No Addons</MenuItem>
              <MenuItem value="extra cheese">Extra Cheese</MenuItem>
            </Select>
          </FormControl>
        </div>
        <QuantitySelector
          data={data}
          addons={addons}
          fullCount={fullCount}
          setFullCount={setFullCount}
          halfCount={halfCount}
          setHalfCount={setHalfCount}
          setTotalPrice={setTotalPrice}
          totalPrice={totalPrice}
         
        ></QuantitySelector>
        <Button variant="contained" size="small" color="success" type="submit" onClick={addCartData}>
          Add to cart
        </Button>{" "}
      </form>
    </div>
  );
}
