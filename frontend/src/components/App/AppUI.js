import { Balance } from "../Balance/index.js";
import { LastTransactions } from "../Transactions/LastTransactions.js";
import { BottomNavigation } from "../BottomNavigation/index.js";
import { Container, Row, Col } from "react-bootstrap";

function AppUI({
  income,
  expenses,
  balance,
  lastTransactions,
}) {
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

export { AppUI };