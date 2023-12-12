import React, { useEffect, useRef} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { ClearProduct,fetchProduct } from '../../store/asyncAction/customers';
import { Filter,Footer,Navbar } from '../../components';
import Product_Item from './ProductInfo/Product_Item';
import "../../assets/styles/pages/product.scss";

const Products = () => {
  let dispach = useDispatch();
  let product = useSelector(state=>state.product.product); 
  let isStateProduct = useRef(null);
  let productHeader = useRef(null);
  useEffect(()=>{
      dispach(fetchProduct());
  
      return  ()=>{
        dispach(ClearProduct());
    }
  },[])

  return (
    <div>
      <Navbar/>
      
      
      <div className='container'>
      <div className="alert" ref={isStateProduct}> 
      <strong>Product added!</strong>
      <svg xmlns="http://www.w3.org/2000/svg" width="45" height="200" viewBox="0 0 129 171" fill="none">
<path d="M128.254 85.7839L0.453792 170.102L1.05518 0.561291L128.254 85.7839Z" fill="#339933"/>
</svg>
      </div>
        <h1 ref={productHeader} >All products</h1>
       <Filter value ={false}/>
        <div className='category'>
            { 
                product && product.map((item=><Product_Item key={item['id']} productHeader={productHeader} isStateProduct={isStateProduct} data={item}/>))    
            }
        </div>
        </div> 
      <Footer/>
    </div>
  )
}

export default Products