import React from "react";

import logo from "../logo.svg";
import styles from "./CardStyles.css";
const UserCard = ({ userId, userName, items, setSelectedCard }) => {
  const handleClick = () => {
    setSelectedCard(items);
  };

  return (
    <div className="cardContainer" onClick={handleClick}>
      <div className="countContainer">
        <h2 className="count">
          {items?.filter((item) => !item.visited)?.length}
        </h2>
      </div>
      <div className="imageContainer">
        <img src={logo} className="App-logo" alt="logo" />
      </div>
      <div className="userId">{`${userName}_${userId}`}</div>
    </div>
  );
};

export default UserCard;
