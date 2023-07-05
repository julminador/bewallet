import { Balance } from "./Balance.js";
import { LastTransactions } from "./LastTransactions.js";
import { BottomNavigation } from "./BottomNavigation.js";
import { Container, Row, Col } from "react-bootstrap";
// import './App.css';

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
    <Container fluid>
      <Row>
        <Col>
          <h3>Julian Sanchez</h3>
          <Balance
            income={income}
            expenses={expenses}
            balance={balance}
          />
          <LastTransactions
            lastTransactions={lastTransactions}
          />
          <BottomNavigation />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
