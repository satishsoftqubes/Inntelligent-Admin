import { Col, Row } from "react-bootstrap";
import { ReactComponent as LoginLogo } from "../../../src/assets/Images/LoginPage/login-logo.svg";
import LoginLeftImg from "../../../src/assets/Images/LoginPage/login-img.png";
import AuthLogin from "./AuthLogin";
import { ClientSelection } from "./ClientSelection";
import ForgotPass from "./ForgotPass";

function AuthLayout() {
  return (
    <div className="login-page">
      <div className="container-fluid">
        <Row className="m-0">
          <Col md="6" className="p-0">
            <div className="left-col">
              <img src={LoginLeftImg} alt="login-left-img" />
            </div>
          </Col>
          <Col md="6" className="p-0">
            <div className="right-col d-flex justify-content-center h-100 w-100">
              <div className="login-section">
                <div className="login-logo">
                  <LoginLogo />
                </div>
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
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default AuthLayout;
