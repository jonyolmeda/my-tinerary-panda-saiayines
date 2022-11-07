import React from 'react'
import './scrollToTop.css'

export default function ScrollToTop(props) {
  
  let ScrollToTopButtons = () => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }
  return (
    <button onClick= {ScrollToTopButtons} className='buttonScrollToTop'><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path d="m6.293 11.293 1.414 1.414L12 8.414l4.293 4.293 1.414-1.414L12 5.586z"></path><path d="m6.293 16.293 1.414 1.414L12 13.414l4.293 4.293 1.414-1.414L12 10.586z"></path></svg></button>
  )
}