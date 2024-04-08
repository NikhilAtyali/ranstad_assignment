import React, { useState } from "react";
import styles from "./ListItems.css";
const ListItems = ({ items, groupedDataObj, setGroupedDataObj }) => {
  const [clickedItemIds, setClickedItemIds] = useState([]);

  const onItemClickHandler = (id) => {
    const updatedClickedItemIds = clickedItemIds.includes(id)
      ? clickedItemIds.filter((clickedId) => clickedId !== id)
      : [...clickedItemIds, id];
    setClickedItemIds(updatedClickedItemIds);
    onItemClick(id);
  };

  const onItemClick = (item, ind) => {
    let modifiedGroupedDataObj = { ...groupedDataObj };
    const objIndex = modifiedGroupedDataObj[item.userId].findIndex(
      (obj) => obj.id === item.id
    );

    modifiedGroupedDataObj[item.userId][objIndex] = {
      ...modifiedGroupedDataObj[item.userId][objIndex],
      visited: true,
    };
    setGroupedDataObj(modifiedGroupedDataObj);
  };
  return (
    <div className="list">
      <ul className="list_ul">
        {items &&
          items.map((item, ind) => (
            <li
              className="listItem"
              key={item.id}
              onClick={() => onItemClickHandler(item, ind)}
              style={{
                backgroundColor: item.visited ? "lightblue" : "transparent",
                cursor: "pointer",
              }}
            >
              {item.title}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default ListItems;
