import React from "react";

const Like = ({ liked, onLike }) => {
  return (
    <i
      className={liked ? "fa fa-heart" : "fa fa-heart-o"}
      aria-hidden="true"
      onClick={onLike}
    />
  );
};

export default Like;
