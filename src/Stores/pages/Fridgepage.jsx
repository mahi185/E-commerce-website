import React from 'react'
import Navbar from '../Components/Navbar'
import {fridgeData} from '../data/fridge'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const Fridgepage = () => {
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
    fridgeData: fridgeData.filter((orange)=>selectedProduct.includes(orange.brand))
  return (
    <>
    <Navbar/>
    <div className="full-page">
      <div className="pro-selected">
          {fridgeData.map((phone)=>{
            return(
              <div className='pro-input'>
                <label>
                  <input type="checkbox"
                  checked={selectedProduct.includes(phone.brand)} 
                  onChange={()=>companyHandler(phone.brand)}
                  />
                  {phone.brand}
                </label>
                </div>
            
            )
          })}
        </div>
    <div className='pagesection'>
      {filteredProduct.map((item)=>{
        return(
          <div>
          <Link to={`/fridge/${item.id}`}>
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

export default Fridgepage
