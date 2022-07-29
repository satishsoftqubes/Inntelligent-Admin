import { Button, Col, Container, FloatingLabel, Form, Row } from "react-bootstrap";
import BlackCancelIcon from "../../../assets/Images/Icons/blackCancelIcon.svg";
import WhiteSaveIcon from "../../../assets/Images/Icons/whiteSaveIcon.svg";

function ChangePass() {
  return (
    <Row>
      <Container fluid={true}>
        <h5 className="d-flex align-items-center justify-content-between mb-4">Change Password</h5>
        <Row>
          <Col xs={6} className="mb-3">
            <FloatingLabel controlId="floatingInput" label="Current Password">
              <Form.Control type="text" placeholder="Current Password" />
            </FloatingLabel>
          </Col>
        </Row>
        <Row>
          <Col xs={6} className="mb-3">
            <FloatingLabel controlId="floatingInput" label="New Password">
              <Form.Control type="password" placeholder="New Password" />
            </FloatingLabel>
          </Col>
        </Row>
        <Row>
          <Col xs={6} className="mb-3">
            <FloatingLabel controlId="floatingInput" label="Confirm New Password">
              <Form.Control type="text" placeholder="Confirm New Password" />
            </FloatingLabel>
          </Col>
        </Row>
        <Row>
          <Col xs={12} className="mb-3 d-flex gap-2">
            <Button variant="secondary">
              <span className="me-2">
                <img src={BlackCancelIcon} alt="" />
              </span>
              Cancle
            </Button>
            <Button variant="primary">
              <span className="me-2">
                <img src={WhiteSaveIcon} alt="" />
              </span>
              Save
            </Button>
          </Col>
        </Row>
      </Container>
    </Row>
  );
}

export default ChangePass;
