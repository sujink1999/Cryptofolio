import { useQuery } from "react-query"
const axios = require('axios');

const fetchCoins = async () => {
    
    let { data } = await axios.get("https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?limit=100&start=1&convert=inr", {
        headers: { 
            'X-CMC_PRO_API_KEY': 'ad6632c1-9491-4b97-b235-8b51784e53e7',
        },
        responseType: "json",
    })

    let coins = []
    if (data && data.data) {
        coins = data.data
        coins = coins.map(coin => {
        const { circulating_supply, id, name, symbol, cmc_rank, quote } = coin
            const { INR } = quote || {}
            const { price, percent_change_7d, percent_change_24h } = INR || {}
            return {
                id,
                name,
                symbol,
                price : Math.round((price + Number.EPSILON) * 10000) / 10000,
                rank: cmc_rank,
                circulatingSupply : Math.round((circulating_supply + Number.EPSILON) * 10000) / 10000,
                oneDayChange: Math.round((percent_change_24h + Number.EPSILON) * 10000) / 10000,
                sevenDayChange : Math.round((percent_change_7d + Number.EPSILON) * 10000) / 10000,
        }
    })
    }
    return coins
    
}

export const useCoins = () => useQuery(['coins'], fetchCoins)



