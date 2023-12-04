import React, { useState,useEffect } from 'react'
import { CLEAN_ORDER_ITEM } from '../../store/orderReducer';
import { useSelector,useDispatch } from 'react-redux';

function OrderItem({setSumOrder,data:{id,image,title,price,discont_price}}) {
  let dispatch =  useDispatch();
  
  let order = useSelector(state=>state.order.order);
    let [count,setCount] = useState(1);
    let [sale,setSale] = useState(""); 
    useEffect(()=>{
    setSale(String(100-(Math.round(discont_price/price*100))));
  },[]) 

  useEffect(()=>{
    if(count===1){
        if(discont_price === null)
        setSumOrder((prevState)=>prevState + price);
         else
        setSumOrder((prevState)=>prevState + discont_price); 
    }
  },[order])


  const upCount = ()=>{
    setCount((prevState)=>prevState+1);
        if(discont_price === null)
        setSumOrder((prevState)=>prevState + price);
         else
        setSumOrder((prevState)=>prevState + discont_price);  
  }
  const DownCount = ()=>{
    setCount((prevState)=>prevState-1);
    if(discont_price === null)
      setSumOrder((prevState)=>prevState - price);
       else
      setSumOrder((prevState)=>prevState - discont_price); 
  }
  const deleteItem=()=>{
    dispatch({type:CLEAN_ORDER_ITEM,payload:id});
    setSumOrder(0);
  }
 

  return (
    <div className='left'>
        <div className='container'>
          
            <div>
            <img src={"http://localhost:3333"+image} height={166} width={192} />
            </div>
        <div>
        <h1>{title}</h1>
        <div className='countItem'>
            <button onClick={DownCount}>-</button>
            <h2>{count}</h2>
            <button onClick={upCount}>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
            <rect y="8" width="18" height="2" fill="black"/>
            <rect x="8" y="18" width="18" height="2" transform="rotate(-90 8 18)" fill="black"/>
            </svg>
            </button>
        </div>
        </div>
        <div>
           <svg className='close' onClick={()=>deleteItem()} xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
        <path d="M8.6438 7.80005L7.80005 8.6438L14.175 15L7.80005 21.3563L8.6438 22.2001L15.0375 15.8438L21.4125 22.2001L22.2563 21.3563L15.8813 15L22.2563 8.6438L21.4125 7.80005L15.0375 14.1563L8.6438 7.80005Z" fill="black"/>
        </svg>
        <h2 >
        <span className='mainCost'>{discont_price==null ? price*count+"$" : discont_price*count +"$"}</span> 
        <span style={{textDecoration:discont_price!=null?'line-through':"none"}} className="discount">{discont_price==null ? "" : price+"$"}</span>  
        </h2>
        </div>
        </div>
    </div>
  )
}

export default OrderItem