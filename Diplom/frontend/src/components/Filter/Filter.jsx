import React,{useEffect, useState} from 'react'
import {sort_sale_product,sort_price, sort_price_to, sort_price_from } from '../../store/asyncAction/customers';
import { useDispatch, useSelector } from 'react-redux';
import { ClearProduct,  fetchProduct } from '../../store/asyncAction/customers';
import { SORT_PRICE_FIRST_ARG_PRODUCT, SORT_PRICE_SECOND_ARG_PRODUCT } from '../../store/productReducer';
function Filter({value}) {

    const [isChecked, setIsChecked] = useState(false);  
    let dispach = useDispatch();
    const product = useSelector(state=>state.product.product);
    const [priceTo,setPriceTo] = useState(0);
    const [priceFrom,setPriceFrom] = useState(0);


  const checkHandler = () => {

    setIsChecked(!isChecked)
    if(isChecked == false ){
      dispach(sort_sale_product());
      if(priceTo!=0 && priceFrom !=0){
        if(priceTo.length>1)
        dispach({type:SORT_PRICE_SECOND_ARG_PRODUCT,payload:priceTo});
        if(priceFrom.length>0){
          dispach({type:SORT_PRICE_FIRST_ARG_PRODUCT,payload:priceFrom});
        }
      } 
    }
    else{
    dispach(ClearProduct());
      dispach(fetchProduct());
      
      console.log(product);
    }
  }
  
  const Sort = (event)=>{
    if(event.target.value==="By Default"){
      dispach(ClearProduct());
      dispach(fetchProduct());
      if(isChecked===true){
        dispach(sort_sale_product());
        if(priceTo!=0 && priceFrom !=0){
          if(priceTo.length>1)
          dispach({type:SORT_PRICE_SECOND_ARG_PRODUCT,payload:priceTo});
          if(priceFrom.length>0){
            dispach({type:SORT_PRICE_FIRST_ARG_PRODUCT,payload:priceFrom});
          }
        }
      }
    }
    if(event.target.value==="Price increase"){
      dispach(sort_price_from());
      if(priceTo!=0 && priceFrom !=0){
        if(priceTo.length>1)
        dispach({type:SORT_PRICE_SECOND_ARG_PRODUCT,payload:priceTo});
        if(priceFrom.length>0){
          dispach({type:SORT_PRICE_FIRST_ARG_PRODUCT,payload:priceFrom});
        }
      }
      
    }
    if(event.target.value==="Price decrease"){
      dispach(sort_price_to());
      if(priceTo!=0 && priceFrom !=0){
        if(priceTo.length>1)
        dispach({type:SORT_PRICE_SECOND_ARG_PRODUCT,payload:priceTo});
        if(priceFrom.length>0){
          dispach({type:SORT_PRICE_FIRST_ARG_PRODUCT,payload:priceFrom});
        }
      }
    }
    if(event.target.value==="Sale"){
      dispach(sort_sale_product());
      if(priceTo!=0 && priceFrom !=0){
        if(priceTo.length>1)
        dispach({type:SORT_PRICE_SECOND_ARG_PRODUCT,payload:priceTo});
        if(priceFrom.length>0){
          dispach({type:SORT_PRICE_FIRST_ARG_PRODUCT,payload:priceFrom});
        }
      }
      setIsChecked(true);
    }
  }

  const sortFrom = (event)=>{
    dispach({type:SORT_PRICE_FIRST_ARG_PRODUCT,payload:event.target.value})
    setPriceFrom(event.target.value);
    if(event.target.value===""){
      dispach(ClearProduct());
      dispach(fetchProduct()); 
    }
  }
  const sortTo = (event)=>{ 
    setPriceTo(event.target.value);
    if(event.target.value.length>1)
    dispach({type:SORT_PRICE_SECOND_ARG_PRODUCT,payload:event.target.value})
    if(event.target.value===""){
      dispach(ClearProduct());
      dispach(fetchProduct());
    }
  }
  useEffect(()=>{
    setIsChecked(value);
  },[])

  return (
    <div className='filter'> 
    <h4>Price</h4> 
    <input type='text' placeholder='from' onChange={(event)=>sortFrom(event)}/>
    <input type='text' placeholder='to' onChange={(event)=>sortTo(event)}/>
    <h4>Discounted items</h4>
    <input className='box' type='checkbox'  checked={isChecked} onChange={checkHandler}  />
    <h4>Sorted</h4>
    <select onChange={(event)=>Sort(event)}>
      <option >By Default</option>
      <option>Price increase</option>
      <option>Price decrease</option>
      <option>Sale</option>
    </select>
    </div>
  )
}

export default Filter