import React from 'react'
import Navbar from '../Components/Navbar'
import {menData} from '../data/men'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const Menpage = () => {
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
            menData: menData.filter((orange)=>selectedProduct.includes(orange.brand))
  return (
   <>
       <Navbar/>
       <div className="full-page">
        <div className="pro-selected">
                              {menData.map((men)=>{
                                return(
                                  <div className='pro-input'>
                                    <label>
                                      <input type="checkbox"
                                      checked={selectedProduct.includes(men.brand)} 
                                      onChange={()=>companyHandler(men.brand)}
                                      />
                                      {men.brand}
                                    </label>
                                    </div>
                                
                                )
                              })}
                            </div>
       <div className='pagesection'>
         {filteredProduct.map((item)=>{
           return(
             <div>
             <Link to={`/men/${item.id}`}>
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

export default Menpage
