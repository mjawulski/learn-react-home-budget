import { TransactionsTable } from './TransactionsTable/TransactionsTable';

export function TransactionsSummary({ transactions }) {
	return (
		<>
			<h4 className='titleName'>Transactions</h4>
			<TransactionsTable transactions={transactions} />
		</>
	);
}
