import React, { useContext } from "react";
import { ThemeContext, StateContext } from "./Contexts";
import { Link } from "react-navi";

function Post({
  title,
  content,
  author,
  complete,
  completedOn,
  postId,
  short = false,
}) {
  const { secondaryColor } = useContext(ThemeContext);
  const { dispatch } = useContext(StateContext);

  //console.log("Post Rendered!");

  let processedContent = content;
  if (short) {
    if (content.length > 30) {
      processedContent = content.substring(0, 30) + "...";
    }
  }

  return (
    <div>
      <Link href={`/post/${postId}`}>
        <h3 style={{ color: secondaryColor }}>{title}</h3>
      </Link>

      <div>{processedContent}</div>
      {short && (
        <div>
          <br />
          <Link href={`/post/${postId}`}>View full post</Link>
        </div>
      )}

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
