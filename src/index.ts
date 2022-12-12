import data from "./data/data"
import getAllBalance from "./getAllBalance"
import getRates from "./Conversion/getRates"
import toUsd from "./Conversion/toUsd"
import getSingleToken from "./getSingleToken"


async function call(){
    const balances:any = getAllBalance(data)

    const rates:any = await getRates()

    let usdBalances = toUsd(balances, rates)
    console.log("ETH",usdBalances)

    let singleToken = getSingleToken("BTC", balances)
    console.log(singleToken)
}
call()