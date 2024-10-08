import { collection, doc, getDoc, getDocs, query, where } from "firebase/firestore"
import { useEffect, useState } from "react"
import { db } from "../services/config"

export const useProducts = (filterProperty, filterValue) => {

    const [products, setProducts] = useState([])

    useEffect(() => {

        if (filterProperty == "id") {
            getDoc(doc(db, "products", filterValue))
                .then(response => {
                    const productObject = { id: filterValue, ...response.data() }

                    setProducts(productObject)
                }).catch()
        return
        }

    const arePropertyAndValueUndefined = (filterProperty == undefined && filterValue == undefined)

    const productsCollection =
        arePropertyAndValueUndefined ? collection(db, "products") :
            query(collection(db, "products"), where(filterProperty, "==", filterValue))

    getDocs(productsCollection)
        .then(response => {

            const productsArray = response.docs.map(doc => ({ id: doc.id, ...doc.data() }))

            setProducts(productsArray)
        })
        .catch()

}, [filterValue])

return products

}