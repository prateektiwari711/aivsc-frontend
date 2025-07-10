import React from "react";
import { useNavigate } from "react-router-dom";
import DashboardCard from "../components/DashBoardCard";

function Home() {
  const navigate = useNavigate();

  return (
    <div
      className="d-flex flex-wrap w-100 p-3"
      style={{ background: "#e6f7ff" }}
    >
      <div className="row">
        <div className="col-12 col-md-6 mb-4">
          <DashboardCard
            title="Chapter-wise Highlighted Part"
            description="Read highlights of each chapter."
            onClick={() => navigate("/resources/highlight")}
          />
        </div>
        <div className="col-12 col-md-6 mb-4">
          <DashboardCard
            title="Chapter-wise Question Bank"
            description="Practice by chapter."
            onClick={() => navigate("/resources/questionBank")}
          />
        </div>
        <div className="col-12 col-md-6 mb-4">
          <DashboardCard
            title="Full Forms"
            description="Browse important full forms."
            onClick={() => navigate("/resources/fullForm")}
          />
        </div>
        <div className="col-12 col-md-6 mb-4">
          <DashboardCard
            title="Chapter-wise Worksheet"
            description="Download worksheets for each chapter."
            onClick={() => navigate("/resources/worksheet")}
          />
        </div>
        <div className="col-12 col-md-6 mb-4">
          <DashboardCard
            title="Mock Tests"
            description="Attempt full-length mock exams."
            onClick={() => navigate("/resources/mockTest")}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
