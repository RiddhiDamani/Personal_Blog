import React, { useState } from "react";
import UserBar from "./user/UserBar";
import CreatePost from "./CreatePost";
import PostList from "./PostList";

function App() {
  const [user, setUser] = useState("");

  const posts = [
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
  return (
    <div>
      <UserBar user={user} setUser={setUser} />
      <br />
      <br />
      <hr />
      <br />
      <CreatePost user={user} />
      <PostList posts={posts} />
    </div>
  );
}

export default App;
