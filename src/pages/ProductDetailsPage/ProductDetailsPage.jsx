import React from 'react'
import ProductDetailsComponent from '../../components/ProductDetailsComponent/ProductDetailsComponent'
import { WrapperTitleLinkProduct } from './style'

const ProductDetailsPage = () => {
  return (
    <div style={{padding: '0 120px', background: '#efefef', height: '1000px'}}>
      <WrapperTitleLinkProduct>Trang chu</WrapperTitleLinkProduct>
      <ProductDetailsComponent/>
    </div>
  )
}

export default ProductDetailsPage