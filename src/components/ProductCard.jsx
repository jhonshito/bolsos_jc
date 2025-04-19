import React from 'react'
import ProductCardText from './ProductCardText'

const ProductCard = ({ bolso }) => {
    return (
        <div className='productCard'>
            <div className='contentCard'>
                <img className='productImg' src={bolso} alt="" />
            </div>
            <ProductCardText />
        </div>
    )
}

export default ProductCard