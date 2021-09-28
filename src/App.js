import UserBar from "./user/UserBar";
import CreatePost from "./CreatePost";
import PostList from "./PostList";

function App() {
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
      <UserBar />
      <br />
      <br />
      <hr />
      <br />
      <CreatePost user="Paul" />
      <PostList posts={posts} />
    </div>
  );
}

export default App;
