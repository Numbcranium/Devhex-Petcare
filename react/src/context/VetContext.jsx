import React, { createContext, useContext, useState } from 'react';

// 1. Create the context
const VetContext = createContext();

// 2. Context provider component
export function VetProvider({ children }) {
  const [activeVet, setActiveVet] = useState(null);

  return (
    <VetContext.Provider value={{ activeVet, setActiveVet }}>
      {children}
    </VetContext.Provider>
  );
}

// 3. Custom hook for easy access
// eslint-disable-next-line react-refresh/only-export-components
export function useVet() {
  return useContext(VetContext);
}
