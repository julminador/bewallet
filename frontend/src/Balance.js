import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button, Row, Col } from "react-bootstrap";
import './Balance.css';

function Balance({
  balance,
  income,
  expenses,
}) {
  return (
    <>
      <h5>Overview</h5>
      <Card bg="dark" text='white'>
        <Card.Body>
          <Card.Title>My balance</Card.Title>
          <Card.Text>
            ${balance}
          </Card.Text>
          <Row>
            <Col>
              <Row>
                <Col xs={12}>
                  <small>Income</small>
                </Col>
                <Col xs={12}>
                  <p>${income}</p>
                </Col>
              </Row>
            </Col>
            <Col>
              <Row>
                <Col xs={12}>
                  <small>Expenses</small>
                </Col>
                <Col xs={12}>
                  <p>${expenses}</p>
                </Col>
              </Row>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </>
  );
}

export { Balance };