import { Form, FormControl, InputGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import LoginButtonIcon from "../../../src/assets/Images/Icons/LoginButtonIcon.svg";
import LoginUserIcon from "../../../src/assets/Images/Icons/LoginUserIcon.svg";

function ForgotPass() {
  return (
    <>
      <div className="login-title">Forgot Password</div>
      <p className="login-description">
        Enter your &ldquo; Inntelligent CRM &rdquo; register email or user uame
      </p>
      <Form>
        <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon1">
            <span>
              <img src={LoginUserIcon} alt="" />
            </span>
          </InputGroup.Text>
          <FormControl
            type="email"
            placeholder="Enter Registered E-mail"
            aria-label="Enter Registered E-mail"
            aria-describedby="basic-addon1"
          />
        </InputGroup>
        <Form.Group className="form-button d-flex ">
          <Link className="btn btn-primary" to="/home">
            <span className="me-3">
              <img src={LoginButtonIcon} alt="" />
            </span>
            Get Password
          </Link>
          <Link className="btn btn-btn-secondary" to="/">
            <span className="me-3">
              <img src={LoginButtonIcon} alt="" />
            </span>
            Cancle
          </Link>
        </Form.Group>
      </Form>
    </>
  );
}

export default ForgotPass;
