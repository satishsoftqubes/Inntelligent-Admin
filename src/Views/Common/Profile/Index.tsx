import { Col, Container, FloatingLabel, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Avatar from "../../../assets/Images/Profile/Avatar.png";
import DarkProfileBgcutOut from "../../../assets/Images/Profile/dark-profile-bg-cut-out.svg";
import LightProfileBgcutOut from "../../../assets/Images/Profile/profile-bg-cut-out.svg";
import ProfileBgImg from "../../../assets/Images/Profile/profile-bg-img.jpg";
import ChangePass from "./ChangePass";
import ProfileSideTabs from "./ProfileSideTabs";

function UserProfile() {
  const toggleProfileLayout =
    window.location.pathname === "/userProfile" ? <ProfileSideTabs /> : <ChangePass />;
  const toggleProfileSidebar =
    window.location.pathname === "/userProfile" ? (
      <>
        <h5 className="d-flex align-items-center justify-content-between mb-4">
          Contact Information
          <span>
            <i className="fa-regular fa-pen-to-square"></i>
          </span>
        </h5>
      </>
    ) : (
      <>
        <h5 className="d-flex align-items-center justify-content-between mb-4">
          Contact Information
        </h5>
      </>
    );
  return (
    <div className="profile-page">
      <Container fluid={true}>
        <Row>
          <Col lg={3}>
            <div className="profile-image-area mb-4">
              <div className="upper-area-img">
                <img src={ProfileBgImg} alt="" />
                <img className="cutout-img light-img" src={LightProfileBgcutOut} alt="" />
                <img className="cutout-img dark-img" src={DarkProfileBgcutOut} alt="" />
              </div>
              <div className="lower-area-img">
                <span>
                  <img src={Avatar} alt="" width="136" height="136" />
                  <div className="upload-area">
                    <input type="file" id="profile-img" className="upload-profile-field" />
                    <label className="upload-img-btn" htmlFor="profile-img">
                      <i className="fa-light fa-camera"></i>
                    </label>
                  </div>
                </span>
              </div>
            </div>
            <div className="info-area">
              <div>
                {toggleProfileSidebar}

                <div>
                  <div className="mb-4">
                    <FloatingLabel controlId="floatingInput" label="User Name">
                      <Form.Control
                        type="text"
                        placeholder="User Name"
                        defaultValue="ChristineRonning"
                      />
                    </FloatingLabel>
                  </div>
                  <div className="mb-4">
                    <FloatingLabel controlId="floatingInput" label="First Name">
                      <Form.Control type="text" placeholder="First Name" defaultValue="Christine" />
                    </FloatingLabel>
                  </div>
                  <div className="mb-4">
                    <FloatingLabel controlId="floatingInput" label="Last Name">
                      <Form.Control type="text" placeholder="Last Name" defaultValue="Ronning" />
                    </FloatingLabel>
                  </div>
                </div>
              </div>
              <div className="d-flex align-items-center change-password-text">
                <Link to="/changePassword">
                  <span className="fw-semibold">Change Password</span>
                </Link>
              </div>
              <div className="d-flex align-items-center justify-content-between">
                <div className="d-flex flex-column">
                  <span>Last Login</span>
                  <span className="fw-semibold">Today, 10:00 AM</span>
                </div>
                <div>
                  <button className="icon-btn">
                    <i className="fa-light fa-arrow-right-from-bracket"></i>
                  </button>
                </div>
              </div>
            </div>
          </Col>
          <Col xs={9}>{toggleProfileLayout}</Col>
        </Row>
      </Container>
    </div>
  );
}

export default UserProfile;
