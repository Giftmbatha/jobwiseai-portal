import { useState } from "react"
import { Outlet } from "react-router-dom"
import DashboardSidebar from "./DashboardSidebar"

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar for large screens */}
      <div className="hidden md:flex">
        <DashboardSidebar />
      </div>

      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 flex md:hidden"
          onClick={() => setSidebarOpen(false)}
        >
          <div className="fixed inset-0 bg-black bg-opacity-40"></div>
          <div className="relative z-50">
            <DashboardSidebar closeSidebar={() => setSidebarOpen(false)} />
          </div>
        </div>
      )}

      {/* Main content area */}
      <div className="flex flex-col flex-1">
        {/* Top bar */}
        <header className="flex items-center justify-between px-4 py-3 bg-white border-b shadow-sm md:px-6">
          <button
            onClick={() => setSidebarOpen(true)}
            className="p-2 rounded-md md:hidden hover:bg-gray-100"
          >
            {/* Hamburger icon */}
            <svg
              className="w-6 h-6 text-gray-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
          <h1 className="text-lg font-bold text-gray-800">Dashboard</h1>
          <div className="flex items-center gap-3">
            <span className="hidden text-sm text-gray-600 md:block">Welcome back 👋</span>
            <img
              src="https://i.pravatar.cc/40"
              alt="avatar"
              className="w-8 h-8 rounded-full"
            />
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 p-6 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
