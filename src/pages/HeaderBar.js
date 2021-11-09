import React, { useContext } from "react";
import CreatePost from "../CreatePost";
import UserBar from "../user/UserBar";
import Header from "../user/Header";
import ChangeTheme from "../ChangeTheme";
import { ThemeContext, StateContext } from "../Contexts";
import { Link } from "react-navi";

export default function HeaderBar({ setTheme }) {
  const theme = useContext(ThemeContext);
  const { state } = useContext(StateContext);
  const { user } = state;
  return (
    <>
      <Header text="My Blog" />
      <React.Suspense fallback={"Loading..."}>
        <UserBar />
      </React.Suspense>
      <br />
      <br />
      <ChangeTheme theme={theme} setTheme={setTheme} />
      {user && <Link href="/post/create">Create New Post</Link>}

      <br />
    </>
  );
}
