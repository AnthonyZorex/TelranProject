import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';


function Product_Item({data:{id,image,title,price,discont_price,description,categoryId}}) {
  
  let [sale,setSale] = useState(""); 
  useEffect(()=>{
  setSale(String(100-(Math.round(discont_price/price*100))));
},[])
  return (
    <div className='item_Info'>
     <img src={"http://localhost:3333"+image} height={350} width={318} />
     <div class="overlay"><button>Add to cart</button></div>
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