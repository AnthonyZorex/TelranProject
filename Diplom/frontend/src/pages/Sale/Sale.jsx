import React,{useEffect} from 'react'
import { Filter,Footer,Navbar } from '../../components';
import { useDispatch, useSelector } from 'react-redux';
import { ClearProduct, fetchProduct } from '../../store/asyncAction/customers';
import SaleItems from './SaleItems';
import "../../assets/styles/pages/product.scss";

function Sale() {
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
        <h1>Products with sale</h1>
        <Filter value ={true}/>
        <div className='category'>
           {
              sale && sale.map((item)=>{
              return  item['discont_price']!=null?
                <SaleItems key={item['id']} data={item} />:""
              })
          }   
        </div>
        </div>

        <Footer/>
    </div>
  )
}

export default Sale