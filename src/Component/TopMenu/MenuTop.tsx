import "@szhsin/react-menu/dist/index.css";
import { Menu, MenuItem, SubMenu, MenuButton } from "@szhsin/react-menu";
import { Link } from "react-router-dom";
import ToList from "../../assets/Images/Icons/to-list.svg";
import PlusCircle from "../../assets/Images/Header/plus-circle.svg";
import ProfileImg from "../../assets/Images/Header/profile-img.png";
import CalendarIcon from "../../assets/Images/Header/calendar-icon.svg";
import DownArrow from "../../assets/Images/Header/down-arrow.svg";
import GmailIcon from "../../assets/Images/Header/gmail-icon.svg";
import Dropdown from "react-bootstrap/Dropdown";
import { Button, Col, FloatingLabel, Form, Modal, Row, Tooltip } from "react-bootstrap";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import BlackCancelIcon from "../../assets/Images/Icons/blackCancelIcon.svg";
import WhiteSaveIcon from "../../assets/Images/Icons/whiteSaveIcon.svg";
import React from "react";

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      aria-labelledby="contained-modal-title-vcenter"
      dialogClassName="modal-50w"
      className="quickAdd-popup"
      scrollable={true}
    >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">Accounts Information</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <>
          <Row>
            <Col xs={6} className="mb-3">
              <FloatingLabel controlId="floatingInput" label="Account Code">
                <Form.Control type="text" placeholder="Account Code" />
              </FloatingLabel>
            </Col>
            <Col xs={6} className="mb-3">
              <FloatingLabel controlId="floatingPassword" label="Account Name">
                <Form.Control type="text" placeholder="Account Name" />
              </FloatingLabel>
            </Col>
          </Row>
          <Row>
            <Col xs={6} className="mb-3">
              <FloatingLabel controlId="floatingSelectGrid" label="Account Owner">
                <Form.Select>
                  <option value="1">Andrea Moreno</option>
                  <option value="2">Andrea Moreno 2</option>
                  <option value="3">Andrea Moreno 3</option>
                </Form.Select>
              </FloatingLabel>
            </Col>
            <Col xs={6} className="mb-3">
              <FloatingLabel controlId="floatingSelectGrid" label="Hotels">
                <Form.Select>
                  <option value="1">Andrea Moreno</option>
                  <option value="2">Andrea Moreno 2</option>
                  <option value="3">Andrea Moreno 3</option>
                </Form.Select>
              </FloatingLabel>
            </Col>
          </Row>
          <Row>
            <Col xs={6} className="mb-3">
              <label className="for-radio-header" htmlFor="AccountType">
                Account Type
              </label>
              {["radio"].map((type: any) => (
                <div key={`inline-${type}`} className="option-field">
                  <Form.Check
                    inline
                    label="RFP"
                    name="group1"
                    type={type}
                    id={`inline-rfp-Start`}
                    defaultChecked
                  />
                  <Form.Check
                    inline
                    label="LNR"
                    name="group1"
                    type={type}
                    id={`inline-lnr-Start With`}
                  />

                  <Form.Check
                    inline
                    label="Group"
                    name="group1"
                    type={type}
                    id={`inline-group-Start With`}
                  />
                  <Form.Check
                    inline
                    label="Meeting & Catering"
                    name="group1"
                    type={type}
                    id={`inline-MeetingCatering-Start With`}
                  />
                </div>
              ))}
            </Col>
            <Col xs={6} className="mb-3">
              <label className="for-radio-header" htmlFor="AccountType">
                Account Type
              </label>
              {["radio"].map((type: any) => (
                <div key={`inline-${type}`} className="option-field">
                  <Form.Check
                    inline
                    label="Top Account"
                    type={type}
                    id={`inline-${type}-Start`}
                    defaultChecked
                  />
                </div>
              ))}
            </Col>
          </Row>
          <Row>
            <Col xs={6} className="mb-3">
              <label className="for-radio-header" htmlFor="AccountType">
                Status
              </label>
              {["radio"].map((type: any) => (
                <div key={`inline-${type}`} className="option-field">
                  <Form.Check
                    inline
                    label="Open"
                    name="group1"
                    type={type}
                    id={`inline-open-Start With`}
                  />
                  <Form.Check
                    inline
                    label="Not Viable"
                    name="group1"
                    type={type}
                    id={`inline-not-viable-Start With`}
                  />
                </div>
              ))}
            </Col>
            <Col xs={6} className="mb-3">
              <Row className="mt-3">
                <Col xs={4}>
                  <FloatingLabel controlId="floatingInput" label="Company Phone">
                    <Form.Control type="number" placeholder="Company Phone" />
                  </FloatingLabel>
                </Col>
                <Col xs={4}>
                  <FloatingLabel controlId="floatingInput" label="Office Phone">
                    <Form.Control type="number" placeholder="Office Phone" />
                  </FloatingLabel>
                </Col>
                <Col xs={4}>
                  <FloatingLabel controlId="floatingInput" label="Ext">
                    <Form.Control type="text" placeholder="Ext" />
                  </FloatingLabel>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col xs={6} className="mb-3">
              <FloatingLabel controlId="floatingInput" label="Account Code">
                <Form.Control type="text" placeholder="Account Code" />
              </FloatingLabel>
            </Col>
            <Col xs={6} className="mb-3">
              <FloatingLabel controlId="floatingTextarea" label="Comments">
                <Form.Control as="textarea" placeholder="Leave a comment here" />
              </FloatingLabel>
            </Col>
          </Row>
        </>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.onHide}>
          <span className="me-2">
            <img src={BlackCancelIcon} alt="" />
          </span>
          Close
        </Button>
        <Button variant="primary" onClick={props.onHide}>
          <span className="me-2">
            <img src={WhiteSaveIcon} alt="" />
          </span>
          Save
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

