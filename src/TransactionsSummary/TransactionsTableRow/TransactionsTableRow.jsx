export function TransactionsTableRow({ transaction }) {
	// Tutaj zamiast null wpisz kod, ktory wyswietli wiersz tabeli z informacjami o dacie transakcji, sprzedawcy (merchant) i kwocie

	return (
		<tr>
			<td>{transaction.date}</td>
			<td>{transaction.amount}</td>
			<td>{transaction.merchant}</td>
		</tr>
	);
}
