import React, { useState, useContext } from "react";
import { AppContext } from "../App";
import logo from "../logo.svg";
import styles from "./CardStyles.css";
import ListItems from "./ListItems";
const UserCard = ({ userId, userName,  items, setSelectedCard }) => {
  const contextData = useContext(AppContext);
 const [isItemClicked, setIsItemClicked] = useState(false);
  // const [clicked, setClicked] = useState(false);
  // const [clickedItems, setClickedItems] = useState([]);

  const handleClick = () => {
    // setIsItemClicked(true);
    setSelectedCard(items)
  };

  // const onItemClick = (itemId) => {
  //   setClickedItems((prevItems) => [...prevItems, itemId]);
  // };
  // return isItemClicked ? <ListItems items={items}/> :  (
    return   (
      // <Link to={{pathname:`/list/${userId}`}} >
    <div className="cardContainer" onClick={handleClick}>
      
      <div className="countContainer">
        <h2 className="count">{items?.filter((item)=>!item.visited)?.length}</h2>
      </div>
      <div className="imageContainer"> 
        <img src={logo} className="App-logo" alt="logo" />
      </div>
      <div className="userId">{`${userName}_${userId}`}</div>
      {/* SVG image */}
      {/* {items && <ListItems items={items} clickedItems={clickedItems} onItemClick={onItemClick} />} */}
    </div>
      // </Link>
  );
};

export default UserCard;
