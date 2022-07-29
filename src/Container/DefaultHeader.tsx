import "@szhsin/react-menu/dist/index.css";
import { Form } from "react-bootstrap";

function DefaultHeader() {
  return (
    <>
      <div className="header-top-new-block 123456789">
        <div className="main-header">
          <div className="search-bar-main w-100">
            <div className="search-bar">
              <Form className="d-flex ps-4">
                <input
                  className="form-control searchInput"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn search-btn" type="submit">
                  <i className="fa-regular fa-magnifying-glass"></i>
                </button>
              </Form>
            </div>
            <div className="right-header-icon d-flex align-items-center">
              <i className="fa-light me-4 fa-envelope"></i>
              <i className="fa-light me-4 fa-calendar-minus"></i>
              <i className="fa-light me-4 fa-circle-user"></i>
              <i className="fa-light me-4 fa-circle-plus"></i>
            </div>
          </div>
          {/* <div className="logo">
            <Link to="/home">
              <img className="light-visible" src={TopLogo} alt="" />
              <img className="dark-visible" src={TopLogoDark} alt="" />
            </Link>
          </div>
          <div className="d-none d-lg-flex align-items-lg-center justify-content-lg-around w-100">
            <MenuTop />
          </div>
          <Button variant="primary d-lg-none ms-auto" onClick={handleShow}>
            <img className="menu-icon" src={MenuIcon} alt="" />
          </Button>
          <Offcanvas show={show} onHide={handleClose} responsive="lg" placement="end">
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>Menu</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <MenuTop />
            </Offcanvas.Body>
          </Offcanvas> */}
        </div>
      </div>
    </>
  );
}

export default DefaultHeader;
