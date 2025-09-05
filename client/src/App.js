import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import FindVA from "./pages/FindVA";
import JoinVA from "./pages/JoinVA"; // renamed

function App() {
  return (
    <Router>
      <nav className="bg-white shadow p-4 flex justify-between">
        <h1 className="text-xl font-bold text-blue-600">VA Connect</h1>
        <div className="space-x-4">
          <Link to="/" className="text-gray-700 hover:text-blue-600">Home</Link>
          <Link to="/find-va" className="text-gray-700 hover:text-blue-600">Find a VA</Link>
          <Link to="/join-va" className="text-gray-700 hover:text-blue-600">Join as a VA</Link>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/find-va" element={<FindVA />} />
        <Route path="/join-va" element={<JoinVA />} />
      </Routes>
    </Router>
  );
}

export default App;
