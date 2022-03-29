export function TransactionsTableRow({ transaction }) {
	return (
		<tr>
			<td>{transaction.date}</td>
			<td>{transaction.amount}</td>
			<td>{transaction.merchant}</td>
		</tr>
	);
}
