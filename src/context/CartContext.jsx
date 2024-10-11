
import { createContext, useEffect, useState } from "react";

const storedCart = JSON.parse(sessionStorage.getItem("cart")) || {
    products: [],
    totalProducts: 0,
    totalCost: 0
}

export const CartContext = createContext(storedCart)

export const CartContextProvider = ({ children }) => {

    const [totalProducts, setTotalProducts] = useState(storedCart.totalProducts || 0)
    const [totalCost, setTotalCost] = useState(storedCart.totalCost || 0)
    const [products, setProducts] = useState(storedCart.products || [])

    const getFromCart = product => {

        const productIndex = products.findIndex(object => object.id == product.id)
        return { index: productIndex, isInCart: (productIndex != -1) }
    }

    const updateTotals = () => {


        setTotalProducts(0)
        setTotalCost(0)
        
        products.map(product => {
            setTotalProducts(prev => prev + product.amount)
            setTotalCost(prev => prev + (product.amount * product.price))
        })


    }

    const updateSessionStorage = () => {
        sessionStorage.setItem("cart", JSON.stringify({
            products: products,
            totalProducts: totalProducts,
            totalCost: totalCost
        }))
    }


    const removeProduct = (productIndex) => {

        let newCart = products.filter((object, index) => index != productIndex)
        setProducts(newCart)
        
    }

    const updateAmount = (productIndex, addedAmount) => {

        let newCart = [...products]
        newCart[productIndex].amount = newCart[productIndex].amount + addedAmount
        if (newCart[productIndex].amount < 1) {
            removeProduct(productIndex)
            return
        }
        setProducts(newCart)
        
    }

    const pushToCart = (submittedProduct, submittedAmount) => {
        let newCart = [...products, { ...submittedProduct, amount: submittedAmount }]
        setProducts(newCart);
        
    }

    const addToCart = (submittedProduct, amount) => {
        const product = getFromCart(submittedProduct)

        product.isInCart ? updateAmount(product.index, amount)
            : pushToCart(submittedProduct, amount)
    }

    const addOrSubtractProduct = (modifiedProduct, addOrSubtract) => {

        const product = getFromCart(modifiedProduct)

        if (!product.isInCart) { return }

        if (addOrSubtract == 'add') {
            updateAmount(product.index, 1)
        }

        if (products[product.index].amount <= 0) { return }

        if (addOrSubtract == 'subtract') {
            updateAmount(product.index, -1)
        }


    }

    const clearCart = () => {
        setProducts([])
        setTotalProducts(0)
        setTotalCost(0)
        
    };

    useEffect(()=>{
        updateTotals()
        updateSessionStorage()

    }, [products, totalProducts, totalCost])



    return (
        <CartContext.Provider value={{ products, totalProducts, totalCost, removeProduct, addToCart, addOrSubtractProduct, clearCart }}>
            {children}
        </CartContext.Provider>
    )
}