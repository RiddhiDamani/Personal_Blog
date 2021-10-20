import React from "react";
import Logout from "./Logout";
import Register from "./Register";
import Login from "./Login";

export default function UserBar({ user, dispatch }) {
  if (user) {
    return <Logout user={user} dispatch={dispatch} />;
  } else {
    return (
      <>
        <Login dispatch={dispatch} />
        <Register dispatch={dispatch} />
      </>
    );
  }
}
