import React from "react";
import "../myShows/editcardshows.css";

export default function MyReactionCard(props) {
  let { event, nameReaction, reaction, onClick, photo, name } = props;

  return (
    <div
      className={
        // eslint-disable-next-line
        nameReaction === nameReaction
          ? `cardReaction ${nameReaction}`
          : "cardReaction"
      }
    >
      <div className="container-card-details-events2">
        <div className="cont-img-card-details-events2">
          <img className="img-card-details-events2" src={photo} alt={name} />
        </div>
        <div className="card-name-details-events2">
          <p>{name}</p>
        </div>
        <div>
          <img
            className="image-page-reactions2"
            src={reaction}
            alt={nameReaction}
          />
          <h5>{nameReaction}</h5>
        </div>
      </div>
      <button className="button-byShows-edit" onClick={onClick}>
        Remove
      </button>
    </div>
  );
}
