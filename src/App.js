import React, { useState } from "react";
import UserBar from "./user/UserBar";
import CreatePost from "./CreatePost";
import PostList from "./PostList";

function App() {
  const [user, setUser] = useState("");

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

  const [posts, setPosts] = useState(initialPosts);
  return (
    <div>
      <UserBar user={user} setUser={setUser} />
      <br />
      <br />
      <hr />
      <br />
      {user && <CreatePost user={user} posts={posts} setPosts={setPosts} />}
      {user && <PostList posts={posts} />}
    </div>
  );
}

export default App;
