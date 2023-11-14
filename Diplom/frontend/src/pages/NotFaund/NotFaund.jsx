import React from 'react';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';
import nFound_Img from "./../../assets/images/icons/notFaund.svg"
function NotFaund() {
  return (
    <div>
      <Navbar/>
      <div className='Notfound_content'>
      <img src={nFound_Img} />
      </div>
        
      <Footer/>
    </div>
  )
}

export default NotFaund