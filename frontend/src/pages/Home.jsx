import { useState } from "react"

export default function Home() {
  const [query, setQuery] = useState("")
  const [location, setLocation] = useState("")

  const handleSearch = (e) => {
    e.preventDefault()
    alert(`Searching jobs for: ${query} in ${location}`)
  }

  return (
    <div className="min-h-screen bg-base-100 flex flex-col">
      <section className="hero min-h-screen bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="hero-content text-center">
          <div className="max-w-4xl">
            <h1 className="text-5xl font-bold text-primary mb-6">
              Find Your Dream Job with AI
            </h1>
            <p className="text-xl text-base-content/80 mb-8 max-w-2xl mx-auto">
              JobWiseAI uses advanced artificial intelligence to match you with
              the perfect career opportunities. Discover jobs that align with
              your skills, experience, and aspirations.
            </p>

            <form
              onSubmit={handleSearch}
              className="card bg-base-100 shadow-xl p-8 mb-12"
            >
              <div className="flex flex-col lg:flex-row gap-4 items-end">
                <div className="form-control flex-1">
                  <label className="label">
                    <span className="label-text font-semibold">Job Title</span>
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Software Engineer"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    className="input input-bordered input-lg w-full"
                  />
                </div>

                <div className="form-control flex-1">
                  <label className="label">
                    <span className="label-text font-semibold">Location</span>
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Remote"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="input input-bordered input-lg w-full"
                  />
                </div>

                <button type="submit" className="btn btn-primary btn-lg px-8">
                  Search Jobs
                </button>
              </div>
            </form>

            <div className="stats stats-vertical lg:stats-horizontal shadow mb-8">
              <div className="stat">
                <div className="stat-title">Active Jobs</div>
                <div className="stat-value text-primary">25,000+</div>
              </div>
              <div className="stat">
                <div className="stat-title">Companies</div>
                <div className="stat-value text-secondary">5,000+</div>
              </div>
              <div className="stat">
                <div className="stat-title">Success Rate</div>
                <div className="stat-value text-accent">94%</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}