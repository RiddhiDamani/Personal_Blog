import React, { useReducer, useState } from "react";
import UserBar from "./user/UserBar";
import CreatePost from "./CreatePost";
import PostList from "./PostList";
import Header from "./user/Header";
import appReducer from "./reducers";
import { ThemeContext, StateContext } from "./Contexts";
import ChangeTheme from "./ChangeTheme";

function App() {
  const initialPosts = [
    {
      title: "My Post",
      content: "Some text",
      author: "Paul",
      complete: false,
      completedOn: undefined,
    },
    {
      title: "My Post",
      content: "Some text",
      author: "Paul",
      complete: false,
      completedOn: undefined,
    },
    {
      title: "My Post",
      content: "Some text",
      author: "Paul",
      complete: false,
      completedOn: undefined,
    },
    {
      title: "My Post",
      content: "Some text",
      author: "Paul",
      complete: false,
      completedOn: undefined,
    },
    {
      title: "My Post",
      content: "Some text",
      author: "Paul",
      complete: false,
      completedOn: undefined,
    },
  ];

  // Initializing default state of user and posts
  const [state, dispatch] = useReducer(appReducer, {
    user: "",
    posts: initialPosts,
  });

  const { user } = state;

  const [theme, setTheme] = useState({
    primaryColor: "deepskyblue",
    secondaryColor: "coral",
  });

  return (
    <div>
      <ThemeContext.Provider value={theme}>
        <StateContext.Provider value={{ state: state, dispatch: dispatch }}>
          <Header text="My Blog" />
          <ChangeTheme theme={theme} setTheme={setTheme} />
          <UserBar />
          <br />
          <br />
          <hr />
          <br />
          {user && <CreatePost />}
          {user && <PostList />}
        </StateContext.Provider>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
