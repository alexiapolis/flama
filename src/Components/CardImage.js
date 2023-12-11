import React from "react";
import defaultImage from "../images/Photos/374A1318.jpg";

function CardImage(props) {
  return (
    <div className="card" style={{ width: "50%" }}>
      <img src={props.image || defaultImage} alt="" />
    </div>
  );
}

export default CardImage;
