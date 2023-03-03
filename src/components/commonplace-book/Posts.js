import postsData from "./data/data.json";
import "./Posts.css";

function Posts({ selectedTag }) {
  return (
    <div className="posts">
      {postsData.map((item, index) => {
        /* i can see this logic being bad when i wanna do pagination... might rethink*/
        if (item.tag === selectedTag) {
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
        }
      })}
    </div>
  );
}

export default Posts;
