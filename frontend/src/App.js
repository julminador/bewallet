import { Balance } from "./Balance.js";
import { LastTransactions } from "./LastTransactions.js";
import { BottomNavigation } from "./BottomNavigation.js";
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Hello world</h1>
      <Balance />
      <LastTransactions />
      <BottomNavigation />
    </div>
  );
}

export default App;
