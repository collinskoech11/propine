import singleTokenToUsd from "../Conversion/singleTokenToUsd"
import getRates from "../Conversion/getRates"
const getSingleToken  = async(symbol:string, balances:any) => {
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


// https://docs.google.com/spreadsheets/d/e/2PACX-1vSEkGjuZ19elMAgXIfGD6-gsbinqwwfkhYThpl5UGnjIYbIROcFPzbG-1-dvtvgIDA5D_jn_LS1w1ZQ/pubhtml?gid=1179367319&single=true&alt=json