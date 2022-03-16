import { TransactionsTableRow } from "../TransactionsTableRow/TransactionsTableRow";

export function TransactionsTable({ transactions }) {
  return (
    <table>
      {transactions.map((transaction) => {
        return <TransactionsTableRow transaction={transaction} />;
      })}
    </table>
  );
}
