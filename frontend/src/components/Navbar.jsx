import { Link, useNavigate } from "react-router-dom"

export default function Navbar() {
  const navigate = useNavigate()
  const token = localStorage.getItem("token")

  const handleLogout = () => {
    localStorage.removeItem("token")
    navigate("/login")
  }

  return (
    <nav className="bg-white border-b border-gray-200 shadow-lg">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/home" className="flex items-center space-x-2 text-2xl font-bold" style={{ color: "#1D503A" }}>
              <div
                className="flex items-center justify-center w-8 h-8 rounded-lg"
                style={{ backgroundColor: "#1D503A" }}
              >
                <svg className="w-5 h-5" style={{ color: "#FAF5EE" }} fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
              </div>
              <span>JobWiseAI</span>
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            {!token ? (
              <>
                <Link
                  to="/login"
                  className="px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:text-gray-900"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="px-4 py-2 text-sm font-medium text-white transition-all rounded-lg shadow-sm hover:shadow-md"
                  style={{ backgroundColor: "#1D503A" }}
                >
                  Register
                </Link>
              </>
            ) : (
              <div className="relative group">
                <button className="flex items-center px-3 py-2 space-x-2 transition-colors rounded-lg hover:bg-gray-100">
                  <div
                    className="flex items-center justify-center w-8 h-8 text-sm font-medium text-white rounded-full"
                    style={{ backgroundColor: "#1D503A" }}
                  >
                    U
                  </div>
                  <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className="absolute right-0 z-50 invisible w-48 mt-2 transition-all bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 group-hover:visible">
                  <div className="py-1">
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Profile
                    </a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Settings
                    </a>
                    <button
                      onClick={handleLogout}
                      className="block w-full px-4 py-2 text-sm text-left text-red-600 hover:bg-gray-100"
                    >
                      Logout
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}
