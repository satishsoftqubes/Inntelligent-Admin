import { Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import GreenLabel from "../../../Component/Labels/GreenLabel/Index";
import RedLabel from "../../../Component/Labels/RedLabel/Index";
import GreyLabel from "../../../Component/Labels/GreyLabel/index";

function HeaderCommonSearch({ setCommonSearchModule, setSearchInput }) {
  return (
    <Container>
      <button
        className="btn-close"
        onClick={() => {
          setCommonSearchModule(false);
          setSearchInput("");
        }}
        type="button"
      ></button>
      <div className="bottom-line">
        <h2>Account</h2>
        <Row>
          <Col className="mb-3" xs={4}>
            <Card className="actitvity-cards">
              <div className="card-header d-flex align-items-start  justify-content-between p-0">
                <Link to="/accounts/details" className="activity-card-link">
                  Wells High School SHILO INN SHILO
                </Link>
                <RedLabel dangerLabel="Suspend" />
              </div>
              <div className="activity-code">
                <h6 className="mt-2 mb-2">1234567</h6>
              </div>
              <div className="grey-labels">
                <GreyLabel greyLabel="Account" />
                <GreyLabel greyLabel="Activity" />
                <GreyLabel greyLabel="RFP" />
                <GreyLabel greyLabel="LNR" />
                <GreyLabel greyLabel="Files" />
              </div>
            </Card>
          </Col>
          <Col className="mb-3" xs={4}>
            <Card className="actitvity-cards">
              <div className="card-header d-flex align-items-start  justify-content-between p-0">
                <Link to="/accounts/details" className="activity-card-link">
                  Wells High School SHILO INN SHILO
                </Link>
                <GreenLabel successLabel="Active" />
              </div>
              <div className="activity-code">
                <h6 className="mt-2 mb-2">1234567</h6>
              </div>
              <div className="grey-labels">
                <GreyLabel greyLabel="Account" />
                <GreyLabel greyLabel="Activity" />
                <GreyLabel greyLabel="RFP" />
                <GreyLabel greyLabel="LNR" />
                <GreyLabel greyLabel="Files" />
              </div>
            </Card>
          </Col>
          <Col className="mb-3" xs={4}>
            <Card className="actitvity-cards">
              <div className="card-header d-flex align-items-start  justify-content-between p-0">
                <Link to="/accounts/details" className="activity-card-link">
                  Wells High School SHILO INN SHILO
                </Link>
                <GreenLabel successLabel="Active" />
              </div>
              <div className="activity-code">
                <h6 className="mt-2 mb-2">1234567</h6>
              </div>
              <div className="grey-labels">
                <GreyLabel greyLabel="Account" />
                <GreyLabel greyLabel="Activity" />
                <GreyLabel greyLabel="RFP" />
                <GreyLabel greyLabel="LNR" />
                <GreyLabel greyLabel="Files" />
              </div>
            </Card>
          </Col>
          <Col className="mb-3" xs={4}>
            <Card className="actitvity-cards">
              <div className="card-header d-flex align-items-start  justify-content-between p-0">
                <Link to="/accounts/details" className="activity-card-link">
                  Wells High School SHILO INN SHILO
                </Link>
                <GreenLabel successLabel="Active" />
              </div>
              <div className="activity-code">
                <h6 className="mt-2 mb-2">1234567</h6>
              </div>
              <div className="grey-labels">
                <GreyLabel greyLabel="Account" />
                <GreyLabel greyLabel="Activity" />
                <GreyLabel greyLabel="RFP" />
                <GreyLabel greyLabel="LNR" />
                <GreyLabel greyLabel="Files" />
              </div>
            </Card>
          </Col>
          <Col className="mb-3" xs={4}>
            <Card className="actitvity-cards">
              <div className="card-header d-flex align-items-start  justify-content-between p-0">
                <Link to="/accounts/details" className="activity-card-link">
                  Wells High School SHILO INN SHILO
                </Link>
                <GreenLabel successLabel="Active" />
              </div>
              <div className="activity-code">
                <h6 className="mt-2 mb-2">1234567</h6>
              </div>
              <div className="grey-labels">
                <GreyLabel greyLabel="Account" />
                <GreyLabel greyLabel="Activity" />
                <GreyLabel greyLabel="RFP" />
                <GreyLabel greyLabel="LNR" />
                <GreyLabel greyLabel="Files" />
              </div>
            </Card>
          </Col>
          <Col className="mb-3" xs={4}>
            <Card className="actitvity-cards">
              <div className="card-header d-flex align-items-start  justify-content-between p-0">
                <Link to="/accounts/details" className="activity-card-link">
                  Wells High School SHILO INN SHILO
                </Link>
                <GreenLabel successLabel="Active" />
              </div>
              <div className="activity-code">
                <h6 className="mt-2 mb-2">1234567</h6>
              </div>
              <div className="grey-labels">
                <GreyLabel greyLabel="Account" />
                <GreyLabel greyLabel="Activity" />
                <GreyLabel greyLabel="RFP" />
                <GreyLabel greyLabel="LNR" />
                <GreyLabel greyLabel="Files" />
              </div>
            </Card>
          </Col>
          <Col className="mb-3" xs={4}>
            <Card className="actitvity-cards">
              <div className="card-header d-flex align-items-start  justify-content-between p-0">
                <Link to="/accounts/details" className="activity-card-link">
                  Wells High School SHILO INN SHILO
                </Link>
                <GreenLabel successLabel="Active" />
              </div>
              <div className="activity-code">
                <h6 className="mt-2 mb-2">1234567</h6>
              </div>
              <div className="grey-labels">
                <GreyLabel greyLabel="Account" />
                <GreyLabel greyLabel="Activity" />
                <GreyLabel greyLabel="RFP" />
                <GreyLabel greyLabel="LNR" />
                <GreyLabel greyLabel="Files" />
              </div>
            </Card>
          </Col>
          <Col className="mb-3" xs={4}>
            <Card className="actitvity-cards">
              <div className="card-header d-flex align-items-start  justify-content-between p-0">
                <Link to="/accounts/details" className="activity-card-link">
                  Wells High School SHILO INN SHILO
                </Link>
                <GreenLabel successLabel="Active" />
              </div>
              <div className="activity-code">
                <h6 className="mt-2 mb-2">1234567</h6>
              </div>
              <div className="grey-labels">
                <GreyLabel greyLabel="Account" />
                <GreyLabel greyLabel="Activity" />
                <GreyLabel greyLabel="RFP" />
                <GreyLabel greyLabel="LNR" />
                <GreyLabel greyLabel="Files" />
              </div>
            </Card>
          </Col>
        </Row>
      </div>
      <div>
        <h2>Contacts</h2>
        <Row>
          <Col className="mb-3" xs={4}>
            <Card className="actitvity-cards">
              <div className="card-header d-flex align-items-start  justify-content-between p-0">
                <Link to="/accounts/details" className="activity-card-link">
                  ELEVATOR SERVICES & STORAGE ...
                </Link>
              </div>
              <div className="accountant-name">
                <h6 className="mt-2 mb-2">Jim Gregory</h6>
              </div>
              <div className="activity-code d-flex justify-content-between">
                <h6 className="mt-2 mb-2">1234567</h6>
                <h6 className="mt-2 mb-2">1234567</h6>
              </div>
              <div className="accountant-email">
                <h6 className="mt-2 mb-2">info@essic.coms</h6>
              </div>
            </Card>
          </Col>
          <Col className="mb-3" xs={4}>
            <Card className="actitvity-cards">
              <div className="card-header d-flex align-items-start  justify-content-between p-0">
                <Link to="/accounts/details" className="activity-card-link">
                  ELEVATOR SERVICES & STORAGE ...
                </Link>
              </div>
              <div className="accountant-name">
                <h6 className="mt-2 mb-2">Jim Gregory</h6>
              </div>
              <div className="activity-code d-flex justify-content-between">
                <h6 className="mt-2 mb-2">1234567</h6>
                <h6 className="mt-2 mb-2">1234567</h6>
              </div>
              <div className="accountant-email">
                <h6 className="mt-2 mb-2">info@essic.coms</h6>
              </div>
            </Card>
          </Col>
          <Col className="mb-3" xs={4}>
            <Card className="actitvity-cards">
              <div className="card-header d-flex align-items-start  justify-content-between p-0">
                <Link to="/accounts/details" className="activity-card-link">
                  ELEVATOR SERVICES & STORAGE ...
                </Link>
              </div>
              <div className="accountant-name">
                <h6 className="mt-2 mb-2">Jim Gregory</h6>
              </div>
              <div className="activity-code d-flex justify-content-between">
                <h6 className="mt-2 mb-2">1234567</h6>
                <h6 className="mt-2 mb-2">1234567</h6>
              </div>
              <div className="accountant-email">
                <h6 className="mt-2 mb-2">info@essic.coms</h6>
              </div>
            </Card>
          </Col>
          <Col className="mb-3" xs={4}>
            <Card className="actitvity-cards">
              <div className="card-header d-flex align-items-start  justify-content-between p-0">
                <Link to="/accounts/details" className="activity-card-link">
                  ELEVATOR SERVICES & STORAGE ...
                </Link>
              </div>
              <div className="accountant-name">
                <h6 className="mt-2 mb-2">Jim Gregory</h6>
              </div>
              <div className="activity-code d-flex justify-content-between">
                <h6 className="mt-2 mb-2">1234567</h6>
                <h6 className="mt-2 mb-2">1234567</h6>
              </div>
              <div className="accountant-email">
                <h6 className="mt-2 mb-2">info@essic.coms</h6>
              </div>
            </Card>
          </Col>
          <Col className="mb-3" xs={4}>
            <Card className="actitvity-cards">
              <div className="card-header d-flex align-items-start  justify-content-between p-0">
                <Link to="/accounts/details" className="activity-card-link">
                  ELEVATOR SERVICES & STORAGE ...
                </Link>
              </div>
              <div className="accountant-name">
                <h6 className="mt-2 mb-2">Jim Gregory</h6>
              </div>
              <div className="activity-code d-flex justify-content-between">
                <h6 className="mt-2 mb-2">1234567</h6>
                <h6 className="mt-2 mb-2">1234567</h6>
              </div>
              <div className="accountant-email">
                <h6 className="mt-2 mb-2">info@essic.coms</h6>
              </div>
            </Card>
          </Col>
          <Col className="mb-3" xs={4}>
            <Card className="actitvity-cards">
              <div className="card-header d-flex align-items-start  justify-content-between p-0">
                <Link to="/accounts/details" className="activity-card-link">
                  ELEVATOR SERVICES & STORAGE ...
                </Link>
              </div>
              <div className="accountant-name">
                <h6 className="mt-2 mb-2">Jim Gregory</h6>
              </div>
              <div className="activity-code d-flex justify-content-between">
                <h6 className="mt-2 mb-2">1234567</h6>
                <h6 className="mt-2 mb-2">1234567</h6>
              </div>
              <div className="accountant-email">
                <h6 className="mt-2 mb-2">info@essic.coms</h6>
              </div>
            </Card>
          </Col>
          <Col className="mb-3" xs={4}>
            <Card className="actitvity-cards">
              <div className="card-header d-flex align-items-start  justify-content-between p-0">
                <Link to="/accounts/details" className="activity-card-link">
                  ELEVATOR SERVICES & STORAGE ...
                </Link>
              </div>
              <div className="accountant-name">
                <h6 className="mt-2 mb-2">Jim Gregory</h6>
              </div>
              <div className="activity-code d-flex justify-content-between">
                <h6 className="mt-2 mb-2">1234567</h6>
                <h6 className="mt-2 mb-2">1234567</h6>
              </div>
              <div className="accountant-email">
                <h6 className="mt-2 mb-2">info@essic.coms</h6>
              </div>
            </Card>
          </Col>
          <Col className="mb-3" xs={4}>
            <Card className="actitvity-cards">
              <div className="card-header d-flex align-items-start  justify-content-between p-0">
                <Link to="/accounts/details" className="activity-card-link">
                  ELEVATOR SERVICES & STORAGE ...
                </Link>
              </div>
              <div className="accountant-name">
                <h6 className="mt-2 mb-2">Jim Gregory</h6>
              </div>
              <div className="activity-code d-flex justify-content-between">
                <h6 className="mt-2 mb-2">1234567</h6>
                <h6 className="mt-2 mb-2">1234567</h6>
              </div>
              <div className="accountant-email">
                <h6 className="mt-2 mb-2">info@essic.coms</h6>
              </div>
            </Card>
          </Col>
        </Row>
      </div>
    </Container>
  );
}

export default HeaderCommonSearch;
