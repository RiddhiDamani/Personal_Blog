import React, { useContext } from "react";
import { ThemeContext } from "./Contexts";

export default function Post({
  title,
  content,
  author,
  complete,
  completedOn,
  postId,
  dispatch,
}) {
  const { secondaryColor } = useContext(ThemeContext);

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
