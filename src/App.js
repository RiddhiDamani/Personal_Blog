import React, { useReducer, useState, useEffect } from "react";
import UserBar from "./user/UserBar";
import CreatePost from "./CreatePost";
import PostList from "./PostList";
import Header from "./user/Header";
import appReducer from "./reducers";
import { ThemeContext, StateContext } from "./Contexts";
import ChangeTheme from "./ChangeTheme";
import { useResource } from "react-request-hook";

function App() {
  // const initialPosts = [
  //   {
  //     title: "My Post",
  //     content: "Some text",
  //     author: "Paul",
  //     complete: false,
  //     completedOn: undefined,
  //   },
  //   {
  //     title: "My Post",
  //     content: "Some text",
  //     author: "Paul",
  //     complete: false,
  //     completedOn: undefined,
  //   },
  // ];

  //Define a new useResource Hook, where we request /posts:
  const [posts, getPosts] = useResource(() => ({
    url: "/posts",
    method: "get",
  }));

  // Initializing default state of user and posts
  const [state, dispatch] = useReducer(appReducer, {
    user: "",
    posts: [],
  });

  // eslint-disable-next-line
  useEffect(getPosts, []);

  useEffect(() => {
    if (posts && posts.data) {
      dispatch({ type: "FETCH_POSTS", posts: posts.data });
    }
  }, [posts]);

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
          <React.Suspense fallback={"Loading..."}>
            <UserBar />
          </React.Suspense>
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
