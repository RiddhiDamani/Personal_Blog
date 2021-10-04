import React, { useReducer } from "react";
import UserBar from "./user/UserBar";
import CreatePost from "./CreatePost";
import PostList from "./PostList";

function App() {
  //const [user, setUser] = useState("");
  //const [posts, setPosts] = useState(initialPosts);

  const initialPosts = [
    {
      title: "My Post",
      content: "Some text",
      author: "Paul",
    },
    {
      title: "My Post",
      content: "Some text",
      author: "Paul",
    },
    {
      title: "My Post",
      content: "Some text",
      author: "Paul",
    },
    {
      title: "My Post",
      content: "Some text",
      author: "Paul",
    },
    {
      title: "My Post",
      content: "Some text",
      author: "Paul",
    },
  ];

  function userReducer(state, action) {
    switch (action.type) {
      case "LOGIN":
      case "REGISTER":
        return action.username;
      case "LOGOUT":
        return "";
      default:
        throw new Error();
    }
  }

  function postsReducer(state, action) {
    switch (action.type) {
      case "CREATE_POST":
        const newPost = {
          title: action.title,
          content: action.content,
          author: action.author,
        };
        return [newPost, ...state];
      default:
        throw new Error();
    }
  }

  const [user, dispatchUser] = useReducer(userReducer, "");
  const [posts, dispatchPosts] = useReducer(postsReducer, initialPosts);

  return (
    <div>
      <UserBar user={user} dispatchUser={dispatchUser} />
      <br />
      <br />
      <hr />
      <br />
      {user && <CreatePost user={user} dispatchPosts={dispatchPosts} />}
      {user && <PostList posts={posts} />}
    </div>
  );
}

export default App;
