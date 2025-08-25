"use client"
import { useNavigate } from "react-router-dom"

export default function DashboardSidebar({ isOpen, setIsOpen }) {
  const navigate = useNavigate()

  const handleLogout = () => {
    localStorage.removeItem("token")
    navigate("/login")
  }

  const menuItems = [
    { label: "Dashboard", icon: "M3 7v10...", action: () => navigate("/dashboard") },
    { label: "Search Jobs", icon: "M21 21l-6-6...", action: () => navigate("/") },
    { label: "My Applications", icon: "M9 12h6...", action: () => console.log("Applications") },
    { label: "Saved Jobs", icon: "M4.318 6.318...", action: () => console.log("Saved Jobs") },
    { label: "Profile", icon: "M16 7a4 4...", action: () => console.log("Profile") },
    { label: "Resume Builder", icon: "M12 6.253v13...", action: () => console.log("Resume Builder") },
    { label: "Analytics", icon: "M9 19v-6...", action: () => console.log("Analytics") },
    { label: "Settings", icon: "M10.325 4.317...", action: () => console.log("Settings") },
  ]

  return (
    <>
      {/* Overlay (only mobile) */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black bg-opacity-50 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-80 z-50 transform transition-transform duration-300 ease-in-out
        ${isOpen ? "translate-x-0" : "-translate-x-full"}
        lg:translate-x-0 lg:static lg:z-auto`}
        style={{ backgroundColor: "#FAF5EE" }}
      >
        <div className="flex flex-col h-full border-r border-gray-200 shadow-lg">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <div className="flex items-center space-x-3">
              <div
                className="flex items-center justify-center w-10 h-10 rounded-lg"
                style={{ backgroundColor: "#1D503A" }}
              >
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2V6"
                  />
                </svg>
              </div>
              <h2 className="text-xl font-bold" style={{ color: "#1D503A" }}>JobWiseAI</h2>
            </div>
            {/* Close button (only mobile) */}
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 transition-colors rounded-lg lg:hidden hover:bg-gray-100"
            >
              <svg className="w-5 h-5" style={{ color: "#1D503A" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4 space-y-2">
            {menuItems.map((item, index) => (
              <button
                key={index}
                onClick={item.action}
                className="flex items-center w-full px-4 py-3 space-x-3 text-left transition-all duration-200 rounded-lg hover:bg-white hover:shadow-sm group"
              >
                <svg
                  className="w-5 h-5 transition-transform group-hover:scale-110"
                  style={{ color: "#1D503A" }}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                </svg>
                <span className="font-medium text-gray-700 group-hover:text-gray-900">{item.label}</span>
              </button>
            ))}
          </nav>

          {/* Footer */}
          <div className="p-4 border-t border-gray-200">
            <button
              onClick={handleLogout}
              className="flex items-center w-full px-4 py-3 space-x-3 text-left transition-all duration-200 rounded-lg hover:bg-red-50 group"
            >
              <svg
                className="w-5 h-5 text-red-600 transition-transform group-hover:scale-110"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                />
              </svg>
              <span className="font-medium text-red-600">Logout</span>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
