
import { useContext, useState } from 'react'
import './Checkout.css'
import { CartContext } from '../../context/cartContext'
import { useCurrency } from '../../hooks/useCurrency'

const Checkout = () => {
    const { products, totalCost } = useContext(CartContext)
    const [name, setName] = useState("")
    const [lastName, setLastName] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")
    const [emailConfirmation, setEmailConfirmation] = useState("")
    const [emptyWarning, setEmptyWarning] = useState({
        name: false, lastName: false, phone: false, email: false, emailConfirmation: false
    })


    const handleBlurred = (e) => {

        let empty = { ...emptyWarning }

        e.target.value != "" ? empty[e.target.name] = false : empty[e.target.name] = true
        setEmptyWarning(empty)
    }

    return (
        <section id='checkout'>
            <form action="">

                <ul id='checkout-fields'>
                    <li className='checkout-field'>
                        <label htmlFor="">Name:</label>
                        <input name="name" type="text" onChange={e => setName(e.target.value)}
                            onBlur={handleBlurred} value={name} placeholder='Insert your name.' />
                        <span className='asterisk-warning'>
                            {emptyWarning["name"] && "*"}
                        </span>
                        <label htmlFor="">Last Name:</label>
                        <input name="lastName" type="text" onChange={e => setLastName(e.target.value)}
                            onBlur={handleBlurred} value={lastName} placeholder='Insert your last name.' />
                        <span className='asterisk-warning'>
                            {emptyWarning["lastName"] && "*"}
                        </span>
                    </li>
                    <li className='checkout-field'>
                        <label htmlFor="">Phone:</label>
                        <input name="phone" type="tel" onChange={e => setPhone(e.target.value)}
                            onBlur={handleBlurred} value={phone} placeholder='Insert your phone number.' />
                        <span className='asterisk-warning'>
                            {emptyWarning["phone"] && "*"}
                        </span>
                    </li>
                    <li className='checkout-field'>
                        <label htmlFor="">Email:</label>
                        <input name="email" type="email" onChange={e => setEmail(e.target.value)}
                            onBlur={handleBlurred} value={email} placeholder='Insert your email address.' />
                        <span className='asterisk-warning'>
                            {emptyWarning["email"] && "*"}
                        </span>
                    </li>
                    <li className='checkout-field'>
                        <label htmlFor="">Confirmation:</label>
                        <input name="confirmation" type="email" onChange={e => setEmailConfirmation(e.target.value)}
                            onBlur={handleBlurred} value={emailConfirmation} placeholder='Confirm your email.' />
                        <span className='asterisk-warning'>
                            {emptyWarning["confirmation"] && "*"}
                        </span>
                    </li>
                    <li>
                        <p className='asterisk-warning'>
                            {(emptyWarning["name"] || emptyWarning["lastName"] ||
                                emptyWarning["phone"] || emptyWarning["email"] ||
                                emptyWarning["confirmation"]) && "*Please, complete all fields."}
                        </p>
                    </li>
                    <li>
                        <p className='asterisk-warning'>
                            {(email != emailConfirmation) && "*Emails don't match."}
                        </p>
                    </li>
                </ul>

                <ul id='checkout-products'>
                    {products.map(p =>
                        <li className='checkout-product' key={p.id}>
                            <span>{p.name}</span>
                            <span>{" x" + p.amount}</span>
                            <span>{" " + useCurrency(p.price * p.amount, "USD")}</span>
                        </li>
                    )}
                    <li id='checkout-total'>
                        <span>Total: </span>
                        <span>{useCurrency(totalCost,"USD")}</span>
                    </li>
                </ul>
                <button type='submit'>SUBMIT ORDER</button>
            </form>
        </section>
    )
}

export default Checkout