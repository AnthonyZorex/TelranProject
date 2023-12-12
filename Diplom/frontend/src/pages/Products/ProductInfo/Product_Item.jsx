import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { ADD_ITEM_ORDER } from '../../../store/orderReducer';

function Product_Item({productHeader,isStateProduct,data:{id,image,title,price,discont_price,description,categoryId}}) {
  
  
  let dispach = useDispatch();
  let [sale,setSale] = useState(""); 
  let item  = {
    id,
    image,
    title,
    price,
    discont_price,
    description,
    categoryId};
  useEffect(()=>{

  setSale(String(100-(Math.round(discont_price/price*100))));
},[])

  const addItem =()=>{
    dispach({type:ADD_ITEM_ORDER,payload:item});
    isStateProduct.current.style.display="block";
    productHeader.current.style.marginTop ="50px";
    setTimeout(()=>{
      isStateProduct.current.style.display="none";
    },3000)
  }
  return (
    <div className='item_Info'>
     <img src={"http://localhost:3333"+image} height={350} width={318} />
     <div className="overlay"><button onClick={()=>addItem()}>Add to cart</button></div>
     <h2 >
    <span className='mainCost'>{discont_price==null ? price+"$" : discont_price +"$"}</span> 
    <span style={{textDecoration:discont_price!=null?'line-through':"none"}} className="discount">{discont_price==null ? "" : price+"$"}</span> 
    <span className='discount_proc'>{discont_price!=null?sale+"%" :""}</span> 
    </h2>
    <h2><NavLink to={`/products/${id}`}>{title}</NavLink></h2>
    </div>
  )
}

export default Product_Item