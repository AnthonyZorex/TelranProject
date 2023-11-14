import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { ClearProduct, fetchProduct} from '../../../store/asyncAction/customers';
import Navbar from '../../../components/Navbar/Navbar';
import Footer from '../../../components/Footer/Footer';
import Product_Item from '../ProductInfo/Product_Item';
import "../../../assets/styles/pages/product.scss"
import Filter from '../../../components/Filter/Filter';

export default function ProductCategory(){
const {categoryId} = useParams();
let dispach = useDispatch();
let sale = useSelector(state=>state.product.product);  
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
  <h1>Tools and equipment</h1>  
  <Filter/>  
    <div className='category'>
       {
          sale && sale.map((item)=>{
          return  item['categoryId']==categoryId?
            <Product_Item key={item['id']} data={item} />:""
          })
      }   
    </div>
    </div>
    <Footer/>
</div>
)
}