import { useState } from "react";
import axios from "../api.js";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await axios.post("/auth/register", form);
      navigate("/login");
    } catch (err) {
      alert(err.response?.data?.detail || "Registration failed");
    }
  };

  return (
    <div className="h-screen flex items-center justify-center bg-base">
      <form onSubmit={handleSubmit} className="card w-96 bg-white shadow-xl p-6">
        <h2 className="text-xl font-bold mb-4 text-primary">Register</h2>
        <input type="text" name="name" placeholder="Name" className="input input-bordered w-full mb-2"
          onChange={handleChange} />
        <input type="email" name="email" placeholder="Email" className="input input-bordered w-full mb-2"
          onChange={handleChange} />
        <input type="password" name="password" placeholder="Password" className="input input-bordered w-full mb-4"
          onChange={handleChange} />
        <button type="submit" className="btn btn-primary w-full">Sign Up</button>
      </form>
    </div>
  );
}
