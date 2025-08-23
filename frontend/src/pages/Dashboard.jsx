import { useEffect, useState } from "react";
import axios from "../api";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) return navigate("/login");

    axios.get("/auth/me", {
      headers: { Authorization: `Bearer ${token}` }
    }).then(res => {
      setUser(res.data.user);
    }).catch(() => {
      localStorage.removeItem("token");
      navigate("/login");
    });
  }, [navigate]);

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-base">
      {user ? (
        <h1 className="text-2xl font-bold text-primary">Welcome, {user.name} 👋</h1>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
