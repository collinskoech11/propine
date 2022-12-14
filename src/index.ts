import express from "express"
import dotenv from "dotenv"
import currentBalance from "./Routes/CurrentBalance"
import getTokenBalance from "./Routes/singleTokenBalance"
import dateBalances from "./Routes/DateBalances"
import {GoogleSpreadsheet} from "google-spreadsheet"
import getData from "./data/ReadData"
import { Console } from "console"


dotenv.config()

const app = express()
const port = process.env.PORT


app.get('/token-balance-by-date/:date', async(req:any, res:any, next:any) => {
    const latestDate:any = req.params.date;
    let result =await dateBalances(latestDate)
    res.send(result) 
})
app.get('/token-balance-by-date/:date/:token_symbol', async(req:any, res:any, next:any) => {
    const latestDate:any = req.params.date;
    const token_symbol:any = req.params.token_symbol
    let result =await dateBalances(latestDate)
    let singleTokenResult = result[token_symbol]
    res.send({token:token_symbol,balance:singleTokenResult}) 
})
app.get('/get-all-balances', async(req:any, res:any, next:any) => {
    const dataBalance:any = await currentBalance()
    console.log(dataBalance)
    res.send(dataBalance)
})
app.get('/get-single-token/:token_symbol', async(req:any, res:any, next:any) => {
    const token_symbol:any = req.params.token_symbol
    const symbolBalance = await getTokenBalance(token_symbol)

    res.send(symbolBalance)
})
app.get('/sheets', async(req:any, res:any) => {
    const allData = await getData()
    console.log(allData)
    res.send(allData)
})
app.listen(port, () => {
    console.log("server inakimbia kwa hii mtaa",port)
})