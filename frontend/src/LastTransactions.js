import { Row, Col } from "react-bootstrap";
import { ListGroup } from 'react-bootstrap';

function LastTransactions(props) {
  const lastTransactions = [
    {
      category: "Salary",
      value: 600,
    },
    {
      category: "Bills",
      value: -100,
    },
  ];

  return (
    <>
      <h5>Last transactions</h5>
      <ListGroup>
        {lastTransactions.map((transaction) => (
          <ListGroup.Item>
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