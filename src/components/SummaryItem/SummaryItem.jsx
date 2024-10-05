import { useCurrency } from "../../hooks/useCurrency"
import './SummaryItem.css'

const SummaryItem = ({ product }) => {
    const { name, price, amount } = product

    const formattedPrice = useCurrency(price, "USD")
    const formattedTotal = useCurrency(price * amount, "USD")

    return (
        <>
            <p id="summary-product-name">{name}</p>
            <p id="summary-product-pricexamount">({formattedPrice} x {amount})</p>
            <p id="summary-product-total">{formattedTotal}</p>
        </>
    )
}

export default SummaryItem