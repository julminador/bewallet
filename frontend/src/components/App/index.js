
import { AppUI } from "./AppUI.js";

function App() {
  const lastTransactions = [
    {
      noteId: 1,
      category: "Salary",
      value: 600,
    },
    {
      noteId: 2,
      category: "Bills",
      value: -100,
    },
  ];

  const income = 600;
  const expenses = 100;
  const balance = 500;

  return (
    <AppUI
      income={income}
      expenses={expenses}
      balance={balance}
      lastTransactions={lastTransactions}
    />
  )
}

export default App;
