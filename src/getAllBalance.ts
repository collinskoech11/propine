const getAllBalance = (data:any) => {
    let initialBalances:any = {
        BTC:0,
        XRP:0,
        ETH:0
    }
    for(var i of data){
        let token = i.token
        if(i.transaction_type == "DEPOSIT"){
            var current_amount:number = initialBalances[token]
            current_amount += Number(i.amount)
            initialBalances[token] = current_amount
        } else {
            var current_amount:number = initialBalances[token]
            current_amount -= Number(i.amount)
            initialBalances[token] = current_amount
        }
    }
    return initialBalances;
}
export default getAllBalance