import React from 'react'
import { NavLink } from 'react-router-dom'

function Item({data:{id,title,image,createdAt,updatedAt}}) {
  return (
    <div className='item'>
    <img src={"http://localhost:3333"+image} height={350} width={318} />
    <h2><NavLink to={`/products/catalog/${id}`}>{title}</NavLink></h2>
    </div>
  )
}

export default Item