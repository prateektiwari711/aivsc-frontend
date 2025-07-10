const DashboardCard = ({ title, description, onClick }) => {
  return (
    <div
      className="card h-100 shadow-sm text-white"
      onClick={onClick}
      style={{
        cursor: "pointer",
        borderRadius: "16px",
        transition: "transform 0.2s ease-in-out",
        backgroundImage: "linear-gradient(to right, #00b4db, #0083b0)",
        height: "100%",
      }}
      onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.02)")}
      onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
    >
      <div className="card-body">
        <h4 className="card-title fw-bold mb-3">{title}</h4>
        <p className="card-text">{description}</p>
      </div>
    </div>
  );
};

export default DashboardCard;
