import React, { createContext, useContext, useReducer } from "react";

const Context = createContext();

export const initialState = {
  about: {
    open: true,
    minimize: false,
    title: "about.md",
    x: 100,
    y: 20,
    z: 1,
  },
  experience: {
    open: true,
    minimize: false,
    title: "experience.md",
    x: 515,
    y: 170,
    z: 2,
  },
  skills: {
    open: true,
    minimize: false,
    title: "skills.md",
    x: 830,
    y: 20,
    z: 3,
  },
  me: {
    open: true,
    minimize: false,
    title: "me.jpg",
    x: 215,
    y: 230,
    z: 4,
  },
  eurobets: {
    open: false,
    minimize: false,
    title: "eurobets.exe",
    x: 0,
    y: 0,
    z: 1,
  },
  experiments: {
    open: false,
    minimize: false,
    title: "experiments",
    x: 0,
    y: 0,
    z: 1,
  },
};

export function AppStateProvider({ reducer, children }) {
  const value = useReducer(reducer, initialState);
  return <Context.Provider value={value}>{children}</Context.Provider>;
}

export function useAppState() {
  return useContext(Context);
}
