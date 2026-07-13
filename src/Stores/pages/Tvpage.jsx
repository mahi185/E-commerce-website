import React from 'react'
import Navbar from '../Components/Navbar'
import { tvData } from '../data/tv'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const Tvpage = () => {
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
            tvData: tvData.filter((orange)=>selectedProduct.includes(orange.brand))
    return(
  <>
    <Navbar/>
    <div className="full-page">
      <div className="pro-selected">
                           {tvData.map((tv)=>{
                             return(
                               <div className='pro-input'>
                                 <label>
                                   <input type="checkbox"
                                   checked={selectedProduct.includes(tv.brand)} 
                                   onChange={()=>companyHandler(tv.brand)}
                                   />
                                   {tv.brand}
                                 </label>
                                 </div>
                             
                             )
                           })}
                         </div>
    <div className='pagesection'>
      {filteredProduct.map((item)=>{
        return(
          <div>
          <Link to={`/tv/${item.id}`}>
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

export default Tvpage
