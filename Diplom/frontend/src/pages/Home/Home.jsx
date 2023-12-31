import React,{useEffect, useRef, useState} from "react"
import {Navbar,Footer } from "../../components";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategory, ClearCategory,ClearProduct, fetchProduct  } from '../../store/asyncAction/customers';
import Product_Item from './../Products/ProductInfo/Product_Item';
import Item from './../Catalog/Item';
import "../../assets/styles/pages/home.scss";
import Gnom_img from "../../assets/images/icons/Gnom.svg";

const Home = () => {

  let [inputSale,SetInputSele]=useState("");
  let inputEror = useRef(null);
  let input = useRef(null);
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
    if(inputSale.length>9){
      postData("http://localhost:3333/sale/send",{inputSale}) .then((data) => {
      });
      inputEror.current.style.display="none";
      input.current.value ="+49";
    }
    else{
      inputEror.current.style.display="block";
    }
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

    const Sale = (event)=>{
      SetInputSele(event.target.value);
      inputEror.current.style.display="none";
    }
  return (
    <>
    <Navbar/>
    <div className="containter">
      <div className="sale_Block">
      <div className="sale_Block_content">
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
    <div className="baner_block">
            <div className="baner_block_left">
            <img src={Gnom_img} />
            </div>
            <div className="baner_block_right">
            <h1>5% off <h2>on the first order</h2></h1>
            <div>
            <h6 ref={inputEror} className="InputEror">The number is incorrect!</h6>
            <input type="text" ref={input} onChange={event=>Sale(event)} defaultValue={'+49'}/>

            </div>
            <button onClick={()=>saleSend()}>Get a discount</button>
            </div>
    </div>
    <div>
    <div className='product_container'>
        <div className='product' style={{marginBottom:'30px'}}>
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