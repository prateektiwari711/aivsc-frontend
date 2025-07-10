import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Sidebar from "./components/Sidebar";
import AdminPanel from "./pages/AdminPanel";
import AdminLogin from "./pages/AdminLogin";
import ResourcePage from "./pages/ResourcePage";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="d-flex">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resources/:category" element={<ResourcePage />} />
          <Route path="/admin-panel" element={<AdminPanel />} />
          <Route path="/admin-login" element={<AdminLogin />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