function MyVerticallyCenteredModalSuspects(props) {
  return (
    <Modal
      {...props}
      aria-labelledby="contained-modal-title-vcenter"
      dialogClassName="modal-50w"
      className="quickAdd-popup"
      scrollable={true}
    >
      <Modal.Header>
        <Modal.Title
          id="contained-modal-title-vcenter"
          className="d-flex align-items-center justify-content-between w-100"
        >
          <div>Suspect</div>

          {["radio"].map((type: any) => (
            <div
              key={`inline-${type}`}
              className="option-field suspect-radio-label  d-flex align-items-center"
            >
              <Form.Check
                inline
                label="Company"
                name="group1"
                type={type}
                id={`inline-${type}-Start With`}
                className="d-flex align-items-center m-0"
                defaultChecked
              />
              <Form.Check
                inline
                label="Group"
                name="group1"
                type={type}
                id={`inline-${type}-Start With`}
                className="d-flex align-items-center m-0"
              />
            </div>
          ))}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <>
          <Row>
            <Col xs={12} className="mb-2">
              <h6>Suspect Information</h6>
            </Col>
            <Col xs={6} className="mb-3">
              <FloatingLabel controlId="floatingInput" label="Company / Group Name">
                <Form.Control type="text" placeholder="Company / Group Name" />
              </FloatingLabel>
            </Col>
            <Col xs={6} className="mb-3">
              <FloatingLabel controlId="floatingSelectGrid" label="Source">
                <Form.Select>
                  <option value="1">Andrea Moreno</option>
                  <option value="2">Andrea Moreno 2</option>
                  <option value="3">Andrea Moreno 3</option>
                </Form.Select>
              </FloatingLabel>
            </Col>
          </Row>
          <Row>
            <Col xs={6} className="mb-3">
              <FloatingLabel controlId="floatingInput" label="First Name">
                <Form.Control type="text" placeholder="First Name" />
              </FloatingLabel>
            </Col>
            <Col xs={6} className="mb-3">
              <FloatingLabel controlId="floatingInput" label="Last Name">
                <Form.Control type="text" placeholder="Last Name" />
              </FloatingLabel>
            </Col>
          </Row>
          <Row>
            <Col xs={6} className="mb-3">
              <FloatingLabel controlId="floatingSelectGrid" label="Hotels">
                <Form.Select>
                  <option value="1">Andrea Moreno</option>
                  <option value="2">Andrea Moreno 2</option>
                  <option value="3">Andrea Moreno 3</option>
                </Form.Select>
              </FloatingLabel>
            </Col>
            <Col xs={6} className="mb-3">
              <FloatingLabel controlId="floatingSelectGrid" label="Assigned To">
                <Form.Select>
                  <option value="1">Andrea Moreno</option>
                  <option value="2">Andrea Moreno 2</option>
                  <option value="3">Andrea Moreno 3</option>
                </Form.Select>
              </FloatingLabel>
            </Col>
          </Row>
          <Row>
            <Col xs={6} className="mb-3">
              <label className="for-radio-header" htmlFor="Status">
                Status
              </label>
              {["radio"].map((type: any) => (
                <div key={`inline-${type}`} className="option-field">
                  <Form.Check
                    inline
                    label="Open"
                    name="group1"
                    type={type}
                    id={`inline-${type}-Start With`}
                    defaultChecked
                  />
                  <Form.Check
                    inline
                    label="Not Viable"
                    name="group1"
                    type={type}
                    id={`inline-${type}-Start With`}
                  />
                </div>
              ))}
            </Col>
            <Col xs={6} className="mb-3">
              <label className="for-radio-header" htmlFor="Priority">
                Priority
              </label>
              {["radio"].map((type: any) => (
                <div key={`inline-${type}`} className="option-field">
                  <Form.Check
                    inline
                    label="Normal"
                    name="group1"
                    type={type}
                    id={`inline-${type}-Start With`}
                    defaultChecked
                  />
                  <Form.Check
                    inline
                    label="Urgent"
                    name="group1"
                    type={type}
                    id={`inline-${type}-Start With`}
                  />
                  <Form.Check
                    inline
                    label="Low"
                    name="group1"
                    type={type}
                    id={`inline-${type}-Start With`}
                  />
                </div>
              ))}
            </Col>
          </Row>
          <Row>
            <Col xs={12} className="mt-3 mb-2">
              <h6>Contact Information</h6>
            </Col>
          </Row>
          <Row>
            <Col xs={6} className="mb-3">
              <Row>
                <Col xs={4}>
                  <FloatingLabel controlId="floatingInput" label="Office Phone">
                    <Form.Control type="number" placeholder="Country Code" />
                  </FloatingLabel>
                </Col>
                <Col xs={4}>
                  <FloatingLabel controlId="floatingInput" label="Office Phone">
                    <Form.Control type="number" placeholder="Office Phone" />
                  </FloatingLabel>
                </Col>
                <Col xs={4}>
                  <FloatingLabel controlId="floatingInput" label="Ext">
                    <Form.Control type="text" placeholder="Ext" />
                  </FloatingLabel>
                </Col>
              </Row>
            </Col>
            <Col xs={6} className="mb-3">
              <Row>
                <Col xs={6}>
                  <FloatingLabel controlId="floatingInput" label="Mobile Phone">
                    <Form.Control type="number" placeholder="Mobile Phone" />
                  </FloatingLabel>
                </Col>
                <Col xs={6}>
                  <FloatingLabel controlId="floatingInput" label="Mobile Phone">
                    <Form.Control type="number" placeholder="Mobile Phone" />
                  </FloatingLabel>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col xs={6} className="mb-3">
              <FloatingLabel controlId="floatingInput" label="Address">
                <Form.Control as="textarea" placeholder="Address" />
              </FloatingLabel>
            </Col>

            <Col xs={6} className="mb-3">
              <FloatingLabel controlId="floatingInput" label="Email">
                <Form.Control type="email" placeholder="Email" />
              </FloatingLabel>
            </Col>
          </Row>
          <Row>
            <Col xs={6} className="mb-3">
              <FloatingLabel controlId="floatingInput" label="City">
                <Form.Control type="text" placeholder="City" />
              </FloatingLabel>
            </Col>

            <Col xs={6} className="mb-3">
              <FloatingLabel controlId="floatingInput" label="State">
                <Form.Control type="text" placeholder="State" />
              </FloatingLabel>
            </Col>
          </Row>
          <Row>
            <Col xs={6} className="mb-3">
              <FloatingLabel controlId="floatingInput" label="Country">
                <Form.Control type="text" placeholder="Country" />
              </FloatingLabel>
            </Col>

            <Col xs={6} className="mb-3">
              <FloatingLabel controlId="floatingInput" label="Zip Code">
                <Form.Control type="number" placeholder="Zip Code" />
              </FloatingLabel>
            </Col>
          </Row>
          <Row>
            <Col xs={6} className="mb-3">
              <FloatingLabel controlId="floatingInput" label="Website">
                <Form.Control type="text" placeholder="Website" />
              </FloatingLabel>
            </Col>

            <Col xs={6} className="mb-3">
              <FloatingLabel controlId="floatingInput" label="Notes">
                <Form.Control as="textarea" placeholder="Notes" />
              </FloatingLabel>
            </Col>
          </Row>
        </>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.onHide}>
          <span className="me-2">
            <img src={BlackCancelIcon} alt="" />
          </span>
          Close
        </Button>
        <Button variant="primary" onClick={props.onHide}>
          <span className="me-2">
            <img src={WhiteSaveIcon} alt="" />
          </span>
          Save
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

function MyVerticallyCenteredModalActivity(props) {
  return (
    <Modal
      {...props}
      aria-labelledby="contained-modal-title-vcenter"
      dialogClassName="modal-50w"
      className="quickAdd-popup"
      scrollable={true}
    >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">Activity Information</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <>
          <Row>
            <Col xs={6} className="mb-3">
              <FloatingLabel controlId="floatingInput" label="Objective">
                <Form.Control type="text" placeholder="Objective" />
              </FloatingLabel>
            </Col>
            <Col xs={6} className="mb-3">
              <FloatingLabel controlId="floatingSelectGrid" label="Type">
                <Form.Select>
                  <option value="1">Andrea Moreno</option>
                  <option value="2">Andrea Moreno 2</option>
                  <option value="3">Andrea Moreno 3</option>
                </Form.Select>
              </FloatingLabel>
            </Col>
          </Row>
          <Row>
            <Col xs={6} className="mb-3">
              <FloatingLabel controlId="floatingInput" label="Start Date">
                <Form.Control type="date" placeholder="04-27-2022" />
              </FloatingLabel>
            </Col>
            <Col xs={6} className="mb-3">
              <FloatingLabel controlId="floatingInput" label="Due Date">
                <Form.Control type="date" placeholder="04-27-2022" />
              </FloatingLabel>
            </Col>
          </Row>
          <Row>
            <Col xs={6} className="mb-3">
              <FloatingLabel controlId="floatingSelectGrid" label="Hotels">
                <Form.Select>
                  <option value="1">Andrea Moreno</option>
                  <option value="2">Andrea Moreno 2</option>
                  <option value="3">Andrea Moreno 3</option>
                </Form.Select>
              </FloatingLabel>
            </Col>
            <Col xs={6} className="mb-3">
              <FloatingLabel controlId="floatingSelectGrid" label="Assigned To">
                <Form.Select>
                  <option value="1">Andrea Moreno</option>
                  <option value="2">Andrea Moreno 2</option>
                  <option value="3">Andrea Moreno 3</option>
                </Form.Select>
              </FloatingLabel>
            </Col>
          </Row>
          <Row>
            <Col xs={6} className="mb-3">
              <label className="for-radio-header" htmlFor="Status">
                Status
              </label>
              {["radio"].map((type: any) => (
                <div key={`inline-${type}`} className="option-field">
                  <Form.Check
                    inline
                    label="Open"
                    name="group1"
                    type={type}
                    id={`inline-${type}-Start With`}
                    defaultChecked
                  />
                  <Form.Check
                    inline
                    label="Not Viable"
                    name="group1"
                    type={type}
                    id={`inline-${type}-Start With`}
                  />
                </div>
              ))}
            </Col>
            <Col xs={6} className="mb-3">
              <label className="for-radio-header" htmlFor="Priority">
                Priority
              </label>
              {["radio"].map((type: any) => (
                <div key={`inline-${type}`} className="option-field">
                  <Form.Check
                    inline
                    label="Normal"
                    name="group1"
                    type={type}
                    id={`inline-${type}-Start With`}
                    defaultChecked
                  />
                  <Form.Check
                    inline
                    label="Urgent"
                    name="group1"
                    type={type}
                    id={`inline-${type}-Start With`}
                  />
                  <Form.Check
                    inline
                    label="Low"
                    name="group1"
                    type={type}
                    id={`inline-${type}-Start With`}
                  />
                </div>
              ))}
            </Col>
          </Row>

          <Row>
            <Col xs={6} className="mb-3">
              <FloatingLabel controlId="floatingSelectGrid" label="Contact">
                <Form.Select>
                  <option value="1">Andrea Moreno</option>
                  <option value="2">Andrea Moreno 2</option>
                  <option value="3">Andrea Moreno 3</option>
                </Form.Select>
              </FloatingLabel>
            </Col>

            <Col xs={6} className="mb-3">
              <FloatingLabel controlId="floatingSelectGrid" label="Email To">
                <Form.Select>
                  <option value="1">Andrea Moreno</option>
                  <option value="2">Andrea Moreno 2</option>
                  <option value="3">Andrea Moreno 3</option>
                </Form.Select>
              </FloatingLabel>
            </Col>
          </Row>
          <Row>
            <Col xs={6} className="mb-3">
              <FloatingLabel controlId="floatingSelectGrid" label="Assigned To">
                <Form.Select>
                  <option value="1">Andrea Moreno</option>
                  <option value="2">Andrea Moreno 2</option>
                  <option value="3">Andrea Moreno 3</option>
                </Form.Select>
              </FloatingLabel>
            </Col>
            <Col xs={6} className="mb-3">
              <FloatingLabel controlId="floatingInput" label="Results">
                <Form.Control as="textarea" placeholder="Results" />
              </FloatingLabel>
            </Col>
          </Row>
        </>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.onHide}>
          <span className="me-2">
            <img src={BlackCancelIcon} alt="" />
          </span>
          Close
        </Button>
        <Button variant="primary" onClick={props.onHide}>
          <span className="me-2">
            <img src={WhiteSaveIcon} alt="" />
          </span>
          Save
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

function MyVerticallyCenteredModalContact(props) {
  return (
    <Modal
      {...props}
      aria-labelledby="contained-modal-title-vcenter"
      dialogClassName="modal-50w"
      className="quickAdd-popup"
      scrollable={true}
    >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">Contact Information</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <>
          <Row>
            <Col xs={6} className="mb-3">
              <FloatingLabel controlId="floatingSelectGrid" label="Prefix">
                <Form.Select>
                  <option value="1">Andrea Moreno</option>
                  <option value="2">Andrea Moreno 2</option>
                  <option value="3">Andrea Moreno 3</option>
                </Form.Select>
              </FloatingLabel>
            </Col>
            <Col xs={6} className="mb-3">
              <FloatingLabel controlId="floatingSelectGrid" label="Hotels">
                <Form.Select>
                  <option value="1">Andrea Moreno</option>
                  <option value="2">Andrea Moreno 2</option>
                  <option value="3">Andrea Moreno 3</option>
                </Form.Select>
              </FloatingLabel>
            </Col>
          </Row>
          <Row>
            <Col xs={6} className="mb-3">
              <FloatingLabel controlId="floatingInput" label="First Name">
                <Form.Control type="text" placeholder="First Name" />
              </FloatingLabel>
            </Col>
            <Col xs={6} className="mb-3">
              <FloatingLabel controlId="floatingInput" label="Last Name">
                <Form.Control type="text" placeholder="Last Name" />
              </FloatingLabel>
            </Col>
          </Row>
          <Row>
            <Col xs={6} className="mb-3">
              <FloatingLabel controlId="floatingSelectGrid" label="Account">
                <Form.Select>
                  <option value="1">Andrea Moreno</option>
                  <option value="2">Andrea Moreno 2</option>
                  <option value="3">Andrea Moreno 3</option>
                </Form.Select>
              </FloatingLabel>
            </Col>
            <Col xs={6} className="mb-3">
              <FloatingLabel controlId="floatingInput" label="Reports to">
                <Form.Control type="text" placeholder="Reports to" />
              </FloatingLabel>
            </Col>
          </Row>
          <Row>
            <Col xs={6} className="mb-3">
              <FloatingLabel controlId="floatingInput" label="Title">
                <Form.Control type="text" placeholder="Title" />
              </FloatingLabel>
            </Col>
            <Col xs={6} className="mb-3">
              <FloatingLabel controlId="floatingInput" label="Department">
                <Form.Control type="text" placeholder="Department" />
              </FloatingLabel>
            </Col>
          </Row>
          <Row>
            <Col xs={6} className="mb-3">
              <FloatingLabel controlId="floatingInput" label="Birthday">
                <Form.Control type="date" placeholder="Birthday" />
              </FloatingLabel>
            </Col>
            <Col xs={6} className="mb-3">
              <FloatingLabel controlId="floatingInput" label="Email">
                <Form.Control type="email" placeholder="Email" />
              </FloatingLabel>
            </Col>
          </Row>
          <Row>
            <Col xs={6}>
              <Row>
                <Col xs={6}>
                  <FloatingLabel controlId="floatingInput" label="Mobile Phone">
                    <Form.Control type="number" placeholder="Mobile Phone" />
                  </FloatingLabel>
                </Col>
                <Col xs={6}>
                  <FloatingLabel controlId="floatingInput" label="Mobile Phone">
                    <Form.Control type="number" placeholder="Mobile Phone" />
                  </FloatingLabel>
                </Col>
              </Row>
            </Col>
            <Col xs={6} className="mb-3">
              <FloatingLabel controlId="floatingInput" label="Notes">
                <Form.Control as="textarea" placeholder="Notes" />
              </FloatingLabel>
            </Col>
          </Row>
        </>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.onHide}>
          <span className="me-2">
            <img src={BlackCancelIcon} alt="" />
          </span>
          Close
        </Button>
        <Button variant="primary" onClick={props.onHide}>
          <span className="me-2">
            <img src={WhiteSaveIcon} alt="" />
          </span>
          Save
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

function MyVerticallyCenteredModalTodo(props) {
  return (
    <Modal
      {...props}
      aria-labelledby="contained-modal-title-vcenter "
      dialogClassName="modal-todo-list"
      className="todo-list-popup right"
      backdropClassName="no-backdrop-modal"
      scrollable={true}
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter" className="to-do-heading">
          To do list
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="to-do-dropdown">
          <div className="to-do-content">
            <div className="day-col">
              <div className="day-heading">16 May, Monday</div>
              <Form className="to-do-checkbox-content">
                <div className="to-do-checkbox-fields">
                  <div className="to-do-checkbox-filed">
                    <div className="form-check">
                      <input
                        name="group1"
                        type="checkbox"
                        id="inline-checkbox-100"
                        className="form-check-input"
                      />
                      <label htmlFor="inline-checkbox-100" className="form-check-label">
                        <span className="form-check-label">Assign a hotel</span>
                        <span className="checkbox-time">12:00 PM</span>
                      </label>
                    </div>
                  </div>
                  <div className="to-do-checkbox-filed">
                    <div className="form-check">
                      <input
                        name="group1"
                        type="checkbox"
                        id="inline-checkbox-2"
                        className="form-check-input"
                      />
                      <label htmlFor="inline-checkbox-2" className="form-check-label">
                        <span className="form-check-label">Submit the reports</span>
                        <span className="checkbox-time">12:00 PM</span>
                      </label>
                    </div>
                  </div>
                  <div className="to-do-checkbox-filed">
                    <div className="form-check">
                      <input
                        name="group1"
                        type="checkbox"
                        id="inline-checkbox-4"
                        className="form-check-input"
                      />
                      <label htmlFor="inline-checkbox-4" className="form-check-label">
                        <span className="form-check-label">Wedding Request</span>
                        <span className="checkbox-time">12:30 PM</span>
                      </label>
                    </div>
                  </div>
                  <div className="to-do-checkbox-filed">
                    <div className="form-check">
                      <input
                        name="group1"
                        type="checkbox"
                        id="inline-checkbox-5"
                        className="form-check-input"
                      />
                      <label htmlFor="inline-checkbox-5" className="form-check-label">
                        <span className="form-check-label">Contact for Juno Tourament</span>
                        <span className="checkbox-time">12:30 PM</span>
                      </label>
                    </div>
                  </div>
                  <div className="to-do-checkbox-filed">
                    <div className="form-check">
                      <input
                        name="group1"
                        type="checkbox"
                        id="inline-checkbox-6"
                        className="form-check-input"
                      />
                      <label htmlFor="inline-checkbox-6" className="form-check-label">
                        <span className="form-check-label">Follow up on april-22</span>
                        <span className="checkbox-time">01:00 PM</span>
                      </label>
                    </div>
                  </div>
                </div>
              </Form>
            </div>
            <div className="day-col">
              <div className="day-heading">17 May, Tuesday</div>
              <Form className="to-do-checkbox-content">
                <div className="to-do-checkbox-fileds">
                  <div className="to-do-checkbox-filed">
                    <div className="form-check">
                      <input
                        name="group1"
                        type="checkbox"
                        id="inline-checkbox-7"
                        className="form-check-input"
                      />
                      <label htmlFor="inline-checkbox-7" className="form-check-label">
                        <span className="form-check-label">Follow up with Alex</span>
                        <span className="checkbox-time">10:30 AM</span>
                      </label>
                    </div>
                  </div>
                  <div className="to-do-checkbox-filed">
                    <div className="form-check">
                      <input
                        name="group1"
                        type="checkbox"
                        id="inline-checkbox-8"
                        className="form-check-input"
                      />
                      <label htmlFor="inline-checkbox-8" className="form-check-label">
                        <span className="form-check-label">Phone call</span>
                        <span className="checkbox-time">11:00 PM</span>
                      </label>
                    </div>
                  </div>
                  <div className="to-do-checkbox-filed">
                    <div className="form-check">
                      <input
                        name="group1"
                        type="checkbox"
                        id="inline-checkbox-9"
                        className="form-check-input"
                      />
                      <label htmlFor="inline-checkbox-9" className="form-check-label">
                        <span className="form-check-label">Nove health followup</span>
                        <span className="checkbox-time">12:00 PM</span>
                      </label>
                    </div>
                  </div>
                  <div className="to-do-checkbox-filed">
                    <div className="form-check">
                      <input
                        name="group1"
                        type="checkbox"
                        id="inline-checkbox-10"
                        className="form-check-input"
                      />
                      <label htmlFor="inline-checkbox-10" className="form-check-label">
                        <span className="form-check-label">Assign a hotel</span>
                        <span className="checkbox-time">12:30 PM</span>
                      </label>
                    </div>
                  </div>
                </div>
              </Form>
            </div>
            <div className="day-col">
              <div className="day-heading">18 May, Wednesday</div>
              <Form className="to-do-checkbox-content">
                <div className="to-do-checkbox-fileds">
                  <div className="to-do-checkbox-filed">
                    <div className="form-check">
                      <input
                        name="group1"
                        type="checkbox"
                        id="inline-checkbox-11"
                        className="form-check-input"
                      />
                      <label htmlFor="inline-checkbox-11" className="form-check-label">
                        <span className="form-check-label">Submit the reports</span>
                        <span className="checkbox-time">11:00 AM</span>
                      </label>
                    </div>
                  </div>
                  <div className="to-do-checkbox-filed">
                    <div className="form-check">
                      <input
                        name="group1"
                        type="checkbox"
                        id="inline-checkbox-12"
                        className="form-check-input"
                      />
                      <label htmlFor="inline-checkbox-12" className="form-check-label">
                        <span className="form-check-label">Wedding Request</span>
                        <span className="checkbox-time">12:00 PM</span>
                      </label>
                    </div>
                  </div>
                  <div className="to-do-checkbox-filed">
                    <div className="form-check">
                      <input
                        name="group1"
                        type="checkbox"
                        id="inline-checkbox-13"
                        className="form-check-input"
                      />
                      <label htmlFor="inline-checkbox-13" className="form-check-label">
                        <span className="form-check-label">Contact for Juno Tourament</span>
                        <span className="checkbox-time">12:00 PM</span>
                      </label>
                    </div>
                  </div>
                </div>
              </Form>
            </div>
            <div className="day-col">
              <div className="day-heading">19 May, Thursday</div>
              <Form className="to-do-checkbox-content">
                <div className="to-do-checkbox-fileds">
                  <div className="to-do-checkbox-filed">
                    <div className="form-check">
                      <input
                        name="group1"
                        type="checkbox"
                        id="inline-checkbox-14"
                        className="form-check-input"
                      />
                      <label htmlFor="inline-checkbox-14" className="form-check-label">
                        <span className="form-check-label">Assign a hotel</span>
                        <span className="checkbox-time">12:00 PM</span>
                      </label>
                    </div>
                  </div>
                  <div className="to-do-checkbox-filed">
                    <div className="form-check">
                      <input
                        name="group1"
                        type="checkbox"
                        id="inline-checkbox-15"
                        className="form-check-input"
                      />
                      <label htmlFor="inline-checkbox-15" className="form-check-label">
                        <span className="form-check-label">Submit the reports</span>
                        <span className="checkbox-time">12:00 PM</span>
                      </label>
                    </div>
                  </div>
                  <div className="to-do-checkbox-filed">
                    <div className="form-check">
                      <input
                        name="group1"
                        type="checkbox"
                        id="inline-checkbox-16"
                        className="form-check-input"
                      />
                      <label htmlFor="inline-checkbox-16" className="form-check-label">
                        <span className="form-check-label">Wedding Request</span>
                        <span className="checkbox-time">12:30 PM</span>
                      </label>
                    </div>
                  </div>
                  <div className="to-do-checkbox-filed">
                    <div className="form-check">
                      <input
                        name="group1"
                        type="checkbox"
                        id="inline-checkbox-17"
                        className="form-check-input"
                      />
                      <label htmlFor="inline-checkbox-17" className="form-check-label">
                        <span className="form-check-label">Contact for Juno Tourament</span>
                        <span className="checkbox-time">12:30 PM</span>
                      </label>
                    </div>
                  </div>
                  <div className="to-do-checkbox-filed">
                    <div className="form-check">
                      <input
                        name="group1"
                        type="checkbox"
                        id="inline-checkbox-18"
                        className="form-check-input"
                      />
                      <label htmlFor="inline-checkbox-18" className="form-check-label">
                        <span className="form-check-label">Follow up on april-22</span>
                        <span className="checkbox-time">01:00 PM</span>
                      </label>
                    </div>
                  </div>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}
function TopMenu() {
  const [modalShow, setModalShow] = React.useState(false);
  const [modalShowSuspects, setModalShowSuspects] = React.useState(false);
  const [modalShowActivity, setModalShowActivity] = React.useState(false);
  const [modalShowContact, setModalShowContact] = React.useState(false);
  const [modalShowTodo, setModalShowTodo] = React.useState(false);
  return (
    <>
      <div className="menus">
        <div className="menu-col">
          <Menu
            menuButton={
              <MenuButton>
                Hotels
                <span className="arrow-class ms-2">
                  <img src={DownArrow} alt="" />
                </span>
              </MenuButton>
            }
          >
            <MenuItem>Select Hotel</MenuItem>
            <SubMenu label="All Hotels (37)">
              <MenuItem>AVMCNRP Avid hotel</MenuItem>
              <MenuItem>AVMCNRP Avid hotel Macon</MenuItem>
              <MenuItem>CZTX513 Comfort Suites Katy Texas</MenuItem>
              <MenuItem>DI24913 Days Inn OKC Moore OK</MenuItem>
              <MenuItem>FNDFWBU Fairfield Inn & Suites Fort Worth South Burleson</MenuItem>
              <MenuItem>HIOKCPC Holiday Inn Express & Suites OK</MenuItem>
              <MenuItem>AVMCNRP Avid hotel Macon</MenuItem>
              <MenuItem>CZTX513 Comfort Suites Houston Westchase</MenuItem>
              <MenuItem>CZTX513 Comfort Suites Katy Texas</MenuItem>
            </SubMenu>
            <MenuItem>Alina Hospitality (2)</MenuItem>
            <MenuItem>Genuine Hospitality (1)</MenuItem>
            <MenuItem>Hospitality TX (1)</MenuItem>
            <MenuItem>HSI Hotels (2)</MenuItem>
            <MenuItem>Inntelligent CRM (2)</MenuItem>
            <MenuItem>LQ Energy Coridor (1)</MenuItem>
            <MenuItem>MHSP (1)</MenuItem>
            <MenuItem>My Hospitality Sales Pro (13)</MenuItem>
            <MenuItem>Pacific Inns (11)</MenuItem>
            <MenuItem>Satish Patel (2)</MenuItem>
            <MenuItem>still88 (1)</MenuItem>
          </Menu>
        </div>
        <div className="menu-col">
          <Menu
            menuButton={
              <MenuButton>
                Marketing Plan
                <span className="arrow-class ms-2">
                  <img src={DownArrow} alt="" />
                </span>
              </MenuButton>
            }
          >
            <MenuItem>Select Hotel</MenuItem>
            <SubMenu label="All Hotels (37)">
              <MenuItem>AVMCNRP Avid hotel</MenuItem>
              <MenuItem>AVMCNRP Avid hotel Macon</MenuItem>
              <MenuItem>CZTX513 Comfort Suites Katy Texas</MenuItem>
              <MenuItem>DI24913 Days Inn OKC Moore OK</MenuItem>
              <MenuItem>FNDFWBU Fairfield Inn & Suites Fort Worth South Burleson</MenuItem>
              <MenuItem>HIOKCPC Holiday Inn Express & Suites OK</MenuItem>
              <MenuItem>AVMCNRP Avid hotel Macon</MenuItem>
              <MenuItem>CZTX513 Comfort Suites Houston Westchase</MenuItem>
              <MenuItem>CZTX513 Comfort Suites Katy Texas</MenuItem>
            </SubMenu>
            <MenuItem>Alina Hospitality (2)</MenuItem>
            <MenuItem>Genuine Hospitality (1)</MenuItem>
            <MenuItem>Hospitality TX (1)</MenuItem>
            <MenuItem>HSI Hotels (2)</MenuItem>
            <MenuItem>Inntelligent CRM (2)</MenuItem>
            <MenuItem>LQ Energy Coridor (1)</MenuItem>
            <MenuItem>MHSP (1)</MenuItem>
            <MenuItem>My Hospitality Sales Pro (13)</MenuItem>
            <MenuItem>Pacific Inns (11)</MenuItem>
            <MenuItem>Satish Patel (2)</MenuItem>
            <MenuItem>still88 (1)</MenuItem>
          </Menu>
        </div>
        <div className="menu-col">
          <Menu
            menuButton={
              <MenuButton>
                Monthly Report
                <span className="arrow-class ms-2">
                  <img src={DownArrow} alt="" />
                </span>
              </MenuButton>
            }
          >
            <MenuItem>Select Hotel</MenuItem>
            <SubMenu label="All Hotels (37)">
              <MenuItem>AVMCNRP Avid hotel</MenuItem>
              <MenuItem>AVMCNRP Avid hotel Macon</MenuItem>
              <MenuItem>CZTX513 Comfort Suites Katy Texas</MenuItem>
              <MenuItem>DI24913 Days Inn OKC Moore OK</MenuItem>
              <MenuItem>FNDFWBU Fairfield Inn & Suites Fort Worth South Burleson</MenuItem>
              <MenuItem>HIOKCPC Holiday Inn Express & Suites OK</MenuItem>
              <MenuItem>AVMCNRP Avid hotel Macon</MenuItem>
              <MenuItem>CZTX513 Comfort Suites Houston Westchase</MenuItem>
              <MenuItem>CZTX513 Comfort Suites Katy Texas</MenuItem>
            </SubMenu>
            <MenuItem>Alina Hospitality (2)</MenuItem>
            <MenuItem>Genuine Hospitality (1)</MenuItem>
            <MenuItem>Hospitality TX (1)</MenuItem>
            <MenuItem>HSI Hotels (2)</MenuItem>
            <MenuItem>Inntelligent CRM (2)</MenuItem>
            <MenuItem>LQ Energy Coridor (1)</MenuItem>
            <MenuItem>MHSP (1)</MenuItem>
            <MenuItem>My Hospitality Sales Pro (13)</MenuItem>
            <MenuItem>Pacific Inns (11)</MenuItem>
            <MenuItem>Satish Patel (2)</MenuItem>
            <MenuItem>still88 (1)</MenuItem>
          </Menu>
        </div>
      </div>
      <div className="right-section ms-auto">
        <div className="right-options">
          <div className="search-section">
            <Form className="search-section-option">
              {["radio"].map((type: any) => (
                <div key={`inline-${type}`} className="option-field">
                  <Form.Check
                    inline
                    label="Start With"
                    name="group1"
                    type={type}
                    id={`inline-${type}-Start With`}
                    defaultChecked
                  />
                  <Form.Check
                    inline
                    label="Contains"
                    name="group1"
                    type={type}
                    id={`inline-${type}-Contains`}
                  />
                </div>
              ))}
            </Form>
            <Form className="search-form">
              <input type="search" placeholder="Search" className="form-control" />
            </Form>
          </div>
        </div>
        <Link to="/" className="gmail-link">
          <OverlayTrigger placement="bottom" overlay={<Tooltip>Email</Tooltip>}>
            <img src={GmailIcon} alt="" />
          </OverlayTrigger>
        </Link>
        <div className="calendar-minus">
          <Menu
            menuButton={
              <MenuButton className="calendar-icon">
                <OverlayTrigger placement="bottom" overlay={<Tooltip>Calendar</Tooltip>}>
                  <img src={CalendarIcon} alt="" />
                </OverlayTrigger>
              </MenuButton>
            }
          >
            <MenuItem>Activity View</MenuItem>
            <MenuItem>Group Block View</MenuItem>
            <MenuItem>Meeting Room Block View</MenuItem>
          </Menu>
        </div>
        <div className="add-quick-butt">
          {["end"].map((direction, key) => (
            <Dropdown key={key}>
              <Dropdown.Toggle id={`dropdown-button-drop-${direction}`}>
                <span className="plus-icon">
                  <OverlayTrigger
                    key={key}
                    placement="bottom"
                    overlay={<Tooltip>Quick Add</Tooltip>}
                  >
                    <img src={PlusCircle} alt="" />
                  </OverlayTrigger>
                </span>
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item onClick={() => setModalShow(true)}>Add Account</Dropdown.Item>
                <Dropdown.Item onClick={() => setModalShowSuspects(true)}>
                  Add Suspect
                </Dropdown.Item>
                <Dropdown.Item onClick={() => setModalShowActivity(true)}>
                  Add Activity
                </Dropdown.Item>
                <Dropdown.Item onClick={() => setModalShowContact(true)}>Add Contact</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          ))}
        </div>
        <div className="profile-section d-lg-flex align-items-lg-center">
          <Link to="/userProfile">
            <span className="user ">
              <img src={ProfileImg} className="rounded-circle" alt="user" width="45" height="45" />
            </span>
          </Link>
          {/* {["end"].map((direction, key) => (
                    <Dropdown key={key}>
                      <Dropdown.Toggle id={`dropdown-button-drop-${direction}`} variant="profile-button">
                        <span className="user">
                          <img
                            src={ProfileImg}
                            className="rounded-circle"
                            alt="user"
                            width="40"
                            height="40"
                          />
                        </span>
                        <span className="arrow-class ms-2">
                          <img src={DownArrow} alt="" />
                        </span>
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1" active>
                          Action
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                        <Dropdown.Item href="#/action-4">Logout</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  ))} */}
        </div>
        <div className="to-do-list">
          <div className="todo-dropdown-icon">
            <button className="tolist-icon" onClick={() => setModalShowTodo(true)}>
              <OverlayTrigger placement="bottom" overlay={<Tooltip>Todo List</Tooltip>}>
                <img src={ToList} alt="" />
              </OverlayTrigger>
            </button>
          </div>
        </div>
      </div>
      <MyVerticallyCenteredModal show={modalShow} onHide={() => setModalShow(false)} />
      <MyVerticallyCenteredModalSuspects
        show={modalShowSuspects}
        onHide={() => setModalShowSuspects(false)}
      />
      <MyVerticallyCenteredModalActivity
        show={modalShowActivity}
        onHide={() => setModalShowActivity(false)}
      />
      <MyVerticallyCenteredModalContact
        show={modalShowContact}
        onHide={() => setModalShowContact(false)}
      />
      <MyVerticallyCenteredModalTodo show={modalShowTodo} onHide={() => setModalShowTodo(false)} />
    </>
  );
}

export default TopMenu;
