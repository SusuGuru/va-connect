export default function JoinVA() {
  return (
    <div className="min-h-screen bg-blue-50 flex flex-col items-center">
      {/* Header */}
      <header className="w-full flex justify-between items-center px-8 py-4 bg-white shadow-sm">
        <h1 className="text-xl font-bold text-blue-600">VA Connect</h1>
        <nav className="flex gap-6">
          <a href="/" className="hover:text-blue-600">Home</a>
          <a href="/find-va" className="hover:text-blue-600">Find a VA</a>
          <a href="/joinva" className="hover:text-blue-600">Join as VA</a>
          <a href="/contact" className="hover:text-blue-600">Contact</a>
          <a href="/login" className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
            Log in
          </a>
        </nav>
      </header>

      {/* Form Section */}
      <div className="flex-grow flex items-center justify-center">
        <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
          <h2 className="text-2xl font-bold text-center mb-6 text-blue-600">
            Join as a Virtual Assistant
          </h2>

          <form className="space-y-4">
            {/* Name */}
            <div>
              <label className="block mb-1 font-medium">Name</label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full border rounded-md p-2 focus:ring-2 focus:ring-blue-400"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block mb-1 font-medium">Email</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full border rounded-md p-2 focus:ring-2 focus:ring-blue-400"
              />
            </div>

            {/* Skills */}
            <div>
              <label className="block mb-1 font-medium">Skills</label>
              <textarea
                placeholder="List your skills"
                className="w-full border rounded-md p-2 focus:ring-2 focus:ring-blue-400"
              ></textarea>
            </div>

            {/* Hourly Rate */}
            <div>
              <label className="block mb-1 font-medium">Hourly Rate</label>
              <input
                type="text"
                placeholder="$15/hr"
                className="w-full border rounded-md p-2 focus:ring-2 focus:ring-blue-400"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-semibold py-2 rounded-md hover:bg-blue-700"
            >
              Submit Application
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
