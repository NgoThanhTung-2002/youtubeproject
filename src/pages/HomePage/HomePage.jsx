import React from 'react'
import TypeProduct from '../../components/TypeProduct/TypeProduct'
import { WrapperTypeProduct } from './style'
import SliderComponent from '../../components/SliderComponent/SliderComponent'
import slider1 from '../../assets/images/slider1.webp'
import slider2 from '../../assets/images/slider2.webp'
import slider3 from '../../assets/images/slider3.webp'
import slider4 from '../../assets/images/slider4.jpg'
import slider5 from '../../assets/images/slider5.jpg'
import CardComponent from '../../components/CardComponent/CardComponent'
import NavbarComponent from '../../components/NavbarComponent/NavbarComponent'

const HomePage = () => {
  const arr = ['TV', 'Tu lanh', 'Laptop']
  return (
    <>
      <div style={{padding: '0 120px'}}>
        <WrapperTypeProduct>
          {arr.map((item)=>{
            return(          
              <TypeProduct name={item} key={item} />
            )
          })}
        </WrapperTypeProduct>
      </div>
      <div id="container" style={{backgroundColor: '#efefef', padding: '0 120px'}}>
        <SliderComponent 
          arrImages={[slider1, slider2, slider3, slider4, slider5]}
        />
        <div style={{marginTop: '20px', display: 'flex', alignItems: 'center'}}>
          <CardComponent />
        </div>
        <NavbarComponent />
      </div>
    </>
  )
}

export default HomePage