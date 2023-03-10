import React, { useState } from 'react'


const FetchApi = () => {
    const [coins, setCoins] = useState([])

    const fetchData = () => {
        fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false")
        // How we handle the data
        .then((response) => {
            // console.log(response)
            return response.json()
        })
        .then((response) => {
            console.log(response)
            setCoins(response)
        })

        // What happens if call is rejected
        .catch((error) => {
            console.log("This is a catch error", error)
        })
        console.log("I'm doing my other task while waiting for my response")
    }


  return (
    <div>
        <h1>Fetch API</h1>
        <button onClick={fetchData}>Click Me</button>
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

export default FetchApi
