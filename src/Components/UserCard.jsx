import logo from "../logo.svg";
import styles from "./CardStyles.css";
const UserCard = ({ userId, userName, itemCount }) => {
  return (
    <div className="cardContainer">
      <div className="countContainer">
        <h2 className="count">{itemCount}</h2>
      </div>
      <div className="imageContainer">
        <img src={logo} className="App-logo" alt="logo" />
      </div>
      <div className="userId">
        {`${userName}_${userId}`}
      </div>
      {/* SVG image */}
    </div>
  );
};

export default UserCard;
