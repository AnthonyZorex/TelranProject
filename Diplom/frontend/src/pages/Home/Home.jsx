import React,{useEffect, useState} from "react"
import {Navbar,Footer } from "../../components";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategory, ClearCategory,ClearProduct, fetchProduct  } from '../../store/asyncAction/customers';

import Product_Item from './../Products/ProductInfo/Product_Item';
import Item from './../Catalog/Item';
import "../../assets/styles/pages/product.scss";
import "../../assets/styles/pages/home.scss";
import Gnom_img from "../../assets/images/icons/Gnom.svg";

const Home = () => {

  let [inputSale,SetInputSele]=useState("");
  const postData = async (url = '', data = {}) => {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    return response.json(); 
  }

  const saleSend = ()=>{
    postData("http://localhost:3333/sale/send",{inputSale}) .then((data) => {
      console.log(data); 
    });
  }

    let dispach = useDispatch();
    let category = useSelector(state=>state.category.category);
    let product = useSelector(state=>state.product.product);
    useEffect(()=>{
        dispach(fetchCategory());
        dispach(fetchProduct());
        return  ()=>{
            dispach(ClearCategory());
            dispach(ClearProduct());
        }
    },[])

  return (
    <>
    <Navbar/>
    <div className="containter">
      <div className="block1">
      <div className="block1_content">
      <h1>Sale</h1>
      <h1>new season</h1>
      <NavLink to="/sales"> <button>Sale</button></NavLink>
        </div>    
      </div>
    <div className="catalog">
    <div className="catalog_rout">
      <h1>Catalog</h1>
      <NavLink to="/catalog"> <button>All categories</button></NavLink>
    </div>
    
    <div className='category'>
            {
               category && category.map((item)=>{
               return item['id']!=5?
               <Item key={item['id']}  data={item}/>:""
              })  
            }  
        </div>
    </div>
    <div className="block2">
            <div className="block2_content1">
            <img src={Gnom_img} />
            </div>
            <div className="block2_content2">
            <h1>5% off <h2>on the first order</h2></h1>
            <div>
            <input type="text" onChange={(event)=>{SetInputSele(event.target.value)}} defaultValue={'+49'}/>
            </div>
            <button onClick={()=>saleSend()}>Get a discount</button>
            </div>
    </div>
    <div>
    <div className='container'>
        <div className='category' style={{marginBottom:'30px'}}>
            {
                product && product.map((item=>{
                  return item['id']<5?
                <Product_Item key={item['id']} data={item}/>:""
              }))    
            }
        </div>
        </div>
    </div>
    </div>
    <Footer/>
    </>
  )
}

export default Home;