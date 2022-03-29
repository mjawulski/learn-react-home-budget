import { TransactionsTable } from "./TransactionsTable/TransactionsTable";
import classes from "./styles.module.css";

export function TransactionsSummary({ transactions }) {
  return (
    <>
      <h4 className={classes.titleName}>Transactions</h4>
      <TransactionsTable transactions={transactions} />
    </>
  );
}
