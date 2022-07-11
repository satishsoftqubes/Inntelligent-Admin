import { Col, Row } from "react-bootstrap";
import { ReactComponent as LoginLogo } from "../../../src/assets/Images/LoginPage/login-logo.svg";
import AuthLogin from "./AuthLogin";
import { ClientSelection } from "./ClientSelection";
import ForgotPass from "./ForgotPass";

function AuthLayout() {
  return (
    <div className="login-page">
      <div className="container-fluid p-0">
        <Row className="m-0">
          <Col lg="8" className="p-0">
            <div className="left-col d-flex h-100 w-100">
              <div className="login-logo">
                <span>
                  <LoginLogo />
                </span>
              </div>
            </div>
          </Col>
          <Col lg="4" className="p-0">
            <div className="right-col d-flex h-100 w-100"></div>
          </Col>
          <div className="login-section">
            {window.location.pathname === "/" ? (
              <AuthLogin />
            ) : window.location.pathname === "/clientSelection" ? (
              <ClientSelection />
            ) : window.location.pathname === "/forgotPassword" ? (
              <ForgotPass />
            ) : (
              <AuthLogin />
            )}
          </div>
        </Row>
      </div>
    </div>
  );
}

export default AuthLayout;
