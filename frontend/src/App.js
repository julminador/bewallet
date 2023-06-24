import { Balance } from "./Balance.js";
import { LastTransactions } from "./LastTransactions.js";
import { BottomNavigation } from "./BottomNavigation.js";
import { Container, Row, Col } from "react-bootstrap";
// import './App.css';

function App() {
  return (
    <Container fluid>
      <Row>
        <Col>
          <h3>Julian Sanchez</h3>
          <Balance />
          <LastTransactions />
          <BottomNavigation />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
