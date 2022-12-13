const getAllTokens  = (data:any) => {
    var tokensymbols = new Set()
    for(var i of data){
       tokensymbols.add(i.token)
    }
    console.log(tokensymbols)
    return tokensymbols
}
export default getAllTokens