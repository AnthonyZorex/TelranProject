import React from "react"
import { Home,Products,NotFaund, Shop } from "./pages";
import { Routes,Route } from "react-router-dom";
import {Sale,Catalog,ProductCategory,DetailItems} from "./pages";
import "./assets/styles/main.scss";
const App = () => {
  return (
    <>
     <Routes>
      <Route path = "/" element={<Home/>} />
      <Route path = "/products" element={<Products/>}/>
      <Route  path="/products/:id" element={<DetailItems/>}/>
      <Route  path="/products/catalog/:categoryId" element={<ProductCategory/>}/>
      <Route path = "/sales" element={<Sale/>}/>
      <Route path = "/catalog" element={<Catalog/>}/>
      <Route path = "/shop" element={<Shop/>}/>
      <Route path = "*" element={<NotFaund/>}/>
     </Routes>
    </>
  )
}

export default App