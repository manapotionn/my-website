import { PAGE_COLORS } from "./Constants";

function TagsNav({ tags, tagDisplay, setTagDisplay }) {
  return (
    <>
      {tags.map((item, index) => {
        let selectedTag = tagDisplay === item ? " selected-tag" : "";
        return (
          <div
            style={{ backgroundColor: PAGE_COLORS[item] }}
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
