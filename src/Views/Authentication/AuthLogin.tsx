import { useState } from "react";
import { Form, FormControl, InputGroup } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
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
        <span className="d-block">Login</span>
      </div>
      <Form>
        <InputGroup className="mb-3 mb-lg-4">
          <FormControl
            type="email"
            placeholder="Enter User ID"
            aria-label="Enter User ID"
            name="Enter User ID"
            aria-describedby="basic-addon1"
          />
          <InputGroup.Text id="basic-addon1">
            <span>
              <img src={LoginUserIcon} alt="" width={24} height={24} />
            </span>
          </InputGroup.Text>
        </InputGroup>
        <InputGroup className="mb-3 mb-lg-4 position-relative">
          <FormControl
            type={ShowPassword ? "text" : "Password"}
            name="Enter Password"
            placeholder="Enter Password"
            aria-label="Enter Password"
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
                <i className="fa-regular fa-eye-slash"></i>
              </span>
            ) : (
              <span
                role="button"
                tabIndex={-1}
                onClick={() => showPassword()}
                onKeyDown={() => showPassword()}
              >
                <i className="fa-regular fa-eye"></i>
              </span>
            )}
          </div>
        </InputGroup>
        <Form.Group className="form-button">
          <button onClick={loginClick} className="btn btn-primary" type="button">
            Login
          </button>
          <Link className="forgot-link" to="/forgotPassword">
            Forgot Password?
          </Link>
        </Form.Group>
      </Form>
    </>
  );
}

export default AuthLogin;
