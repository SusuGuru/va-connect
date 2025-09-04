function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-blue-50 py-20 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-blue-600">
          Connect with Top Virtual Assistants
        </h1>
        <p className="mt-6 text-lg text-gray-700 max-w-2xl mx-auto">
          VA Connect helps entrepreneurs, businesses, and professionals find
          skilled Virtual Assistants — and gives VAs a platform to showcase
          their talent.
        </p>
        <div className="mt-8 space-x-4">
          <a
            href="/find-va"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
          >
            Find a VA
          </a>
          <a
            href="/become-va"
            className="bg-white text-blue-600 border border-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50"
          >
            Become a VA
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800">
            Why Choose VA Connect?
          </h2>
          <div className="mt-10 grid md:grid-cols-3 gap-8 text-center">
            <div className="p-6 border rounded-lg shadow hover:shadow-lg">
              <h3 className="text-xl font-semibold text-blue-600">Skilled VAs</h3>
              <p className="mt-4 text-gray-600">
                Access a pool of verified and experienced Virtual Assistants.
              </p>
            </div>
            <div className="p-6 border rounded-lg shadow hover:shadow-lg">
              <h3 className="text-xl font-semibold text-blue-600">Global Reach</h3>
              <p className="mt-4 text-gray-600">
                Connect with professionals from anywhere in the world.
              </p>
            </div>
            <div className="p-6 border rounded-lg shadow hover:shadow-lg">
              <h3 className="text-xl font-semibold text-blue-600">Simple & Fast</h3>
              <p className="mt-4 text-gray-600">
                Find or offer services in just a few clicks — no hassle.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
