import React, { useEffect,useState }  from 'react'


function Info({data :{image,title,price,discont_price,description} }) {

    
   let [sale,setSale] = useState(""); 
    useEffect(()=>{
    setSale(String(100-(Math.round(discont_price/price*100))));
  },[]) 
  return (
    <div className='Item'>
        <div>
      
      <div className='container'>
      <div className='Item__Image'>
      <h1>{title}</h1>
      <img src={"http://localhost:3333"+image} height={710} width={710} />
      </div>
    <div className='Item_Info'>
    <h2 >
    <span className='mainCost'>{discont_price==null ? price+"$" : discont_price +"$"}</span> 
    <span style={{textDecoration:discont_price!=null?'line-through':"none"}} className="discount">{discont_price==null ? "" : price+"$"}</span> 
    <span className='discount_proc'>{discont_price!=null?sale+"%" :""}</span> 
    </h2>
    <button>To cart</button>
    <div className='description'>
      <h3>Description</h3>

      <h4>{description}</h4>
    </div>
    </div>
    </div>
    </div>
   </div>
  )
}

export default Info