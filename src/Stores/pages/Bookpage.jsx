import React from 'react'
import Navbar from '../Components/Navbar'
import { booksData } from '../data/books'
import { Link } from 'react-router-dom'
import { useState } from 'react'
const Bookpage = () => {
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
          booksData: booksData.filter((orange)=>selectedProduct.includes(orange.title))
  return (
    <>
    <Navbar/>
    <div className="full-page">
        <div className="pro-selected">
                  {booksData.map((book)=>{
                    return(
                      <div className='pro-input'>
                        <label>
                          <input type="checkbox"
                          checked={selectedProduct.includes(book.title)} 
                          onChange={()=>companyHandler(book.title)}
                          />
                          {book.author}
                        </label>
                        </div>
                    
                    )
                  })}
                </div>
    <div className='pagesection'>
        {booksData.map((item)=> {
            return(
                <div>
                    <Link to={`/book/${item.id}`}>
                    <div className='pageimg'>
                         <img src={item.image}  alt="" />
                    </div>
                    </Link>
                    <div>
                        
                        {item.title},{item.author}
                    </div>
                </div>
            )
        })}
    </div>
    </div>
    </>
  )
}

export default Bookpage
