function TagsNav({ tags, tagDisplay, setTagDisplay }) {
  return (
    <>
      {tags.map((item, index) => {
        let selectedTag = tagDisplay === item ? " selected-tag" : "";
        return (
          <div
            className={"tag tag_" + index + selectedTag}
            onClick={() => setTagDisplay(item)}
          >
            {item}
          </div>
        );
      })}
    </>
  );
}

export default TagsNav;
