import { useState } from "react";
import { Form, FormControl, InputGroup } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import LoginButtonIcon from "../../../src/assets/Images/Icons/LoginButtonIcon.svg";
import LoginKeyIcon from "../../../src/assets/Images/Icons/LoginKeyIcon.svg";
import LoginUserIcon from "../../../src/assets/Images/Icons/LoginUserIcon.svg";

function AuthLogin() {
  const [ShowPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  function loginClick() {
    navigate("/clientSelection");
  }

  function showPassword() {
    setShowPassword(!ShowPassword);
  }
  return (
    <>
      <div className="login-title">
        Sign in to
        <span className="d-block">
          your account <span className="three-dots">...</span>
        </span>
      </div>
      <p className="login-description">
        Specific-Measureable-Action Plan Driven-Realistic-TIme Oriented Customer Relationship
        Management System, built by hoteliers for hoteliers, offering organization, automation and
        synchronization of all your sales offers via a cloud based platform.
      </p>
      <Form>
        <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon1">
            <span>
              <img src={LoginUserIcon} alt="" width={24} height={24} />
            </span>
          </InputGroup.Text>
          <FormControl
            type="email"
            placeholder="Username"
            aria-label="Username"
            name="userName"
            aria-describedby="basic-addon1"
          />
        </InputGroup>
        <InputGroup className="mb-3 position-relative">
          <InputGroup.Text id="basic-addon1">
            <span>
              <img src={LoginKeyIcon} alt="" width={24} height={24} />
            </span>
          </InputGroup.Text>
          <FormControl
            type={ShowPassword ? "text" : "password"}
            name="password"
            placeholder="Password"
            aria-label="Password"
            aria-describedby="basic-addon1"
            autoComplete="current-password"
          />

          <div className="eye-visible">
            {ShowPassword ? (
              <span
                role="button"
                tabIndex={-1}
                onClick={() => showPassword()}
                onKeyDown={() => showPassword()}
              >
                <i className="fa-solid fa-eye-slash"></i>
              </span>
            ) : (
              <span
                role="button"
                tabIndex={-1}
                onClick={() => showPassword()}
                onKeyDown={() => showPassword()}
              >
                <i className="fa-solid fa-eye"></i>
              </span>
            )}
          </div>
        </InputGroup>
        <Form.Group className="form-button d-flex justify-content-between">
          <button onClick={loginClick} className="btn btn-primary" type="button">
            <span className="me-3">
              <img src={LoginButtonIcon} alt="" />
            </span>
            Login
          </button>
          <Link className="forgot-link d-flex align-items-center" to="/forgotPassword">
            Forgot Password ?
          </Link>
        </Form.Group>
      </Form>
    </>
  );
}

export default AuthLogin;
