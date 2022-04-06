import classes from './styles.module.css';
export function AmountSummary({ transactions }) {
	const total = calculateTransactionsTotal(transactions);
	return <div className={classes.totalAmount}>total : {total}</div>;
}
export default function calculateTransactionsTotal(transactions) {
	return transactions.reduce(
		(total, currentAmount) => (total = total + currentAmount.amount),
		0
	);
}
