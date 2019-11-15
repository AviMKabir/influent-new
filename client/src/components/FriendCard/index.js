import React from "react";
import "./style.css";

function FriendCard(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Product:</strong> {props.name}
          </li>
          <li>
            <strong>Brand:</strong> {props.occupation}
          </li>
        
        </ul>
      </div>
    
    </div>
  );
}

export default FriendCard;
