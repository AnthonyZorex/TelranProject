import React, { useState,useEffect } from 'react'

function OrderItem({setSumOrder,sumOrder,data:{id,image,title,price,discont_price,description,categoryId}}) {
   
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
    else{

    }
  },[])

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
        <h2 >
        <span className='mainCost'>{discont_price==null ? price*count+"$" : discont_price*count +"$"}</span> 
        <span style={{textDecoration:discont_price!=null?'line-through':"none"}} className="discount">{discont_price==null ? "" : price+"$"}</span> 
        <span className='discount_proc'>{discont_price!=null?sale+"%" :""}</span> 
        </h2>
        </div>
        </div>
    </div>
  )
}

export default OrderItem