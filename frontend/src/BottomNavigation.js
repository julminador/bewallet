
import { Row, Col } from "react-bootstrap";
import { BiSolidPlusCircle } from 'react-icons/bi/index.esm.js';
import "./BottomNavigation.css";

function BottomNavigation() {
  return(
    <Row className="justify-content-md-center">
      <Col>
        <div className='bottomNav'>
          <a className="rounded-button" href="#">
            <BiSolidPlusCircle />
          </a>
        </div>
      </Col>
    </Row>
  )
}

export { BottomNavigation }