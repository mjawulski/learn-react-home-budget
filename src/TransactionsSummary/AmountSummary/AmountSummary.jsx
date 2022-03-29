import classes from './styles.module.css';
export function AmountSummary({ transactions }) {
	const total = transactions.reduce(
		(total, currentAmount) => (total = total + currentAmount.amount),
		0
	);
	return (
		<tr>
			<td className={classes.totalAmount} colSpan={3}>
				Total : {total}
			</td>
		</tr>
	);
}
