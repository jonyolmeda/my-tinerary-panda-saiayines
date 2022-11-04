import React from "react";
import "./layoutbase.css";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

export default function LayoutBase(props) {
  return (
    <div className="container">
      <Header />
      <div className="container-center" >
        {props.children}
      </div>
      <Footer />
    </div>
  );
}