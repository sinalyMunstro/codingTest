# Fintech Transaction Task

## Problem Statement

You are building a feature for a fintech app that processes financial transactions. Each transaction involves a certain amount, and a fee needs to be calculated based on the transaction amount. Additionally, transactions must be validated to ensure they meet specific criteria.

### Task

Write a function `processTransactions(transactions: Transaction[], feePercentage: number): ProcessedTransaction[]` that:
1. Takes a list of transactions. Each transaction includes:
   - `id` (string): A unique identifier for the transaction.
   - `amount` (number): The transaction amount in cents.
   - `currency` (string): The currency of the transaction (e.g., "USD", "EUR").
2. A `feePercentage` (number) representing the fee to be applied to each transaction (e.g., 2.9%).
3. Returns a list of processed transactions. Each processed transaction includes:
   - `id` (string): The original transaction ID.
   - `amount` (number): The original transaction amount.
   - `fee` (number): The calculated fee.
   - `netAmount` (number): The amount after deducting the fee.
   - `currency` (string): The currency of the transaction.

### Requirements

- Calculate the fee for each transaction based on the `feePercentage`.
- Ensure the `netAmount` is calculated correctly by subtracting the fee from the amount.
- Validate that the amount is greater than zero and the currency is one of the supported currencies ("USD", "EUR").
- Return an empty list if any validation fails for any transaction.

### Example

```typescript
const transactions: Transaction[] = [
    { id: "tx1", amount: 10000, currency: "USD" },
    { id: "tx2", amount: 5000, currency: "EUR" },
    { id: "tx3", amount: -100, currency: "USD" }
];
const feePercentage = 2.9;

console.log(processTransactions(transactions, feePercentage));
// Output: [{ id: "tx1", amount: 10000, fee: 290, netAmount: 9710, currency: "USD" }, { id: "tx2", amount: 5000, fee: 145, netAmount: 4855, currency: "EUR" }]

## Instructions

1. Clone this repository.
2. Implement the `processTransactions` function in `src/index.ts`.
3. Commit and push your changes.
4. Create a pull request to this repository.

## Setup

```bash
# Install dependencies
npm install

# Run tests
npm test
