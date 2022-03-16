import { TransactionsTable } from "./TransactionsTable/TransactionsTable";

export function TransactionsSummary({ transactions }) {
  return (
    <>
      <h4>Transactions</h4>
      <TransactionsTable transactions={transactions} />
    </>
  );
}
