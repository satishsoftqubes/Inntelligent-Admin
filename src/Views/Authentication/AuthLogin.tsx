import { Form, FormControl, InputGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import LoginKeyIcon from "../../../src/assets/Images/Icons/LoginKeyIcon.svg";
import LoginUserIcon from "../../../src/assets/Images/Icons/LoginUserIcon.svg";
import { ReactComponent as LoginLogo } from "../../../src/assets/Images/LoginPage/loginLogo.svg";

function AuthLogin() {
  return (
    <>
      <div className="d-flex">
        <div className="innerSecLogin">
          <div className="loginLogo d-flex justify-content-center">
            <span>
              <LoginLogo />
            </span>
          </div>
          <div className="loginHead">
            <h1>Login</h1>
          </div>
          <Form>
            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon1">
                <span>
                  <img src={LoginUserIcon} alt="" />
                </span>
              </InputGroup.Text>
              <FormControl
                type="email"
                placeholder="Username"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </InputGroup>
            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon1">
                <span>
                  <img src={LoginKeyIcon} alt="" />
                  {/* <LoginKeyIcon /> */}
                </span>
              </InputGroup.Text>
              <FormControl
                type="password"
                placeholder="Password"
                aria-label="Password"
                aria-describedby="basic-addon1"
                autoComplete="current-password"
                id="password"
              />
            </InputGroup>
            <Form.Group className="form-button d-flex justify-content-between flex-column">
              <Link className="btn btn-primary loginBtn" to="/home">
                Login
              </Link>
              <Link className="forgot-link" to="/forgotPassword">
                Forgot Password ?
              </Link>
            </Form.Group>
          </Form>
        </div>
      </div>
    </>
  );
}

export default AuthLogin;
