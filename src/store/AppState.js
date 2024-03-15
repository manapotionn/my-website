import React, { createContext, useContext, useReducer } from "react";

const Context = createContext();

export const initialState = {
  about: {
    open: true,
    minimize: false,
    title: "about.md",
    z: 0,
  },
  experience: {
    open: true,
    minimize: false,
    title: "experience.md",
    z: 1,
  },
  skills: {
    open: true,
    minimize: false,
    title: "skills.md",
    z: 2,
  },
  me: {
    open: true,
    minimize: false,
    title: "me.jpg",
    z: 3,
  },
  eurobets: {
    open: false,
    minimize: false,
    title: "eurobets.exe",
    z: 4,
  },
};

export function AppStateProvider({ reducer, children }) {
  const value = useReducer(reducer, initialState);
  return <Context.Provider value={value}>{children}</Context.Provider>;
}

export function useAppState() {
  return useContext(Context);
}
