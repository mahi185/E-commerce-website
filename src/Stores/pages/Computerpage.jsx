import React from 'react'
import { computerData } from '../data/computers'
import Navbar from '../Components/Navbar'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const Computerpage = () => {
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
      computerData: computerData.filter((orange)=>selectedProduct.includes(orange.company))
    
  return (
   
    <>
    <Navbar/>
    <div className="full-page">
      <div className="pro-selected">
              {computerData.map((phone)=>{
                return(
                  <div className='pro-input'>
                    <label>
                      <input type="checkbox"
                      checked={selectedProduct.includes(phone.company)} 
                      onChange={()=>companyHandler(phone.company)}
                      />
                      {phone.company}
                    </label>
                    </div>
                
                )
              })}
            </div>
    <div className='pagesection'>
      {filteredProduct.map((item)=>{
        return(
          <div>
          <Link to={`/computer/${item.id}`} >
          <div className='pageimg'>
            <img src={item.image}  alt="" />
           </div>
           </Link>
           <div>
            {item.company},{item.model}
           </div>
          </div>
        )
      })}
      
    </div>
    </div>
    </>
  )
}

export default Computerpage
