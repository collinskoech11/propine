import data from "../data/data";
import toUsd from "../Conversion/toUsd";
import getRates from "../Conversion/getRates";
const convertToTimestamp = (latestDate:any) => {
    var myDate = latestDate.split("-");
    var newDate = new Date(myDate[2], myDate[1]-1, myDate[0]).getTime();
    return newDate
}
const dateBalances = async(latestDate:any) => {
    const dateTimestamp:number = convertToTimestamp(latestDate)
    let timeStampedBalances:any = {
        BTC:0,
        XRP:0,
        ETH:0
    }
    let i = data.length-1;
    while(i>=0){
        let stamp:number = Number(data[i].timestamp)
        if(dateTimestamp>=stamp){
            let token = data[i].token
            if(data[i].transaction_type == "DEPOSIT"){
                var current_amount:number = timeStampedBalances[token]
                current_amount += Number(data[i].amount)
                timeStampedBalances[token] = current_amount
            } else {
                var current_amount:number = timeStampedBalances[token]
                current_amount -= Number(data[i].amount)
                timeStampedBalances[token] = current_amount
            }
            i--;
        } else{
            const rates:any = await getRates()
            const balancesToUsd =await toUsd(timeStampedBalances, rates)
            return balancesToUsd
        }
    }
    const rates:any = await getRates()
    const balancesToUsd =await toUsd(timeStampedBalances, rates)
    return balancesToUsd
}
export default dateBalances;