import { useState } from "react"
import axios from "../api.js"
import { useNavigate } from "react-router-dom"

export default function Register() {
  const [form, setForm] = useState({ name: "", email: "", password: "" })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const navigate = useNavigate()

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
    if (error) setError("")
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError("")

    try {
      await axios.post("/auth/register", form)
      navigate("/login")
    } catch (err) {
      setError(err.response?.data?.detail || "Registration failed")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen px-4" style={{ backgroundColor: "#FAF5EE" }}>
      <div className="w-full max-w-md">
        <div className="p-8 bg-white shadow-xl rounded-2xl">
          <div className="mb-6 text-center">
            <h2 className="mb-2 text-3xl font-bold" style={{ color: "#1D503A" }}>
              Create Account
            </h2>
            <p className="text-gray-600">Join JobWiseAI today</p>
          </div>

          {error && (
            <div className="p-4 mb-4 border border-red-200 rounded-lg bg-red-50">
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-2 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span className="text-sm text-red-700">{error}</span>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">Full Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter your full name"
                className="w-full px-4 py-3 transition-all border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent"
                style={{ "--tw-ring-color": "#1D503A" }}
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">Email Address</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 transition-all border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent"
                style={{ "--tw-ring-color": "#1D503A" }}
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">Password</label>
              <input
                type="password"
                name="password"
                placeholder="Create a strong password"
                className="w-full px-4 py-3 transition-all border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent"
                style={{ "--tw-ring-color": "#1D503A" }}
                value={form.password}
                onChange={handleChange}
                required
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 font-medium text-white transition-all rounded-lg shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
              style={{ backgroundColor: "#1D503A" }}
              disabled={loading}
            >
              {loading ? (
                <div className="flex items-center justify-center">
                  <svg className="w-5 h-5 mr-3 -ml-1 text-white animate-spin" fill="none" viewBox="0 0 24 24">
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Creating Account...
                </div>
              ) : (
                "Sign Up"
              )}
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-gray-600">
              Already have an account?{" "}
              <button
                onClick={() => navigate("/login")}
                className="font-medium hover:underline"
                style={{ color: "#1D503A" }}
              >
                Sign In
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
