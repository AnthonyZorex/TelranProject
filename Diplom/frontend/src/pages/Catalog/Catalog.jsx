import React, { useEffect} from 'react'
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import Item from './Item';
import "../../assets/styles/pages/catalog.scss";
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategory, ClearCategory } from '../../store/asyncAction/customers';

function Catalog() {

    let dispach = useDispatch();
    let category = useSelector(state=>state.category.category);

    useEffect(()=>{
        dispach(fetchCategory());
        return  ()=>{
            dispach(ClearCategory());
        }
    },[])
  return (
    <>
    <Navbar/>
    <div className='container'>
        <h1>Categories</h1>
        <div className='category'>
            {
               category && category.map((item)=><Item key={item['id']}  data={item}/>)  
            }  
        </div>
        </div>
       
    <Footer/>
    </>
  )
}

export default Catalog