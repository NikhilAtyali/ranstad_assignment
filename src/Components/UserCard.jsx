import React from "react";

import logo from "../mail-1008.svg";
import styles from "./CardStyles.css";
const UserCard = ({ userId, userName, items, setSelectedCard }) => {
  const handleClick = () => {
    setSelectedCard(items);
  };

  return (
    <div className="cardContainer" onClick={handleClick}>
      <div className="countContainer">
        <span className="count">
          {items?.filter((item) => !item.visited)?.length}
        </span>
      </div>
      <div className="imageContainer">
        <img src={logo} className="App-logo" alt="logo" />
      </div>
      <div className="userId">{`${userName}_${userId}`}</div>
    </div>
  );
};

export default UserCard;
