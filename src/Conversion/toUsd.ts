const toUsd = async(init_balance:any, rates:any) => {
    var usd_prices:any = {}
    for(let symbol in init_balance){
        usd_prices[symbol] = init_balance[symbol]*rates[symbol]
    }
    return usd_prices
}
export default toUsd;