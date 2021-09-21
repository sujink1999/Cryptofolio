const express = require("express");
const app = express();
var cors = require('cors')
var port = process.env.PORT || 5000
const axios = require('axios');
const dotenv = require('dotenv')
dotenv.config()

app.use(cors());

app.use('/', express.static('build'))

app.get("/top-coins", async (req, res) => {
    let response = await axios.get("https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?limit=100&start=1&convert=inr", {
        headers: { 
            'X-CMC_PRO_API_KEY': process.env.API_KEY,
        },
        responseType: "json",
    })
    res.send(response.data)
});

app.listen(port,() =>{})
