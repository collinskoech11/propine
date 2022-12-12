const getSingleToken  = async(symbol:any, balances:any) => {
    for(let TokenSymbol in balances){
        if(symbol == TokenSymbol){
            return {symbol:balances[symbol]}
        }
    }
}
export default getSingleToken