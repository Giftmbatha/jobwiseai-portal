import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="navbar bg-primary text-white px-6 shadow-md">
      <div className="flex-1">
        <Link to="/home" className="btn btn-ghost normal-case text-xl text-white">
          EduJob Portal
        </Link>
      </div>
      <div className="flex-none gap-2">
        {!token ? (
          <>
            <Link to="/login" className="btn btn-sm">Login</Link>
            <Link to="/register" className="btn btn-sm btn-outline">Register</Link>
          </>
        ) : (
          <button onClick={handleLogout} className="btn btn-sm btn-outline">
            Logout
          </button>
        )}
      </div>
    </div>
  );
}
