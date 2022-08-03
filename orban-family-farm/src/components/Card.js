import React from "react";

function Card(props) {
  return (
    <div className="card">
      <div className="card-title">
        <h2>{props.title}</h2>
      </div>
      <div className="card-content">
        <img src={props.image} alt={props.text} />
        <p>{props.text}</p>
      </div>
    </div>
  );
}

export default Card;
