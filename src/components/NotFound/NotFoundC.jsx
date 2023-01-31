import React from "react";
import "./notfoundc.css";
import CallToAction from "../CallToAction/CallToAction";

export default function NotFoundC() {
  return (
    <>
      <div className="contenedor-notFound">
        <h1 className="titleNotFound"> 404 </h1>
        <h2 className="subTitleNotFound"> NOT FOUND</h2>
        <div className="buttonNotFound">
          <CallToAction Link="/" nameButton="HOME" />
        </div>
      </div>
    </>
  );
}
