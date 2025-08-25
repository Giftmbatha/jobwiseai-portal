import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Register from "./pages/Register"
import Login from "./pages/Login"
import Dashboard from "./components/Dashboard"

function App() {
  const token = localStorage.getItem("token")

  return (
    <Router>
      <div className="min-h-screen" style={{ backgroundColor: "#FAF5EE" }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={token ? <Dashboard /> : <Navigate to="/login" />} />
          
        </Routes>
      </div>
    </Router>
  )
}

export default App
