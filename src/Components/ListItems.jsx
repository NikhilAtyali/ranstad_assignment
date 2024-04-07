import React, { useState} from "react";

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
    <div className="itemsList">
      <h3>Items List:</h3>
      <ul>
        {items &&
          items.map((item, ind) => (
            <li
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
