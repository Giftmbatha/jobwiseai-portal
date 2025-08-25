import { useState } from "react"
import axios from "../api"
import { useNavigate } from "react-router-dom"

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" })
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
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
      const res = await axios.post("/auth/login", form)
      localStorage.setItem("token", res.data.access_token)
      navigate("/Dashboard")
    } catch (err) {
      setError(err.response?.data?.detail || "Login failed")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen px-4" style={{ backgroundColor: "#FAF5EE" }}>
      <div className="w-full max-w-md">
        <div className="mb-8 text-center">
          <h1 className="mb-2 text-4xl font-bold" style={{ color: "#1D503A" }}>
            JobWiseAI
          </h1>
          <p className="text-gray-600">Welcome back! Sign in to your account</p>
        </div>

        <div className="p-8 bg-white shadow-xl rounded-2xl">
          <h2 className="mb-6 text-2xl font-bold text-center text-gray-900">Sign In</h2>

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
              <label className="block mb-2 text-sm font-medium text-gray-700">Email Address</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 transition-all border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent"
                style={{ "--tw-ring-color": "#1D503A" }}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">Password</label>
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                className="w-full px-4 py-3 transition-all border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent"
                style={{ "--tw-ring-color": "#1D503A" }}
                onChange={handleChange}
                required
              />
              <div className="mt-2 text-right">
                <a href="#" className="text-sm hover:underline" style={{ color: "#1D503A" }}>
                  Forgot password?
                </a>
              </div>
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
                  Signing In...
                </div>
              ) : (
                "Sign In"
              )}
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-gray-600">
              Don't have an account?{" "}
              <a href="/register" className="font-medium hover:underline" style={{ color: "#1D503A" }}>
                Sign up here
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
