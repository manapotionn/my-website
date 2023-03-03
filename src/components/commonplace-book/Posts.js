import postsData from "./data/data.json";
import "./Posts.css";

function Posts({ selectedTag, sortByDate }) {
  const filtered_data = postsData.filter((obj) => {
    return obj.tag === selectedTag;
  });

  function asc(a, b) {
    return a.year - b.year;
  }

  function desc(a, b) {
    return b.year - a.year;
  }

  if (sortByDate) {
    filtered_data.sort(asc);
  } else {
    filtered_data.sort(desc);
  }

  return (
    <div className="posts">
      {filtered_data.map((item, index) => {
        let quotes = item.content.split("\\");
        return (
          <div className={"post_" + index + " post"}>
            <div className={"content content" + index}>
              {quotes.map((line, index2) => {
                return <div className={"line_" + index2}>{line}</div>;
              })}
              <div className={"source"}>
                <div>{"-- " + item.author}</div>
                <div>{item.source}</div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Posts;
