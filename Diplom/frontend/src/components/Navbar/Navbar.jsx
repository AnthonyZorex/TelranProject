import React, { useState } from 'react'
import { Icon} from "./../Icon";
import nav_logo from "./../../assets/images/icons/nav_icon.svg";
import {Link, NavLink}  from"react-router-dom";

function Navbar() {

  let [stateMenu,setStateMenu] = useState(true);
  
  function nv(){
   if(stateMenu===false)
    setStateMenu(true);
    else
    setStateMenu(false);
  }
  

  return (
    
    <nav className="navbar">
        <div className="container">
          <div className="navbar__content">
            <div className="navbar__left">
              <a href="/" className="navbar__logo">
                <img src={nav_logo} width={40} height={40}  className="icon__logo" />
                </a>
                <button className='navbar_Button' ><NavLink to="/catalog">Catalog</NavLink></button>
            </div>
            <div className="navbar__right">
            <div className="navbar-mobile">
                <div className="navbar-mobile__label" onClick={()=>nv()}>
                   <Icon iconName="menu" className="icon__menu" />
                   <ul className="navbar-menu" style={{display:stateMenu===false?"none":"flex"}}>
                  <li><NavLink to="/" className="navbar-menu__item navbar-menu__item--active">Main Page</NavLink></li>
                  <li><NavLink to="/products" className="navbar-menu__item">All products</NavLink></li>
                  <li><NavLink to="/sales" className="navbar-menu__item">All sales</NavLink></li>
                </ul>
                </div>
              </div>
              <NavLink to="/shop">  <Icon iconName='shop_nav' width='30' height='30' /></NavLink>
            </div>
          </div>
        </div >
      </nav>
  )
}

export default Navbar