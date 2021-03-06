import { AmountSummary } from '../AmountSummary/AmountSummary';
import { TransactionsTableRow } from '../TransactionsTableRow/TransactionsTableRow';
import classes from './styles.module.css';

export function TransactionsTable({ transactions }) {
	return (
		<table className={classes.transactionsTable}>
			{transactions.map(transaction => {
				return <TransactionsTableRow transaction={transaction} />;
			})}
			<AmountSummary transactions={transactions} />
		</table>
	);
}
