import { Container, Row } from "react-bootstrap";

function Home() {
  return (
    <>
      <div className="main-section">
        <Container fluid={true} className="p-0">
          <Row>
            <div className="vh-100">
              <div className="d-flex justify-content-center align-items-center h-100">
                <div>
                  <h1>Dashboard</h1>
                </div>
              </div>
            </div>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Home;
