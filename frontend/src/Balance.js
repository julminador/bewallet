import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button, Row, Col } from "react-bootstrap";
import './Balance.css';

function Balance() {
  return (
    <>
      <h5>My balance</h5>
      <Card>
        <Card.Body>
          <Card.Title>My balance</Card.Title>
          <Card.Text>
            $500
            <Row>
              <Col xs={6}>
                <small>Income</small>
                <p>$600</p>
              </Col>
              <Col xs={6}>
                <small>Expenses</small>
                <p>$100</p>
              </Col>
            </Row>
          </Card.Text>
        </Card.Body>
      </Card>
      <div className="d-grid gap-2">
        <Button variant="secondary" size="lg">
          Transfer
        </Button>
      </div>
    </>
  );
}

export { Balance };