import React from 'react'
import "./home1.css";
import Main1 from '../../components/main1/Main1'
import Main2 from '../../components/main2/Main2';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer'

export default function home() {
  return (
    <div className='container'>
      <Header/>
      <Main1/>
      <Main2/>
      <Footer/>
    </div>
  )
}
