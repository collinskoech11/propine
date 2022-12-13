import axios from "axios";
const singleTokenToUsd = async(token_symbol:any, balance:any) => {
    const restokenPrice = await axios.get(`https://min-api.cryptocompare.com/data/price?fsym=${token_symbol}&tsyms=USD`)
    const priceToken = restokenPrice.data.USD
    const usdPrice = balance*priceToken
    return usdPrice
}
export default singleTokenToUsd;