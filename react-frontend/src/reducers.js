function userReducer(state, action) {
  switch (action.type) {
    case "LOGIN":
    case "REGISTER":
      return action.username;
    case "LOGOUT":
      return "";
    default:
      return state;
  }
}

function postsReducer(state, action) {
  switch (action.type) {
    case "CREATE_POST":
      const newPost = {
        id: action.id,
        title: action.title,
        content: action.content,
        author: action.author,
        complete: false,
        completedOn: undefined,
      };
      return [newPost, ...state];
    case "TOGGLE_POST":
      // update the complete field and set the date on which it got completed.
      // map allows us to loop over the array and perform action on individual item
      // updating post state
      return state.map((p, i) => {
        if (i === action.postId) {
          p.complete = action.complete;
          p.completedOn = Date.now();
          //console.log(p);
        }
        return p;
      });
    case "DELETE_POST":
      // excludes the post matching the index of the post we want to delete
      // p = post itself, i = index of the post
      // if it matches then will not be in our filter list, else it will be.
      return state.filter((p) => p.id !== action.postId);
    case "FETCH_POSTS":
      return action.posts;
    default:
      return state;
  }
}

export default function appReducer(state, action) {
  return {
    user: userReducer(state.user, action),
    posts: postsReducer(state.posts, action),
  };
}
