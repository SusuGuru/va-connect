import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import FindVA from "./pages/FindVA";
import JoinVA from "./pages/JoinVA";
import ThankYou from "./pages/ThankYou";
import Contact from "./pages/Contact";

function App() {
  // Initial Virtual Assistants
  const [vas, setVas] = useState([
    { id: 1, name: "Sarah Johnson", skills: "Data Entry, Admin", rate: "$15/hr" },
    { id: 2, name: "James Lee", skills: "Customer Support, Email Management", rate: "$20/hr" },
    { id: 3, name: "Maria Gomez", skills: "Social Media Management, Content Creation", rate: "$18/hr" },
  ]);

  // Function to add a new VA
  const addVA = (newVA) => {
    const id = vas.length + 1;
    setVas([...vas, { ...newVA, id }]);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home vas={vas} />} />
        <Route path="/find-va" element={<FindVA vas={vas} />} />
        <Route path="/join-va" element={<JoinVA addVA={addVA} />} />
        <Route path="/thank-you" element={<ThankYou />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
