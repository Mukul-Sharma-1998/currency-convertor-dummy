import { useEffect, useState } from "react";

function useCurrencyInfo(currency){
    const [data, setData] = useState({})
    useEffect(() => {
        // fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        // .then((res) => res.json())
        // .then((res) => setData(res[currency]))
        const simulatedData = {
            "usd": {
                "inr": "85",
                "eur": "0.25",
                "usd": "1"
            },
            "inr": {
                "inr": "1",
                "eur": "100",
                "usd": ".17"
            },
            "eur": {
                "inr": "200",
                "eur": "1",
                "usd": "0.75"
            }
        }
        setData(simulatedData[currency])

        
    }, [currency])

    useEffect(() => {
    }, [data]);

    return data
}

export default useCurrencyInfo;