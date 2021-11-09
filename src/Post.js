import React, { useContext, useEffect } from "react";
import { ThemeContext, StateContext } from "./Contexts";
import { Link } from "react-navi";
import { Card, Button } from "react-bootstrap";
import { useResource } from "react-request-hook";

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

  const [deletedPost, deletePost] = useResource((postId) => ({
    url: `/posts/${postId}`,
    method: "delete",
  }));

  //console.log("Post Rendered!");

  useEffect(() => {
    if (deletedPost && deletedPost.data && deletedPost.isLoading === false) {
      dispatch({ type: "DELETE_POST", postId: postId });
    }
  }, [deletedPost]);

  let processedContent = content;
  if (short) {
    if (content.length > 30) {
      processedContent = content.substring(0, 30) + "...";
    }
  }

  return (
    <Card>
      <Card.Body>
        <Card.Title>
          <Link style={{ color: secondaryColor }} href={`/post/${postId}`}>
            {title}
          </Link>
        </Card.Title>
        <Card.Subtitle>
          <i>
            Written by <b>{author}</b>
          </i>
        </Card.Subtitle>
        <Card.Text>{processedContent}</Card.Text>
        <Button
          variant="link"
          onClick={(e) => {
            deletePost(postId);
          }}
        >
          Delete Post
        </Button>
        {short && <Link href={`/post/${postId}`}>View full post</Link>}
      </Card.Body>
    </Card>
  );
}

export default React.memo(Post);
