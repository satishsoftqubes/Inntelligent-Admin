import { Breadcrumb, Container } from "react-bootstrap";

function InPageNav() {
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
    </Container>
  );
}

export default InPageNav;
