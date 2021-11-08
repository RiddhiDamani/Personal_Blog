import React, { useContext } from "react";
import { ThemeContext, StateContext } from "./Contexts";

function Post({ title, content, author, complete, completedOn, postId }) {
  const { secondaryColor } = useContext(ThemeContext);
  const { dispatch } = useContext(StateContext);

  console.log("Post Rendered!");

  return (
    <div>
      <h3 style={{ color: secondaryColor }}>{title}</h3>
      <div>{content}</div>
      <br />
      <i>
        Written by <b>{author}</b>
      </i>
      <input
        type="checkbox"
        onClick={(e) => {
          dispatch({
            type: "TOGGLE_POST",
            complete: !complete,
            postId: postId,
          });
        }}
      ></input>
      <button
        onClick={(e) => {
          dispatch({ type: "DELETE_POST", postId: postId });
        }}
      >
        Delete Post
      </button>
      {complete && (
        <>
          <br />
          <i>
            Completed On: {new Date(completedOn).toLocaleDateString("en-us")}
          </i>
          <br />
        </>
      )}
    </div>
  );
}

export default React.memo(Post);
