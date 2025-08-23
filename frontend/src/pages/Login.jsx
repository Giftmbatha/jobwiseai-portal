import { useState } from "react";
import axios from "../api";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const res = await axios.post("/auth/login", form);
      localStorage.setItem("token", res.data.access_token);
      navigate("/dashboard");
    } catch (err) {
      alert(err.response?.data?.detail || "Login failed");
    }
  };

  return (
    <div className="h-screen flex items-center justify-center bg-base">
      <form onSubmit={handleSubmit} className="card w-96 bg-white shadow-xl p-6">
        <h2 className="text-xl font-bold mb-4 text-primary">Login</h2>
        <input type="email" name="email" placeholder="Email" className="input input-bordered w-full mb-2"
          onChange={handleChange} />
        <input type="password" name="password" placeholder="Password" className="input input-bordered w-full mb-4"
          onChange={handleChange} />
        <button type="submit" className="btn btn-primary w-full">Login</button>
      </form>
    </div>
  );
}
