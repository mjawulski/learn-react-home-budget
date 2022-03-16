import "./App.css";
import { TransactionsSummary } from "./TransactionsSummary/TransactionsSummary";

function App() {
  const transactions = [
    {
      amount: 100,
      merchant: "Biedronka",
      date: "2022-02-20",
      type: "GROCERIES",
    },
    {
      amount: 20.5,
      merchant: "Meet & Eat",
      date: "2022-02-22",
      type: "FAST_FOOD",
    },
    {
      amount: 526.45,
      merchant: "PKO Bank",
      date: "2022-02-20",
      type: "MORTAGE",
    },
  ];
  return (
    <div className="App">
      <TransactionsSummary transactions={transactions} />
    </div>
  );
}

export default App;
