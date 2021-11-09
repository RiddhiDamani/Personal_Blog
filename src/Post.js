import React, { useContext } from "react";
import { ThemeContext, StateContext } from "./Contexts";
import { Link } from "react-navi";
import { Card } from "react-bootstrap";

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
        {short && <Link href={`/post/${postId}`}>View full post</Link>}
      </Card.Body>
    </Card>
  );
}

export default React.memo(Post);
