# Get Started 

### git clone https://github.com/collinskoech11/propineInterview

## run the server

### cd propineInterview

### npm install 

### npm start 

## get the latest portfolio value per token in USD 

### GET: http://localhost:3000/get-all-balances

## get the latest portfolio value for a given token 

### GET: http://localhost:3000/get-single-token/<token_symbol>

pass in the token symbol e.g BTC as the token_symbol to get the USD value for BTC

## get the return portfolio value per token in USD on a specific date 

### GET: http://localhost:3000/token-balance-by-date/<date>

pass in the date e.g 22-12-1978 as the date to get the USD value for all tokens at that date 

## get the return portfolio value in USD on a specific date  on a specific token 

### GET: http://localhost:3000/token-balance-by-date/<date>/<token_symbol>

pass in the date e.g 22-12-1978 and the token symbol eg BTC as the date to get the USD value for all tokens at that date 

## Design Pattenrs 

### Getting all tokens listed in the csv data 

for this I had to iterate through the whole dataset keeping track of all unique token_symbols using a hashset 

### Getting the current portfolio value of all listed tokens 

for this I created a balance_map dictionary containing all the listed unique listed tokens from the hashset above as the keys and added an initial value of 0

I then iterated through the dataset in reverse order due to the timestamp order supplied in the dataset checking if the transaction_type is  of deposit or withdraw 

If transaction is a withdraw I would then subtract the amount from the balance_map value of the token within that specific transaction

If transaction is a deposit I would then add the amount from the balance_map value of the token within that specific transaction


### Getting the portfolio value of a specific token 

using the token symbol supplied as params in the api query I isolated the balance of that specific token symbol from the balance_map used in the previos request

### Getting the portfolio value as per a specific date

I first convert the date supplied as params in the request to an Epoch timestamp

 I would then iterate through the whole dataset checking that the supplied timestamp is grater than or equal to the timestamp of that specific transaction adding the ammount if the transaction_type is of deposit ad deduct if the transaction_type is withdraw . I then stored the balances in a balance_map containing the token_symbol as the key and the balances as value

### Getting the portfolio value as per a specific date for a specific token

I first convert the date supplied as params in the request to an Epoch timestamp

I would then iterate through the whole dataset checking that the supplied timestamp is grater than or equal to the timestamp of that specific transaction adding the ammount if the transaction_type is of deposit ad deduct if the transaction_type is withdraw . I then stored the balances in a balance_map containing the token_symbol as the key and the balances as value

I would then isolate the balance based on the token_symbol supplied as params in the request
