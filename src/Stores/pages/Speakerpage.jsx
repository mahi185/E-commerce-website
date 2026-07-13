import React from 'react'
import Navbar from '../Components/Navbar'
import { speakerData } from '../data/speaker'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const Speakerpage = () => {
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
            speakerData: speakerData.filter((orange)=>selectedProduct.includes(orange.brand))
  return (
     <>
         <Navbar/>
         <div className="full-page">
          <div className="pro-selected">
                                {speakerData.map((speaker)=>{
                                  return(
                                    <div className='pro-input'>
                                      <label>
                                        <input type="checkbox"
                                        checked={selectedProduct.includes(speaker.brand)} 
                                        onChange={()=>companyHandler(speaker.brand)}
                                        />
                                        {speaker.brand}
                                      </label>
                                      </div>
                                  
                                  )
                                })}
                              </div>
         <div className='pagesection'>
           {filteredProduct.map((item)=>{
             return(
               <div>
               <Link to={`/speaker/${item.id}`}>
               <div className='pageimg'>
                 <img src={item.image}  alt="" />
                </div></Link>
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

export default Speakerpage
