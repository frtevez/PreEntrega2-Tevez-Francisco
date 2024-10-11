import React, { useContext, useEffect, useState } from 'react'
import './CardWidget.css'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { CartContext } from '../../context/CartContext';
import { NavLink } from 'react-router-dom';

const CardWidget = () => {
    const { totalProducts } = useContext(CartContext)
    const [productsNumber, setProductsNumber] = useState(totalProducts)

    useEffect(() => {
        setProductsNumber(totalProducts)
    }, [totalProducts])

    return (
        <NavLink to="/cart">
            <div id='cart-widget'>

                <ShoppingCartIcon />

                <strong>{productsNumber}</strong>
            </div >
        </NavLink>
    )
}

export default CardWidget