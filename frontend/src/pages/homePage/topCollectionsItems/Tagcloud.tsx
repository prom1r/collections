import React from "react";
import { TagCloud } from "react-tagcloud";

export const TagsContainer = (props) => {
  return (
    <TagCloud
      minSize={20}
      maxSize={35}
      tags={props.tags}
      onClick={(tag) => alert(`'${tag.value}' was selected!`)}
    />
  );
};
