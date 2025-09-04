function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center">
      <header className="text-center">
        <h1 className="text-5xl font-extrabold text-blue-600">VA Connect</h1>
        <p className="mt-4 text-lg text-gray-700">
          Connecting Virtual Assistants with clients worldwide 🌍
        </p>
        <div className="mt-6 space-x-4">
          <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            Find a VA
          </button>
          <button className="px-6 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300">
            Become a VA
          </button>
        </div>
      </header>
    </div>
  );
}

export default App;
