import React from 'react'
import Navbar from '../Components/Navbar'
import { furnitureData } from '../data/furniture'
import { Link } from 'react-router-dom'
import { useState } from 'react'


const Furniturepage = () => {
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
      furnitureData: furnitureData.filter((orange)=>selectedProduct.includes(orange.brand))
  return (
    <>
    <Navbar/>
        <div className="full-page">
            <div className="pro-selected">
              {furnitureData.map((furniture)=>{
                return(
                  <div className='pro-input'>
                    <label>
                      <input type="checkbox"
                      checked={selectedProduct.includes(furniture.brand)} 
                      onChange={()=>companyHandler(furniture.brand)}
                      />
                      {furniture.brand}
                    </label>
                    </div>
                
                )
              })}
            </div>
    <div className='pagesection'>
        {filteredProduct.map((item)=> {
            return(
                <div>
                    <Link to={`/furniture/${item.id}`}>
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

export default Furniturepage
