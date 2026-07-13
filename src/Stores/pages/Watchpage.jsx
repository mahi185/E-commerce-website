import React from 'react'
import { watchData } from '../data/watch'
import Navbar from '../Components/Navbar'
import { Link } from 'react-router-dom'
import { useState } from 'react'
const Watchpage = () => {
  const [selectedProduct, setSelectedProduct] =useState([])
            const companyHandler=(mango)=>{
              if(selectedProduct.includes(mango)) {
                setSelectedProduct(selectedProduct.filter(item=> item !== mango))
              }
              else {
                setSelectedProduct([...selectedProduct, mango])
              }
            }
            const filteredProduct =selectedProduct.length===0?
            watchData: watchData.filter((orange)=>selectedProduct.includes(orange.brand))
  return (
    <>
    <Navbar/>
    <div className="full-page">
      <div className="pro-selected">
                           {watchData.map((watch)=>{
                             return(
                               <div className='pro-input'>
                                 <label>
                                   <input type="checkbox"
                                   checked={selectedProduct.includes(watch.brand)} 
                                   onChange={()=>companyHandler(watch.brand)}
                                   />
                                   {watch.brand}
                                 </label>
                                 </div>
                             
                             )
                           })}
                         </div>
    <div className='pagesection'>
      {filteredProduct.map((item)=>{
        return(
          <div>
          <Link to={`/watch/${item.id}`}>
          <div className='pageimg'>
            <img src={item.image}  alt="" />
           </div>
          </Link>
           <div>
            {item.brand},{item.model}
           </div>
          </div>
        )
      })}
      
    </div>
    </div>
    </>
  )
}

export default Watchpage
