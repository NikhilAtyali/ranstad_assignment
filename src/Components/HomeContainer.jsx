import React, { useState, useEffect } from "react";
import UserCard from "./UserCard";
import styles from "./CardStyles.css";
import ListItems from "./ListItems";
import RanstadLogo from "../RanstadLogo.png"

const HomeContainer = () => {
  const [cardData, setCardData] = useState([]);
  const [groupedDataObj, setGroupedDataObj] = useState({});
  const [selectedCard, setSelectedCard] = useState([]);
  const [filteredUserIds, setFilteredUserIds] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const URL = "https://jsonplaceholder.typicode.com/albums";

  const groupedDataBuUserId = (data) => {
    const groupedData = {};
    data.forEach((item) => {
      const userId = item.userId;
      if (!groupedData[userId]) {
        groupedData[userId] = [];
      }
      groupedData[userId].push({ ...item, visited: false });
    });
    setGroupedDataObj(groupedData);
    setFilteredUserIds(Object.keys(groupedData)); 
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

  const generateRandomUsername = (userId, length) => {
    const letters = "abcdefghijklmnopqrstuvwxyz";
    let username = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * letters.length);
      username += letters[randomIndex];
    }
    return `${userId}-${username}`; 
  };

  const handleSearch = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    setSearchTerm(searchTerm);
    const filteredIds = Object.keys(groupedDataObj).filter(userId => {
      const username = generateRandomUsername(userId, 8).toLowerCase(); 
      return userId.toLowerCase().includes(searchTerm) || username.includes(searchTerm);
    });
    setFilteredUserIds(filteredIds);
  };

  return (
    <>
      <div className="navbar">
        <img src={RanstadLogo} className="navLogo"/>
        <div>
          <input placeholder="Search" className="search" value={searchTerm} onChange={handleSearch} />
        </div>
      </div>
      <div className="homeContainer">
        {!selectedCard.length > 0 ? (
          filteredUserIds.map((userId) => {
            return (
              <UserCard
                key={userId}
                userId={userId}
                userName={generateRandomUsername(userId, 8)}
                items={groupedDataObj[userId]}
                setSelectedCard={setSelectedCard}
              />
            );
          })
        ) : (
          <div className="listContainer">
            <button onClick={() => setSelectedCard([])} className="backButton">Back</button>
            <ListItems
              items={selectedCard}
              groupedDataObj={groupedDataObj}
              setGroupedDataObj={setGroupedDataObj}
            />
          </div>
        )}
      </div>
    </>
  );
};

export default HomeContainer;
