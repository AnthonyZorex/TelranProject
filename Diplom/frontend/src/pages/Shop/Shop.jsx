import React, { useState } from 'react'
import { Footer, Navbar } from '../../components'
import "./../../assets/styles/pages/shop.scss"
import { NavLink } from 'react-router-dom';

function Shop() {
  let [total,setTotal] = useState(0);
  return (
    <>
       <Navbar/>
       <div className='main'>
       <div className='head_shop'>
        <h1>Shopping cart</h1>
       
       </div>
       <div className='container'>
       <h2><NavLink to={"/products"}>Back to the store Copy
        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
        <path d="M4.49653 1.19775C4.37465 1.19775 4.26567 1.27158 4.21879 1.38408C4.17309 1.49775 4.20004 1.62666 4.28793 1.71221L10.0758 7.5001L4.28793 13.288C4.20942 13.363 4.17778 13.4755 4.2059 13.5798C4.23286 13.6853 4.31489 13.7673 4.42036 13.7942C4.52465 13.8224 4.63715 13.7907 4.71215 13.7122L10.7122 7.71221C10.8293 7.59502 10.8293 7.40518 10.7122 7.28799L4.71215 1.28799C4.6559 1.22939 4.57856 1.19775 4.49653 1.19775Z" fill="black"/>
        </svg> </NavLink></h2>
        <div className='container_content'>
        <div className='block_1'>
          </div>
          <div className='block_2'>
            <h3>Order details</h3>
            <h4>Total <span className='total'>{total}<span>$</span></span> </h4>
            <input type='text' placeholder='Phone number' />
            <button>Order</button>
            </div>
        </div>
        
       </div>
       </div>
       
       <Footer/> 
    </>
  )
}

export default Shop