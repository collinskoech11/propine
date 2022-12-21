const getAllBalance = (data:any) => {
    let initialBalances:any = {
        BTC:0,
        XRP:0,
        ETH:0
    }
    let x = data.length-1
    while(x>=0){
        let token = data[x].token
        if(data[x].transaction_type == "DEPOSIT"){
            var current_amount:number = initialBalances[token]
            current_amount += Number(data[x].amount)
            initialBalances[token] = current_amount
        } else if (data[x].transaction_type == "WITHDRAW") {
            var current_amount:number = initialBalances[token]
            current_amount -= Number(data[x].amount)
            initialBalances[token] = current_amount
        }
        x--;
    }
    return initialBalances;
}
export default getAllBalance
