import axios from "axios"
const getRates = async() => {
    let tokens = ['ETH', 'BTC', 'XRP']
    let rates:any = {}
    for(const i of tokens){
        const resToken= await axios.get(`https://min-api.cryptocompare.com/data/price?fsym=${i}&tsyms=USD`)
        const priceToken = resToken.data.USD
        rates[i] = priceToken
    }
    return rates;
}
export default getRates