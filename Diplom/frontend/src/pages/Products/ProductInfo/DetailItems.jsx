import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { ClearProduct, fetchProduct} from '../../../store/asyncAction/customers';
import { Footer,Navbar } from '../../../components';
import Info from './Info';
import "../../../assets/styles/pages/Item.scss";


function DetailItems() {
  
    const {id} = useParams();
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
        <div className='product'>
           {
              sale && sale.map((item)=>{
              return  item['id']==id?
                <Info key={item['id']} data={item} />:""
              })
          }   
        </div>
        <Footer/>
    </div>
  )
}

export default DetailItems