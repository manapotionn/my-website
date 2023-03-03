function TagsNav({ tags, setTagDisplay }) {
  return (
    <>
      {tags.map((item, index) => {
        return (
          <div
            className={"tag tag_" + index}
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
