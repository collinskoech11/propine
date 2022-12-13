import singleTokenToUsd from "./Conversion/singleTokenToUsd"
import getRates from "./Conversion/getRates"
const getSingleToken  = async(symbol:string, balances:any) => {
    const rate = getRates()
    for(let TokenSymbol in balances){
        if(symbol == TokenSymbol){
            const returnableBalance = await singleTokenToUsd(symbol, balances[symbol])
            return {
                    "token":symbol,
                    "balance":returnableBalance
                }
        }
    }
}
export default getSingleToken