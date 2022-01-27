import React from "react";
import { TagCloud } from "react-tagcloud";
import { useNavigate } from "react-router-dom";
import "./myTagCloud.css";

export const TagsContainer = (props) => {
  let navigate = useNavigate();

  const handleTag = async (tag) => {
    navigate(`/results/items?tag=${tag}`);
  };

  return (
    <TagCloud
      minSize={20}
      maxSize={35}
      tags={props.tags}
      onClick={(tag) => handleTag(tag.value)}
      className="myTagCloud"
    />
  );
};
