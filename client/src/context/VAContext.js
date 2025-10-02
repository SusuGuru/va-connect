import React, { createContext, useContext, useState } from "react";

const VAContext = createContext();
export const useVA = () => useContext(VAContext);

export function VAProvider({ children }) {
  const [vas, setVAs] = useState([
    { id: 1, name: "Jane Doe", skills: "Admin, Social Media", rate: "$15/hr", activeClients: 1 },
    { id: 2, name: "John Smith", skills: "Data Entry, Research", rate: "$20/hr", activeClients: 2 },
  ]);

  const hireVA = (id) => {
    setVAs((prev) =>
      prev.map((va) =>
        va.id === id ? { ...va, activeClients: Math.min(va.activeClients + 1, 2) } : va
      )
    );
  };

  return (
    <VAContext.Provider value={{ vas, hireVA }}>
      {children}
    </VAContext.Provider>
  );
}
