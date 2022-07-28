import React from "react";

function Card(props) {
  return (
    <div className="card">
      <div className="card-title">{props.title}</div>
      <div className="card-content">
        <img src={props.image} alt="placeholder" />
        <p>{props.text}</p>
      </div>
    </div>
  );
}

export default Card;
