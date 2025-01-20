import React from "react";
import blog1 from "./Images/blog-1.png";
import blog2 from "./Images/blog-2.png";
import blog3 from "./Images/blog-3.png";
import Dropdown from "./Images/Dropdown.png";
import round1 from "./Images/round1.png";
import round2 from "./Images/round2.png";

const BlogSection = () => {
  return (
    <div className="container my-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h6 className="text-danger">Our Blog</h6>
          <h2 className="fw-bold">Latest Blog Posts</h2>
          <p className="text-muted">
            Tools and strategies modern teams need to help their companies grow.
          </p>
        </div>
        <div>
          <button className="btn btn-danger">View all posts</button>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4">
          <div className="card border-0">
            <img
              src={blog1}
              className="card-img-top"
              alt="UX Review"
              style={{ height: "200px", objectFit: "cover" }}
            />
            <div className="card-body">
              <p className="text-danger mb-1">Design</p>
              <h5 className="card-title">UX Review Presentations</h5>
              <p className="text-muted">
                How do you create compelling presentations that wow your
                colleagues and impress your managers?
              </p>
              <div className="d-flex align-items-center">
                <img
                  src={Dropdown}
                  alt="Olivia Rhye"
                  className="rounded-circle me-2"
                  width="40"
                  height="40"
                />
                <small className="text-muted">Olivia Rhye - 20 Jan 2024</small>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card border-0">
            <img
              src={blog2}
              className="card-img-top"
              alt="Migrating to Linear"
              style={{ height: "200px", objectFit: "cover" }}
            />
            <div className="card-body">
              <p className="text-danger mb-1">Product</p>
              <h5 className="card-title">Migrating to Linear 101</h5>
              <p className="text-muted">
                Linear helps streamline software projects, sprints, tasks, and
                bug tracking. Here's how to get started.
              </p>
              <div className="d-flex align-items-center">
                <img
                  src={round1}
                  alt="Phoenix Baker"
                  className="rounded-circle me-2"
                  width="40"
                  height="40"
                />
                <small className="text-muted">Phoenix Baker - 19 Jan 2024</small>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card border-0">
            <img
              src={blog3}
              className="card-img-top"
              alt="API Stack"
              style={{ height: "200px", objectFit: "cover" }}
            />
            <div className="card-body">
              <p className="text-danger mb-1">Software Engineering</p>
              <h5 className="card-title">Building Your API Stack</h5>
              <p className="text-muted">
                The rise of RESTful APIs has been met by a rise in tools for
                creating, testing, and managing them.
              </p>
              <div className="d-flex align-items-center">
                <img
                  src={round2}
                  alt="Lana Steiner"
                  className="rounded-circle me-2"
                  width="40"
                  height="40"
                />
                <small className="text-muted">Lana Steiner - 18 Jan 2024</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
