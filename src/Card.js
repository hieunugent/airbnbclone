import React from 'react'
import "./Card.css"
function Card({title, image, description}) {
    return (
      <div className="card">
        <img className="card__image" src={image} alt={title} />
        <div className="card__info   ">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </div>
    );
}

export default Card
