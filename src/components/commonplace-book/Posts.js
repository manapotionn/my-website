import postsData from "./data/data.json";
import "./Posts.css";
import Tape from "./Tape";
import { STICKY_COLORS } from "./Constants";

function Posts({ selectedTag, sortByDate, month, year }) {
  const filtered_data = postsData.filter((obj) => {
    return (
      obj.tag === selectedTag &&
      (month !== 0 ? obj.month === month : obj.month > 0) &&
      (year !== 0 ? obj.year === year : obj.year > 0)
    );
  });

  function asc(a, b) {
    return a.year - b.year === 0 ? a.month - b.month : a.year - b.year;
  }

  function desc(a, b) {
    return b.year - a.year === 0 ? b.month - a.month : b.year - a.year;
  }

  if (sortByDate) {
    filtered_data.sort(asc);
  } else {
    filtered_data.sort(desc);
  }

  const randomColor = () => {
    return STICKY_COLORS[Math.floor(Math.random() * STICKY_COLORS.length)];
  };

  return (
    <div className="posts">
      {filtered_data.map((item, index) => {
        let quotes = item.content.split("\\");
        return (
          <div
            className={"post_" + index + " post"}
            style={{ backgroundColor: randomColor() }}
          >
            <Tape isLeft={false} isTop isCenter={false} isRotated={false} />
            <div className={"content content" + index}>
              {quotes.map((line, index2) => {
                return <div className={"line_" + index2}>{line}</div>;
              })}
              <div className={"source"}>
                <div>{"-- " + item.author}</div>
                <div>{item.source}</div>
              </div>
            </div>
            <Tape isLeft={true} isTop={false} isRotated={false} />
          </div>
        );
      })}
    </div>
  );
}

export default Posts;
