import { Row, Col } from "react-bootstrap";
import { ListGroup } from 'react-bootstrap';

function LastTransactions({
  lastTransactions,
}) {
  return (
    <>
      <h5>Last transactions</h5>
      <ListGroup>
        {lastTransactions.map((transaction) => (
          <ListGroup.Item key={transaction.noteId}>
            <Row>
              <Col xs={9}>
                {transaction.category}
              </Col>
              <Col xs={3}>
                ${transaction.value}
              </Col>
            </Row>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </>
  );
}

export { LastTransactions }