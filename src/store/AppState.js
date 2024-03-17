import React, { createContext, useContext, useReducer } from "react";

const Context = createContext();

export const initialState = {
  about: {
    open: true,
    minimize: false,
    title: "about.md",
    z: 1,
  },
  experience: {
    open: true,
    minimize: false,
    title: "experience.md",
    z: 2,
  },
  skills: {
    open: true,
    minimize: false,
    title: "skills.md",
    z: 3,
  },
  me: {
    open: true,
    minimize: false,
    title: "me.jpg",
    z: 4,
  },
  eurobets: {
    open: false,
    minimize: false,
    title: "eurobets.exe",
    z: 5,
  },
};

export function AppStateProvider({ reducer, children }) {
  const value = useReducer(reducer, initialState);
  return <Context.Provider value={value}>{children}</Context.Provider>;
}

export function useAppState() {
  return useContext(Context);
}
