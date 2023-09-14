import React from "react";
import Tag from "./tag/tag";

const Tags = ({ tags, setValue, getValues }) => {
  const removeTagHandler = (tag: string) => {
    const filteredTags = getValues().tags.array.filter(
      (eachTag: string) => eachTag !== tag
    );
    setValue("tags.array", filteredTags);
  };
  return (
    <>
      {tags.map((tag: string, index: string) => {
        return (
          <Tag
            key={index}
            tag={tag}
            removeTagHandler={removeTagHandler}
          />
        );
      })}
    </>
  );
};

export default Tags;
