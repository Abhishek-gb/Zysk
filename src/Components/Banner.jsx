import React from "react";
import { Button } from "react-bootstrap";
import { FaRegCirclePlay } from "react-icons/fa6";
import banner from "./Images/banner.png";
import { FaArrowRight } from "react-icons/fa";

function Banner() {
  return (
    <>
      <div className="d-flex align-items-center justify-content-center mt-5">
      <div
        className="d-flex align-items-center border border-danger rounded-pill p-2"
        style={{ maxWidth: "fit-content" }}
      >
        <Button
          variant="outline-danger"
          className="rounded-pill me-2 px-3 py-1  border border-danger"
          style={{ fontWeight: "bold", border: "red" }}
        >
          New feature
        </Button>
        <span className="text-danger fw-bold d-flex align-items-center">
          Check out the team dashboard{" "}
          <FaArrowRight className="ms-2" />
        </span>
      </div>
    </div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6 offset-md-3 text-center">
            <h2>Beautiful analytics to grow smarter</h2>
            <p>
              Powerful, self-serve product and growth analytics to help you
              convert, engage, and retain more users. Trusted by over 4,000
              startups.
            </p>
            <div className="mt-4">
              <Button
                className="btn btn-light"
                style={{
                  borderRadius: "50px",
                  padding: "8px 15px",
                  marginRight: "10px",
                }}
              >
                <FaRegCirclePlay /> Demo
              </Button>
              <Button
                className="btn btn-danger"
                style={{ borderRadius: "50px", padding: "8px 15px" }}
              >
                Sign Up
              </Button>
            </div>
          </div>
        </div>
        {/* Image with reduced size */}
        <div className="mt-5 text-center">
          <img
            src={banner}
            alt="banner"
            className="banner-image"
            style={{ width: "100%", height: "auto" }}
          />
        </div>
      </div>
    </>
  );
}

export default Banner;
