import { Button } from 'antd'
import React from 'react'

const ButtonComponent = ({size, styleButton, textButton, ...rest}) => {
  return (
    <Button 
            size={size} 
            style={styleButton} 
            {...rest}
        >{textButton}
    </Button>
  )
}

export default ButtonComponent