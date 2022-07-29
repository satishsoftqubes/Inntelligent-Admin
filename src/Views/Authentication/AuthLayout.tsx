import { Col, Row } from "react-bootstrap";
import { ReactComponent as LoginLogo } from "../../../src/assets/Images/LoginPage/login-logo.svg";
import AuthLogin from "./AuthLogin";
import ForgotPass from "./ForgotPass";

function AuthLayout() {
  const toggleAuthLayout = window.location.pathname === "/" ? <AuthLogin /> : <ForgotPass />;

  return (
    <div className="login-page">
      <div className="container-fluid p-0">
        <Row className="m-0">
          <Col lg="6" className="p-0">
            <div className="left-col d-flex h-100 w-100">
              <div className="login-logo">
                <span>
                  <LoginLogo />
                </span>
              </div>
            </div>
          </Col>
          <Col lg="6" className="p-0">
            <div className="right-col d-flex h-100 w-100  justify-content-center align-items-center">
              <div className="login-section">{toggleAuthLayout}</div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default AuthLayout;
