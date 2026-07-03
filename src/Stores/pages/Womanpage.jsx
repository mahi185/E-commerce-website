import React from 'react'
import { womanData } from '../data/woman'
import Navbar from '../Components/Navbar'
import {Link} from 'react-router-dom'
import { useState } from 'react'

const Womanpage = () => {
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
            womanData: womanData.filter((orange)=>selectedProduct.includes(orange.brand))
  return (
   
       <>
       <Navbar/>
      <div className="full-page">
         <div className="pro-selected">
                              {womanData.map((woman)=>{
                                return(
                                  <div className='pro-input'>
                                    <label>
                                      <input type="checkbox"
                                      checked={selectedProduct.includes(woman.brand)} 
                                      onChange={()=>companyHandler(woman.brand)}
                                      />
                                      {woman.brand}
                                    </label>
                                    </div>
                                
                                )
                              })}
                            </div>
       <div className='pagesection'>
         {filteredProduct.map((item)=>{
           return(
             <div>
              <Link to={`/woman/${item.id}`}>
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

export default Womanpage
