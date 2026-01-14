// context/WindowsContext.js
"use client"; // if you're using this in a Next.js App Router environment

import { createContext, useContext, useState } from "react";

// 1. Create the context
const WindowsContext = createContext();

// 2. Create the provider
export const WindowProvider = ({ children }) => {
  const [windows, setWindows] = useState([]);

  const addWindow = (item) => {
    setWindows((prev) => [...prev, item]);
  };

  const removeWindow = (item) => {
    setWindows((prev) => prev.filter((i) => i !== item));
  };
  const pushToTop = (item) => {
    setWindows((prev) => {
      const newWindows = prev.filter((i) => i !== item);
      return [...newWindows, item];
    });
  };
  const clearWindows = () => {
    setWindows([]);
  };

  return (
    <WindowsContext.Provider
      value={{ windows, addWindow, removeWindow, clearWindows, pushToTop }}
    >
      {children}
    </WindowsContext.Provider>
  );
};

// 3. Custom hook for easy access
export const useWindowsContext = () => {
  const context = useContext(WindowsContext);
  if (!context)
    throw new Error("useWindowsContext must be used inside WindowProvider");
  return context;
};
