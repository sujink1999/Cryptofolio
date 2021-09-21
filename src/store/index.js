import { useQuery } from "react-query"
const axios = require('axios');

const fetchCoins = async () => {

    let serverData = await axios.get("https://crypto-folio-server.herokuapp.com/top-coins")
    let { data } = serverData || {}
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



