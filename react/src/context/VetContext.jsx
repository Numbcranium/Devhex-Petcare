import React, { createContext, useContext, useState } from 'react';

const VetContext = createContext();


export function VetProvider({ children }) {
  const [activeVet, setActiveVet] = useState(null);

  return (
    <VetContext.Provider value={{ activeVet, setActiveVet }}>
      {children}
    </VetContext.Provider>
  );
}


export function useVet() {
  return useContext(VetContext);
}
