import React from "react";
import "./home.css";
import AutoToTop from "../../components/AutoToTop/AutoToTop";
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

export default function Home() {
  return (
    <div className="container">
      <Header />
      <AutoToTop />
      <ScrollToTop/>
      <Footer />
    </div>
  );
}