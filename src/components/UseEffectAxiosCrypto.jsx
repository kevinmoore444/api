import React, {useState, useEffect} from 'react'
import axios from 'axios'

const UseEffectAxiosCrypto = () => {
    const [coins, setCoins] = useState([])
    const [buttonClicked, setButtonClicked] = useState(false)

    useEffect(() => {
        axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false")
        .then((res) => {
        setCoins(res.data)
        })
        .catch((error) =>{
            console.log(error)
        })
        console.log("I'm doing my other task while waiting for my response")
    }, [buttonClicked])

  return (
    <div>
        <h1>Fetch API</h1>
        <button onClick={() => {setButtonClicked(!buttonClicked)}}>Click Me</button>
        {
            coins.map((c, i) => {
                return(
                    <div key={i}>
                        <img src={c.image} alt="coin image" height="100px"/>
                        <h1>{c.name}</h1>
                        <h3>{c.current_price}</h3>
                        <h5>{c.symbol.toUpperCase()}</h5>
                    </div>
                )
            })
        }
    </div>
  )
}

export default UseEffectAxiosCrypto