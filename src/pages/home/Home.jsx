import React from "react";
import LayoutBase from "../../layouts/LayoutBase";
import "./home.css";
import Home1 from "../../components/home1/Home1";
import Home2 from "../../components/home2/Home2";

export default function Home() {
  return (
    <LayoutBase>
      <div className="container">
      {<Home1 />}
      {<Home2 />}
      </div>
    </LayoutBase>


)}

