import data from "../data/data"
import getAllBalance from "../utils/getAllBalance"
import getRates from "../Conversion/getRates"
import toUsd from "../Conversion/toUsd"

const currentBalance = async() => {
    const balances:any = getAllBalance(data)
    const rates:any = await getRates()
    let usdBalances = toUsd(balances, rates)
    return usdBalances;
}
export default currentBalance;