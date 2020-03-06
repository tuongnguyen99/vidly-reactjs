import React from "react";

const Like = ({ liked, onLike }) => {
  return (
    <i
      className={liked ? "fa fa-heart" : "fa fa-heart-o"}
      aria-hidden="true"
      style={{ color: "#f00" }}
      onClick={onLike}
    />
  );
};

export default Like;
