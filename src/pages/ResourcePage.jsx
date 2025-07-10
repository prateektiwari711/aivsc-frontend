import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const categoryTitles = {
  highlight: "📘 Chapter-wise Highlighted PDFs",
  worksheet: "📝 Chapter-wise Worksheets",
  questionBank: "📚 Chapter-wise Question Bank",
  fullForm: "🔤 Important Full Forms",
  mockTest: "🧪 Mock Tests",
};

const ResourcePage = () => {
  const { category } = useParams();
  const [resources, setResources] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(
        `https://aivsc-backend.onrender.com/api/resources/category/${category}`
      )
      .then((res) => setResources(res.data))
      .catch((err) => {
        console.error(`Failed to load ${category}`, err);
        setError("Failed to fetch resources. Please try again later.");
      });
  }, [category]);

  const title = categoryTitles[category] || "📄 Resources";

  return (
    <div
      className="container-fluid py-5 px-4"
      style={{ backgroundColor: "#e6f7ff", minHeight: "100vh" }}
    >
      <h2
        className="text-center mb-5"
        style={{ color: "#007acc", fontWeight: "bold" }}
      >
        {title}
      </h2>

      {error ? (
        <div className="alert alert-danger text-center w-100" role="alert">
          {error}
        </div>
      ) : (
        <div className="row justify-content-center">
          {resources.length === 0 ? (
            <p className="text-center text-muted w-100">
              No resources available yet.
            </p>
          ) : (
            <div className="col-12 col-md-10 col-lg-8">
              {resources.map((res) => (
                <div
                  key={res._id}
                  className="card mb-4 shadow-sm border-0"
                  style={{ borderRadius: "16px", backgroundColor: "#ffffff" }}
                >
                  <div className="card-body d-flex justify-content-between align-items-center">
                    <h5 className="card-title mb-0 text-primary">
                      📄 {res.title}
                    </h5>
                    <a
                      href={`https://aivsc-backend.onrender.com${res.fileUrl}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline-primary"
                      style={{ borderRadius: "10px" }}
                    >
                      Open PDF
                    </a>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ResourcePage;
