const fs = require('fs');
const moment = require('moment');

// Parse command line arguments
const [, , ...args] = process.argv;

// Read CSV file
const transactions = fs.readFileSync('transactions.csv', 'utf-8')
  .split('\n')
  .slice(1) // skip header row
  .map(line => line.split(','))
  .map(([timestamp, transactionType, token, amount]) => ({
    timestamp: parseInt(timestamp, 10),
    transactionType,
    token,
    amount: parseFloat(amount),
  }));

// Get portfolio value at a given timestamp
const getPortfolioValue = (timestamp, token = null) => {
  // Initialize portfolio value to 0
  let portfolioValue = 0;

  // Iterate through transactions and update portfolio value
  for (const {transactionType, token: t, amount} of transactions) {
    if (transactionType === 'DEPOSIT') {
      // Increase portfolio value for DEPOSIT transactions
      portfolioValue += amount;
    } else if (transactionType === 'WITHDRAWAL') {
      // Decrease portfolio value for WITHDRAWAL transactions
      portfolioValue -= amount;
    }

    // If a specific token is specified, only consider transactions for that token
    if (token && t !== token) {
      continue;
    }

    // If a timestamp is specified, only consider transactions that occurred before or at that timestamp
    if (timestamp && timestamp < moment.unix(timestamp).valueOf()) {
      continue;
    }
  }

  return portfolioValue;
};

// Handle command line arguments
if (args.length === 0) {
  // No arguments, return latest portfolio value per token
  console.log(getPortfolioValue());
} else if (args.length === 1) {
  // One argument, assume it is a token and return latest portfolio value for that token
  console.log(getPortfolioValue(null, args[0]));
} else if (args.length === 2) {
  // Two arguments, assume first is a date and second is a token
  console.log(getPortfolioValue(moment(args[0]).valueOf(), args[1]));
} else {
  console.error('Invalid number of arguments');
}
