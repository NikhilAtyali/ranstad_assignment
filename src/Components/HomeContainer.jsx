import React, { useState, useEffect } from "react";
import UserCard from "./UserCard";
import styles from "./CardStyles.css";
const HomeContainer = () => {
  const [cardData, setCardData] = useState([]);
  const [groupedDataObj, setGroupedDataObj] = useState({});
  console.log(groupedDataObj, "groupedDataObj");
  const URL = "https://jsonplaceholder.typicode.com/albums";

  const groupedDataBuUserId = (data) => {
    const groupedData = {};

    data.forEach((item) => {
      const userId = item.userId;
      if (!groupedData[userId]) {
        groupedData[userId] = [];
      }
      groupedData[userId].push(item);
    });
    console.log(groupedData, "gropedData");
    setGroupedDataObj(groupedData);
  };

  useEffect(() => {
    const fetchData = async (url) => {
      try {
        const data = await fetch(url);
        const response = await data.json();
        setCardData(response);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData(URL);
  }, []);
  useEffect(() => {
    groupedDataBuUserId(cardData);
  }, [cardData]);

  const generateRandomUsername = (length) => {
    const letters = "abcdefghijklmnopqrstuvwxyz";
    let username = "";

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * letters.length);
      username += letters[randomIndex];
    }
    return username;
  };
  
  return (
    <div className="homeContainer">
      {Object.keys(groupedDataObj).map((userId) => {
        return (
          <UserCard
            userId={userId}
            userName={generateRandomUsername(8)}
            itemCount={groupedDataObj[userId].length}
          />
        );
      })}
    </div>
  );
};

export default HomeContainer;
