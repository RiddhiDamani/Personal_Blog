import React, { useReducer, useState, useEffect } from "react";
import HomePage from "./pages/HomePage";
import appReducer from "./reducers";
import { ThemeContext, StateContext } from "./Contexts";
import HeaderBar from "./pages/HeaderBar";
import { mount, route } from "navi";
import CreatePost from "./CreatePost";
import PostPage from "./pages/PostPage";
import { Router, View } from "react-navi";

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
  // const [posts, getPosts] = useResource(() => ({
  //   url: "/posts",
  //   method: "get",
  // }));

  // Initializing default state of user and posts
  const [state, dispatch] = useReducer(appReducer, {
    user: "",
    posts: [],
  });

  // eslint-disable-next-line
  // useEffect(getPosts, []);

  // useEffect(() => {
  //   if (posts && posts.data) {
  //     dispatch({ type: "FETCH_POSTS", posts: posts.data });
  //   }
  // }, [posts]);

  const { user } = state;

  const [theme, setTheme] = useState({
    primaryColor: "deepskyblue",
    secondaryColor: "coral",
  });

  const routes = mount({
    "/": route({ view: <HomePage /> }),
    "/post/create": route({ view: <CreatePost /> }),
    "/post/:id": route((req) => {
      return { view: <PostPage id={req.params.id} /> };
    }),
  });

  return (
    <div>
      <ThemeContext.Provider value={theme}>
        <StateContext.Provider value={{ state: state, dispatch: dispatch }}>
          <Router routes={routes}>
            <div style={{ padding: 8 }}>
              <HeaderBar setTheme={setTheme} />
              <hr />
              <View />
            </div>
          </Router>

          {/* <Header text="My Blog" />
          <ChangeTheme theme={theme} setTheme={setTheme} />
          <React.Suspense fallback={"Loading..."}>
            <UserBar />
          </React.Suspense>
          <br />
          <br />
          <hr />
          <br />
          {user && <CreatePost />} */}
          {/* {user && <PostList />} */}
        </StateContext.Provider>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
