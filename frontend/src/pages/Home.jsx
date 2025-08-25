import { useState } from "react"

export default function Home() {
  const [query, setQuery] = useState("")
  const [location, setLocation] = useState("")

  const handleSearch = (e) => {
    e.preventDefault()
    alert(`Searching jobs for: ${query} in ${location}`)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero section */}
      <div className="relative overflow-hidden" style={{ backgroundColor: "#FAF5EE" }}>
        <div className="px-4 py-24 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="mb-6 text-6xl font-extrabold" style={{ color: "#1D503A" }}>
              Find Your Dream Job with AI
            </h1>
            <p className="max-w-3xl mx-auto mb-12 text-xl leading-relaxed text-gray-600">
              JobWiseAI uses advanced artificial intelligence to match you with the perfect career opportunities.
              Discover jobs that align with your skills, experience, and aspirations.
            </p>

            <div className="max-w-4xl p-8 mx-auto mb-12 bg-white shadow-xl rounded-2xl">
              <form onSubmit={handleSearch} className="flex flex-col items-end gap-4 lg:flex-row">
                <div className="flex-1">
                  <label className="block mb-2 text-sm font-medium text-gray-700">Job Title or Keywords</label>
                  <input
                    type="text"
                    placeholder="e.g. Software Engineer, Marketing Manager"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    className="w-full px-4 py-3 transition-all border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent"
                    style={{ focusRingColor: "#1D503A" }}
                  />
                </div>
                <div className="flex-1">
                  <label className="block mb-2 text-sm font-medium text-gray-700">Location</label>
                  <input
                    type="text"
                    placeholder="e.g. New York, Remote"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full px-4 py-3 transition-all border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent"
                    style={{ focusRingColor: "#1D503A" }}
                  />
                </div>
                <button
                  type="submit"
                  className="flex items-center px-8 py-3 font-medium text-white transition-all rounded-lg shadow-lg hover:shadow-xl"
                  style={{ backgroundColor: "#1D503A" }}
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                  Search Jobs
                </button>
              </form>
            </div>

            <div className="grid max-w-4xl grid-cols-1 gap-8 mx-auto md:grid-cols-3">
              <div className="p-6 bg-white shadow-lg rounded-xl">
                <div className="mb-2 text-3xl font-bold" style={{ color: "#1D503A" }}>
                  25,000+
                </div>
                <div className="text-gray-600">Active Jobs</div>
              </div>
              <div className="p-6 bg-white shadow-lg rounded-xl">
                <div className="mb-2 text-3xl font-bold" style={{ color: "#1D503A" }}>
                  5,000+
                </div>
                <div className="text-gray-600">Companies</div>
              </div>
              <div className="p-6 bg-white shadow-lg rounded-xl">
                <div className="mb-2 text-3xl font-bold" style={{ color: "#1D503A" }}>
                  94%
                </div>
                <div className="text-gray-600">Success Rate</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="mb-6 text-5xl font-bold" style={{ color: "#1D503A" }}>
            Featured Opportunities
          </h2>
          <p className="max-w-3xl mx-auto text-xl leading-relaxed text-gray-600">
            Discover hand-picked job opportunities from top companies looking for talented professionals like you.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              company: "TechCorp Inc.",
              title: "Senior Software Engineer",
              location: "San Francisco, CA • Remote",
              salary: "$120k - $180k",
              skills: ["React", "Node.js", "TypeScript"],
              badge: "Featured",
              initial: "T",
            },
            {
              company: "DesignStudio",
              title: "Product Designer",
              location: "New York, NY • Hybrid",
              salary: "$90k - $130k",
              skills: ["Figma", "UI/UX", "Prototyping"],
              badge: "New",
              initial: "D",
            },
            {
              company: "MarketPro Agency",
              title: "Marketing Manager",
              location: "Austin, TX • On-site",
              salary: "$75k - $110k",
              skills: ["Digital Marketing", "Analytics", "Strategy"],
              badge: "Hot",
              initial: "M",
            },
          ].map((job, index) => (
            <div
              key={index}
              className="transition-all duration-300 bg-white border border-gray-200 shadow-lg rounded-xl hover:shadow-xl hover:-translate-y-1"
            >
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div
                    className="flex items-center justify-center w-12 h-12 font-bold text-white rounded-lg"
                    style={{ backgroundColor: "#1D503A" }}
                  >
                    {job.initial}
                  </div>
                  <span
                    className="px-3 py-1 text-xs font-medium border rounded-full"
                    style={{ color: "#1D503A", borderColor: "#1D503A" }}
                  >
                    {job.badge}
                  </span>
                </div>
                <h3 className="mb-1 text-lg font-semibold">{job.title}</h3>
                <p className="mb-1 font-medium text-gray-600">{job.company}</p>
                <p className="mb-4 text-sm text-gray-500">{job.location}</p>
                <p className="mb-4 text-sm text-gray-700">
                  Join our innovative team building next-generation software solutions. We're looking for experienced
                  professionals passionate about excellence.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {job.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-2 py-1 text-xs font-medium rounded-full"
                      style={{ backgroundColor: "#FAF5EE", color: "#1D503A" }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold" style={{ color: "#1D503A" }}>
                    {job.salary}
                  </span>
                  <button
                    className="px-4 py-2 text-sm font-medium text-white transition-all rounded-lg hover:shadow-md"
                    style={{ backgroundColor: "#1D503A" }}
                  >
                    Apply Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button
            className="px-12 py-3 text-lg font-medium transition-all border-2 rounded-lg hover:shadow-lg"
            style={{ color: "#1D503A", borderColor: "#1D503A" }}
          >
            View All Jobs
          </button>
        </div>
      </div>
    </div>
  )
}
