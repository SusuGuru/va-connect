import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-16 px-6">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
          {/* Left Text */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
              Connect with Top Virtual Assistants
            </h1>
            <p className="text-lg md:text-xl mb-6">
              VA Connect helps entrepreneurs, businesses, and professionals find
              skilled VAs and gives them a platform to showcase their talent.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link
                to="/find-va"
                className="px-6 py-3 bg-white text-blue-700 font-semibold rounded-lg shadow hover:bg-blue-50"
              >
                Find a VA
              </Link>
              <Link
                to="/joinva"
                className="px-6 py-3 bg-yellow-400 text-gray-900 font-semibold rounded-lg shadow hover:bg-yellow-300"
              >
                Join as VA
              </Link>
            </div>
          </div>

          {/* Right Illustration (placeholder) */}
          <div className="flex-1 hidden md:flex justify-center">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3062/3062634.png"
              alt="Virtual Assistant Illustration"
              className="w-72 md:w-96"
            />
          </div>
        </div>
      </section>

      {/* Featured Virtual Assistants */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-10">
            Featured Virtual Assistants
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {[
              {
                name: "Maria Gomez",
                role: "Social Media Management, Content Creation",
                price: "$35/hr",
              },
              {
                name: "James Lee",
                role: "Customer Support, Email Management",
                price: "$40/hr",
              },
              {
                name: "Sarah Johnson",
                role: "Data Entry, Admin",
                price: "$50/hr",
              },
            ].map((va) => (
              <div
                key={va.name}
                className="bg-gray-50 shadow-md rounded-xl p-6 hover:shadow-lg transition"
              >
                <div className="w-20 h-20 bg-blue-100 rounded-full mx-auto mb-4"></div>
                <h3 className="text-lg font-semibold">{va.name}</h3>
                <p className="text-gray-600 text-sm mb-2">{va.role}</p>
                <p className="font-bold text-blue-600">{va.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-10">
            How it Works
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div>
              <div className="w-14 h-14 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                🔍
              </div>
              <h3 className="font-semibold text-lg">Search VAs</h3>
              <p className="text-gray-600 text-sm">
                Find skilled Virtual Assistants based on skills and expertise.
              </p>
            </div>
            <div>
              <div className="w-14 h-14 bg-green-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                🤝
              </div>
              <h3 className="font-semibold text-lg">Connect & Hire</h3>
              <p className="text-gray-600 text-sm">
                Contact VAs directly and hire the best match for your business.
              </p>
            </div>
            <div>
              <div className="w-14 h-14 bg-purple-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                📂
              </div>
              <h3 className="font-semibold text-lg">Manage Projects</h3>
              <p className="text-gray-600 text-sm">
                Collaborate and manage your projects efficiently with your VA.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-10">
            What Our Users Say
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="p-6 bg-gray-50 rounded-xl shadow">
              <p className="text-gray-600 mb-4">
                "VA Connect helped me find an amazing VA within days!"
              </p>
              <p className="font-semibold">- Michael ⭐⭐⭐⭐⭐</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-xl shadow">
              <p className="text-gray-600 mb-4">
                "Highly recommend for anyone needing skilled assistants."
              </p>
              <p className="font-semibold">- Sarah ⭐⭐⭐⭐⭐</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-800 text-center mb-10">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-lg mb-2">How do I hire a VA?</h3>
              <p className="text-gray-600 text-sm">
                Simply sign up, browse available VAs, and connect with the best
                fit for your business needs.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">Can I join as a VA?</h3>
              <p className="text-gray-600 text-sm">
                Yes! Just click "Join as VA" to create your profile and showcase
                your skills.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-6 text-center text-gray-600 border-t">
        © {new Date().getFullYear()} VA Connect. All rights reserved.
      </footer>
    </div>
  );
}
