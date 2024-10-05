import { useEffect, useState } from "react"

export const useCurrency = (price, currency) => {

  const [formattedPrice, setFormattedPrice] = useState("")

  const currencies = {
    USD: () => {
      const USformatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
      })
      setFormattedPrice("US" + USformatter.format(price))
    }
  }

  useEffect(currencies[currency], [price])

  return formattedPrice
  }