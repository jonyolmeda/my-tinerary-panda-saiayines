import React from "react";
import "../MyReactionC/myreactions.css";

export default function MyReactionCard(props) {
  let {nameReaction, reaction, onClick, photo, name} = props;

  return (
    <div
      className={
        // eslint-disable-next-line
        nameReaction === nameReaction ? `cardReaction ${nameReaction}`: "cardReaction"}>
      <div class="card-reaction">
        <div class="container-img-reaction">
          <img className="imgphoto" src={photo} alt={name} />
          <img
            className="imgreact" src={reaction} alt={nameReaction}/>
          <h5 className="imgreactletters">{nameReaction}</h5>
        </div>
        <span>{name}</span> 
        <button onClick={onClick}>Remove</button>
      </div>
    </div>);
}
