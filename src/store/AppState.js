import React, { createContext, useContext, useReducer } from "react";

const Context = createContext();

export const initialState = {
  about: {
    open: true,
    title: "about.md",
    z: 0,
  },
  experience: {
    open: true,
    title: "experience.md",
    z: 1,
  },
  skills: {
    open: true,
    title: "skills.md",
    z: 2,
  },
};

export function AppStateProvider({ reducer, children }) {
  const value = useReducer(reducer, initialState);
  return <Context.Provider value={value}>{children}</Context.Provider>;
}

export function useAppState() {
  return useContext(Context);
}
