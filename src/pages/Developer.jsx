import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Developer = () => {
  return (
    <div
      className="container py-5"
      style={{ backgroundColor: "#F5F9FF", minHeight: "100vh" }}
    >
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6">
          <div className="card shadow rounded-4 border-0">
            <div className="card-body text-center p-4">
              <h1 className="mb-4" style={{ color: "#27374D" }}>
                Developer of AIVSC JOURNEY
              </h1>
              <img
                src="/Me.jpg"
                alt="Developer"
                className="rounded-circle border border-3"
                style={{
                  width: "120px",
                  height: "120px",
                  objectFit: "cover",
                  borderColor: "#27374D",
                }}
              />
              <h3 className="mt-3 mb-1">Prateek Tiwari</h3>
              <p className="text-muted mb-3">
                Developer | GDSC Lead | MERN Stack Enthusiast
              </p>
              <p className="mb-4">
                I created <strong>AIVSC Journey</strong> — a study platform
                designed to help students access chapter-wise PDFs, mock tests,
                and more.
              </p>
              <div className="d-flex justify-content-center gap-4">
                <a
                  href="https://github.com/prateektiwari711"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-dark btn-sm"
                >
                  GitHub
                </a>
                <a
                  href="https://linkedin.com/in/prt711"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-primary btn-sm"
                >
                  LinkedIn
                </a>
                <a
                  href="mailto:prtiwari711@gmail.com"
                  className="btn btn-outline-secondary btn-sm"
                >
                  Email
                </a>
              </div>
              <hr className="my-4" />
              <p className="text-muted small">
                Built with 💙 using React, Bootstrap, MongoDB, Node.js.
              </p>
              <p className="text-muted small">
                © {new Date().getFullYear()} AIVSC Journey. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Developer;
