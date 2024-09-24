import { createContext, useEffect, useState } from "react";

export const CartContext = createContext({
    products: [],
    totalProducts: 0,
    totalCost: 0
})

export const CartContextProvider = ({ children }) => {

    const [totalProducts, setTotalProducts] = useState(0)
    const [totalCost, setTotalCost] = useState(0)
    const [products, setProducts] = useState([])

    const getFromCart = product => {

        const productIndex = products.findIndex(object => object.id == product.id)
        return { index: productIndex, isInCart: (productIndex != -1) }
    }

    const updateTotals = () => {

        setTotalProducts(0)
        setTotalCost(0)
        let totalProducts = 0
        let totalCost = 0

        products.map(object => {
            totalProducts = totalProducts + object.amount
            totalCost = totalCost + (object.amount * object.price)
        })

        setTotalProducts(totalProducts)
        setTotalCost(totalCost)
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
            : pushToCart(submittedProduct, amount);
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
    }

    useEffect(() => {
        updateTotals()
    }, [products])

    return (
        <CartContext.Provider value={{ products, totalProducts, totalCost, removeProduct, addToCart, addOrSubtractProduct, clearCart }}>
            {children}
        </CartContext.Provider>
    )
}