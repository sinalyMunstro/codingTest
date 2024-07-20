import { processTransactions, Transaction } from '../src';

describe('processTransactions', () => {
    it('should correctly process valid transactions', () => {
        const transactions: Transaction[] = [
            { id: "tx1", amount: 10000, currency: "USD" },
            { id: "tx2", amount: 5000, currency: "EUR" }
        ];
        const feePercentage = 2.9;

        const result = processTransactions(transactions, feePercentage);
        expect(result).toEqual([
            { id: "tx1", amount: 10000, fee: 290, netAmount: 9710, currency: "USD" },
            { id: "tx2", amount: 5000, fee: 145, netAmount: 4855, currency: "EUR" }
        ]);
    });

    it('should return an empty list if any transaction is invalid', () => {
        const transactions: Transaction[] = [
            { id: "tx1", amount: 10000, currency: "USD" },
            { id: "tx2", amount: -5000, currency: "EUR" }
        ];
        const feePercentage = 2.9;

        const result = processTransactions(transactions, feePercentage);
        expect(result).toEqual([]);
    });

    it('should return an empty list if any currency is unsupported', () => {
        const transactions: Transaction[] = [
            { id: "tx1", amount: 10000, currency: "USD" },
            { id: "tx2", amount: 5000, currency: "GBP" }
        ];
        const feePercentage = 2.9;

        const result = processTransactions(transactions, feePercentage);
        expect(result).toEqual([]);
    });
});
