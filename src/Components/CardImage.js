import React from "react";
import defaultImage from "../images/Photos/374A1318.jpg";

function CardImage(props) {
  return (
    <div className="card">
      <div className="card-image">
        <figure className="image is-4by3">
          <img src={props.image || defaultImage} alt="" />
        </figure>
      </div>
    </div>
  );
}

export default CardImage;
