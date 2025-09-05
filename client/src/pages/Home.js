import Header from "../components/Header";
import { Link } from "react-router-dom";

export default function Home({ vas }) {
  const featuredVAs = (vas || []).slice(-3).reverse();

  return (
    <div>
      <Header />

      {/* Hero Section */}
      <section className="bg-blue-50 py-24 text-center">
        <h1 className="text-6xl md:text-7xl font-extrabold text-blue-600 mb-4 animate-pulse">
          VA Connect
        </h1>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-8">
          Connect with top Virtual Assistants. VA Connect helps entrepreneurs, businesses, and professionals find skilled VAs and gives them a platform to showcase their talent.
        </p>
        <div className="space-x-4">
          <Link
            to="/find-va"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Find a VA
          </Link>
          <Link
            to="/join-va"
            className="bg-white text-blue-600 border border-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition"
          >
            Join as a VA
          </Link>
        </div>
      </section>

      {/* Featured VAs */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-10">Featured Virtual Assistants</h2>
          {featuredVAs.length > 0 ? (
            <div className="grid md:grid-cols-3 gap-6">
              {featuredVAs.map((va) => (
                <div key={va.id} className="border rounded-xl p-6 shadow hover:shadow-lg transition group">
                  <h3 className="text-xl font-semibold">{va.name}</h3>
                  <p className="text-gray-600 mt-2">{va.skills}</p>
                  <p className="text-blue-600 font-bold mt-2">{va.rate}</p>
                  <Link
                    to="/find-va"
                    className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition opacity-0 group-hover:opacity-100"
                  >
                    Contact
                  </Link>
                </div>
              ))}
            </div>
          ) : (
            <p className="mt-6 text-gray-500 text-lg">No featured VAs available.</p>
          )}
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-10">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 border rounded-lg shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-blue-600">Search VAs</h3>
              <p className="mt-4 text-gray-600">Find verified Virtual Assistants based on skills and expertise.</p>
            </div>
            <div className="p-6 border rounded-lg shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-blue-600">Connect & Hire</h3>
              <p className="mt-4 text-gray-600">Contact VAs directly and hire the best match for your business.</p>
            </div>
            <div className="p-6 border rounded-lg shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-blue-600">Manage Projects</h3>
              <p className="mt-4 text-gray-600">Collaborate and manage your projects efficiently with your VA.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-10">What Our Users Say</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 border rounded-lg shadow hover:shadow-lg transition">
              <p className="text-gray-600 italic">"VA Connect helped me find an amazing VA within days!"</p>
              <p className="mt-4 font-semibold text-blue-600">— Michael</p>
            </div>
            <div className="p-6 border rounded-lg shadow hover:shadow-lg transition">
              <p className="text-gray-600 italic">"Highly recommend for anyone needing skilled assistants."</p>
              <p className="mt-4 font-semibold text-blue-600">— Sarah</p>
            </div>
            <div className="p-6 border rounded-lg shadow hover:shadow-lg transition">
              <p className="text-gray-600 italic">"The platform is intuitive and VAs are top-notch."</p>
              <p className="mt-4 font-semibold text-blue-600">— James</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-10">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-blue-600">How do I hire a VA?</h3>
              <p className="mt-2 text-gray-600">Browse the profiles, contact the VA, and agree on terms directly.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-blue-600">Can I join as a VA?</h3>
              <p className="mt-2 text-gray-600">Yes! Click on "Join as a VA" and submit your application.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-blue-600">What payment methods are accepted?</h3>
              <p className="mt-2 text-gray-600">Payments depend on agreement between you and the VA. Common options include PayPal and bank transfer.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-600 text-white py-8 mt-12">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {new Date().getFullYear()} VA Connect. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
            <a href="https://wa.me/YOURNUMBER" target="_blank" rel="noopener noreferrer">WhatsApp</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
