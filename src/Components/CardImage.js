import React from "react";
import defaultImage from "../images/Photos/374A1318.jpg";

function CardImage(props) {
  return (
    <div className="card">
      <div className="card-image">
        <img src={props.image || defaultImage} alt="" />
      </div>
    </div>
  );
}

export default CardImage;
