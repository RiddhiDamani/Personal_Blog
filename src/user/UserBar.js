import React, { useContext } from "react";
import Register from "./Register";
import Login from "./Login";
import { StateContext } from "../Contexts";

export default function UserBar() {
  const Logout = React.lazy(() => import("./Logout"));
  const { state } = useContext(StateContext);

  if (state.user) {
    return <Logout />;
  } else {
    return (
      <>
        <Login />
        <Register />
      </>
    );
  }
}
