import data from "../data/data"
import getAllBalance from "../getAllBalance"
import getRates from "../Conversion/getRates"
import toUsd from "../Conversion/toUsd"
import getSingleToken from "../getSingleToken"
const getTokenBalance = async(symbol:any) => {
    const balances:any = getAllBalance(data);
    let singleToken = getSingleToken(symbol, balances)
    return singleToken
}
export default getTokenBalance;

// {
//     "BTC": 98016.36049764001,
//     "XRP": 0.4711636927999999,
//     "ETH": 6118.009305799998
//   }