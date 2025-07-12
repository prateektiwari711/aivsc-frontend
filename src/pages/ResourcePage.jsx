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
    .then((res) => {
      // 🔠 Sort alphabetically by title (case-insensitive)
      const sortedResources = res.data.sort((a, b) =>
        a.title.localeCompare(b.title, undefined, { sensitivity: 'base' })
      );
      setResources(sortedResources);
    })
    .catch((err) => {
      console.error(`Failed to load ${category}`, err);
      setError("Failed to fetch resources. Please try again later.");
    });
}, [category]);


  const title = categoryTitles[category] || "📄 Resources";

  return (
    <div
      className="container-fluid py-5 px-4"
      style={{ backgroundColor: "#393E46", minHeight: "100vh" }}
    >
      <h2
        className="text-center mb-5"
        style={{ color: "#DDE6ED", fontWeight: "bold" }}
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
                  style={{
                    borderRadius: "16px",
                    backgroundColor: "#DDE6ED",
                  }}
                >
                  <div
                    className="card-body d-flex justify-content-between align-items-center"
                    style={{ color: "#27374D" }}
                  >
                    <h5 className="card-title mb-0">📄 {res.title}</h5>
                    <a
                      href={`https://aivsc-backend.onrender.com${res.fileUrl}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline-dark"
                      style={{ borderRadius: "10px", color: "#27374D" }}
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
