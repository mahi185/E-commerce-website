import React from 'react'
import Navbar from '../Components/Navbar'
import { kitchenData } from '../data/kitchen'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const Kitchenpage = () => {
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
          kitchenData: kitchenData.filter((orange)=>selectedProduct.includes(orange.brand))
    return(
    <>
        <Navbar/>
         <div className="full-page">
            <div className="pro-selected">
                       {kitchenData.map((kitchen)=>{
                         return(
                           <div className='pro-input'>
                             <label>
                               <input type="checkbox"
                               checked={selectedProduct.includes(kitchen.brand)} 
                               onChange={()=>companyHandler(kitchen.brand)}
                               />
                               {kitchen.brand}
                             </label>
                             </div>
                         
                         )
                       })}
                     </div>
        <div className='pagesection'>
            {filteredProduct.map((item)=> {
                return(
                    <div>
                        <Link to={`/kitchen/${item.id}`}>
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

export default Kitchenpage
