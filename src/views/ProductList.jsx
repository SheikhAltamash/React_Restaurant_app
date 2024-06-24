import data from "./data";
import Button from "@mui/material/Button";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import OptionSelector from "./OptionSelector";
import CartData from "./cartData"
import { useState } from "react";

export default function Home({ cardData, setCardData }) {
  let [isShown, setIsShown] = useState(false);
  let [data1, setData] = useState();
  let [visible, setvisible] = useState(false);
  let [spicyLevel, setSpicyLevel] = useState("mid spicy");
  let [oilLevel, setOilLevel] = useState("less oil");
  let [addons, setAddons] = useState("no addons");
  let [fullCount, setFullCount] = useState(0);
  let [halfCount, setHalfCount] = useState(0);
  let [name, setName] = useState("");

  let show = (i) => {
    setIsShown(true);
    setData(i);
    // toggle();
    setvisible(true);
  };
  const toggle = () => {
    setvisible(!visible);
  };

  const addTocart = (newItem) => {
    setCardData([...cardData, newItem]);
    setvisible(false);
    
    console.log(newItem);
  };
  return (
    <div className="main">
      {data.map((i) => (
        <div className="item">
          <img src={i.url} alt="" />
          <div className="like one">
            {i.islike == false && (
              <FavoriteBorderIcon className="like empty_icon icon"></FavoriteBorderIcon>
            )}
            {i.islike && (
              <FavoriteIcon className="like full_icon icon"></FavoriteIcon>
            )}
            {i.like}
          </div>
          <h3 className="item_h3">{i.name}</h3>
          {i.price && (
            <p className="item_p">
              Price : {i.price}{" "}
              <CurrencyRupeeIcon className="rs"></CurrencyRupeeIcon>
            </p>
          )}
          {i.price1 && (
            <p className="item_p">
              Half : {i.price1}
              <CurrencyRupeeIcon className="rs"></CurrencyRupeeIcon>
            </p>
          )}
          {i.price2 && (
            <p className="item_p">
              {" "}
              Full : {i.price2}
              <CurrencyRupeeIcon className="rs"></CurrencyRupeeIcon>
            </p>
          )}
          <div className="off">{i.off}% OFF</div>
          <Button
            variant="contained"
            size="small"
            color="success"
            className="item_button"
            onClick={() => {
              show(i);
            }}
          >
            Add to cart
          </Button>{" "}
        </div>
      ))}
      {isShown && (
        <OptionSelector
          data={data1}
          onclose={toggle}
          isopen={visible}
          spicyLevel={spicyLevel}
          setSpicyLevel={setSpicyLevel}
          oilLevel={oilLevel}
          setOilLevel={setOilLevel}
          addons={addons}
          setAddons={setAddons}
          fullCount={fullCount}
          setFullCount={setFullCount}
          halfCount={halfCount}
          setHalfCount={setHalfCount}
          addTocart={addTocart}
          name={name}
          setName={setName}
        ></OptionSelector>
      )}
    </div>
  );
}
