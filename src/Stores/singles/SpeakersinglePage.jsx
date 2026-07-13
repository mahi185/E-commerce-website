import React from 'react'
import { speakerData } from '../data/speaker'
import { useParams } from 'react-router-dom'
import Navbar from '../Components/Navbar'
import { useCart } from '../context/CartContex'

const SpeakersinglePage = () => {
  const {id} = useParams()
  const {addToCart, cartItems}=useCart()
    const product = speakerData.find((item)=> item.id===id)
  return (
    <>
    <Navbar/>
    <div className="ind-section">
        <div className="ind-image">
            <img src={product.image} alt="" />
        </div>

        <div className="ind-details space">
            <div className="int-company">
                <h2>{product.brand}</h2>
            </div>

            <div className="ind-model">
            <h3>{product.model}</h3>
            </div>

             <div className="ind-price">
            <h2>{product.price}</h2>
             </div>

             <div className="ind-category">
                <h2>{product.category}</h2>
             </div>
             <div className="ind-desc">
            <p>{product.description}</p>
            </div>
            <button onClick={()=>addToCart(product)}>Add to Cart</button>
        </div>

    </div>
    </>
  )
}

export default SpeakersinglePage
