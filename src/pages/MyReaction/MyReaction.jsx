import React from "react";
import LayoutBase from "../../layouts/LayoutBase";
import MyReactionC from "../../components/MyReactionC/MyReactionC";

export default function MyReaction() {
  let id = JSON.parse(localStorage.getItem("user"));

  console.log(id);
  return (
    <LayoutBase>
      <MyReactionC id={id} />
    </LayoutBase>
  );
}
