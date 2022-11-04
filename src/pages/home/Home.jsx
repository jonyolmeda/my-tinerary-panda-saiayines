import React from "react";
import "./home.css";
import Home1 from "../../components/home1/Home1";
import Home2 from "../../components/home2/Home2";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

export default function Home() {
  return (
    <div className="container">
      <Header />
      <Home1 />
      <Home2 />
      <Footer />
    </div>
  );
}
