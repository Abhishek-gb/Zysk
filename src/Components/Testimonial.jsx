import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import girl from "./Images/girl-2.jpg";
import Sisyphus from "./Images/Sisyphus.png";

function Testimonial() {
  return (
    <Container fluid className="p-5 bg-light">
      <Row className="justify-content-center">
        <Col md={8} lg={6}>
          <div className="text-center">
            <img
              src={Sisyphus}
              alt="Sisyphus Logo"
              className="img-fluid mb-4"
              style={{ maxWidth: "150px" }}
            />
          </div>
          <p className="text-center">
            We've been using Untitled to kick start every new project and can't
            imagine working without it.
          </p>
          <div className="d-flex flex-column justify-content-center align-items-center mt-4">
            <img
              src={girl}
              alt="Candice Wu Avatar"
              className="rounded-circle"
              width="50"
              height="50"
            />
            <div className="text-center mt-2">
              <h6 className="mb-0">Candice Wu</h6>
              <small className="text-muted">Product Manager, Sisyphus</small>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Testimonial;
