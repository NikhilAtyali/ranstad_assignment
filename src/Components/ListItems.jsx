import React, { useState, useContext } from "react";

const ListItems = ({ items, groupedDataObj, setGroupedDataObj }) => {
    console.log(items, "items ++++++++++++++++++++++++++++++++++++++++++++++");
    console.log(groupedDataObj, 'groupedDataObjMMMMMMMMMMMM');
  const [clickedItemIds, setClickedItemIds] = useState([]);

  const onItemClickHandler = (id) => {
    // Toggle clicked state for the item
    const updatedClickedItemIds = clickedItemIds.includes(id)
      ? clickedItemIds.filter((clickedId) => clickedId !== id)
      : [...clickedItemIds, id];
    setClickedItemIds(updatedClickedItemIds);
    onItemClick(id); // Forward the click event to parent if needed
  };

  const onItemClick = (item, ind) => {
    
    let modifiedGroupedDataObj = {...groupedDataObj};
    const objIndex = modifiedGroupedDataObj[item.userId].findIndex(obj=> obj.id === item.id);
    
    console.log(groupedDataObj, 'groupedDataObjjjjjjjjjjjjjjjjjjjjjjjjjj', modifiedGroupedDataObj[item.userId][objIndex],'indexxxxxxxxx', objIndex);
    modifiedGroupedDataObj[item.userId][objIndex] = {...modifiedGroupedDataObj[item.userId][objIndex], visited: true} 
    console.log(modifiedGroupedDataObj, 'modifiedGroupedDataObj////////////////////');
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
                backgroundColor: item.visited 
                  ? "lightblue"
                  : "transparent",
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
