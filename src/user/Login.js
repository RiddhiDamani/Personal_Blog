import React, { useState } from "react";

export default function Login({ dispatchUser }) {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    passwordRepeat: "",
  });

  return (
    // onSubmit - When submit btn gets clicked, its going to trigger the onSubmit attribute.
    // preventDefaults() means stops the browser to referesh the page.
    <form
      onSubmit={(evt) => {
        evt.preventDefault();
        dispatchUser({ type: "LOGIN", username: formData.username });
      }}
    >
      <label htmlFor="login-username">Username:</label>
      <input
        type="text"
        name="login-username"
        id="login-username"
        value={formData.username}
        onChange={(e) => setFormData({ ...formData, username: e.target.value })}
      />
      <label htmlFor="login-password">Password:</label>
      <input type="password" name="login-password" id="login-password" />
      <input type="submit" value="Login" disabled={formData.length === 0} />
    </form>
  );
}
