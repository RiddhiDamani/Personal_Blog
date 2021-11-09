import React from "react";

export const ThemeContext = React.createContext({
  primaryColor: "deepskyblue",
  secondaryColor: "coral",
});

// providing default valeus to state and dispatch
export const StateContext = React.createContext({
  state: {},
  dispatch: () => {},
});
