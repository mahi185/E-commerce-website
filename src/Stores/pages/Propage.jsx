import React from 'react'

import Navbar from '../Components/Navbar'
import { mobileData } from '../data/mobiles'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const Propage = () => {
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
              mobileData: mobileData.filter((orange)=>selectedProduct.includes(orange.company))
  return (
    <>
    <Navbar/>
    <div className="full-page">
        <div className="pro-selected">
                           {mobileData.map((pro)=>{
                             return(
                               <div className='pro-input'>
                                 <label>
                                   <input type="checkbox"
                                   checked={selectedProduct.includes(pro.company)} 
                                   onChange={()=>companyHandler(pro.company)}
                                   />
                                   {pro.company}
                                 </label>
                                 </div>
                             
                             )
                           })}
                         </div>
    <div className='pagesection'>
        {filteredProduct.map((item)=> {
            return(
                <div>
                    <Link to={`/pro/${item.id}`}>
                    <div className='pageimg'>
                         <img src={item.image}  alt="" />
                    </div></Link>
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

export default Propage
