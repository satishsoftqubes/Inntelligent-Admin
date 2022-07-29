import { Breadcrumb, Container, FloatingLabel, Form } from "react-bootstrap";

function InPageNav() {
  const userSelection =
    window.location.pathname === "/home" ? (
      <div className="d-flex gap-2">
        <span>
          <FloatingLabel controlId="floatingSelectGrid" label="Year">
            <Form.Select>
              <option value="1">2022</option>
              <option value="2">2023</option>
              <option value="3">2024</option>
            </Form.Select>
          </FloatingLabel>
        </span>
        <span>
          <FloatingLabel controlId="floatingSelectGrid" label="User">
            <Form.Select>
              <option value="1">Andrea Moreno</option>
              <option value="2">Andrea Moreno 2</option>
              <option value="3">Andrea Moreno 3</option>
            </Form.Select>
          </FloatingLabel>
        </span>
      </div>
    ) : (
      <></>
    );
  return (
    <Container fluid={true} className="p-0 main-top-section d-flex justify-content-between">
      <Breadcrumb className="align-items-center d-flex h-100">
        <Breadcrumb.Item href="/home" className="align-items-center d-flex">
          <i className="fa-regular fa-house"></i>
        </Breadcrumb.Item>
        <Breadcrumb.Item className="align-items-center d-flex">
          {window.location.pathname === "/clint-list" ? "Client List" : ""}
        </Breadcrumb.Item>
        {/* <Breadcrumb.Item href="#" className="align-items-center d-flex">
              All Accounts
            </Breadcrumb.Item> */}
      </Breadcrumb>
      {userSelection}
    </Container>
  );
}

export default InPageNav;
