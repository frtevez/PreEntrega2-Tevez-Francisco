import React from 'react'
import './CardWidget.css'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const CardWidget = () => {
    return (
        <div id='cart-widget'>
            <ShoppingCartIcon/>
            <strong>5</strong>
        </div>
    )
}

export default CardWidget