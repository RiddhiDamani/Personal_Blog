import React, { useContext, useState, useEffect } from "react";
import { StateContext } from "./Contexts";
import { useResource } from "react-request-hook";
import { useNavigation } from "react-navi";

export default function CreatePost() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigation = useNavigation();

  //Passing object into a createPost call
  const [post, createPost] = useResource(({ title, content, author }) => ({
    url: "/posts",
    method: "post",
    data: { title, content, author },
  }));

  const { state, dispatch } = useContext(StateContext);

  function handleTitle(evt) {
    setTitle(evt.target.value);
  }

  function handleContent(evt) {
    setContent(evt.target.value);
  }

  function handleCreate() {
    // create post is a network request. AXIOS will fire this network request asynchronously
    createPost({ title, content, author: state.user });
  }

  useEffect(() => {
    // if post.data contains a value - it indicates that the request is complete and we
    // have recieved data back from the server.
    if (post && post.data) {
      dispatch({
        type: "CREATE_POST",
        title: post.data.title,
        content: post.data.content,
        id: post.data.id,
        author: state.user,
      });
      navigation.navigate(`/post/${post.data.id}`);
    }
    // eslint-disable-next-line
  }, [post]);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleCreate();
      }}
    >
      <div>
        Author: <b>{state.user}</b>
      </div>

      <div>
        <label htmlFor="create-title">Title:</label>
        <input
          type="text"
          name="create-title"
          id="create-title"
          value={title}
          onChange={handleTitle}
        />
      </div>

      <textarea value={content} onChange={handleContent} />
      <input type="submit" value="Create" />
    </form>
  );
}
