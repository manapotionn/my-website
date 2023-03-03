import React, { useState } from "react";
import TagsNav from "./TagsNav";
import Posts from "./Posts";
import "./CommonPlaceBookIndex.css";

function CommonPlaceBookIndex() {
  const [tagDisplay, setTagDisplay] = useState("lyrics");
  const [isAsc, setIsAsc] = useState("false");
  return (
    <div className="commonPlace-container">
      <div className="tagsNav">
        {/* dynamically get list of tags ? */}
        <TagsNav
          tags={["lyrics", "movie quotes", "book quotes"]}
          setTagDisplay={setTagDisplay}
        />
        <div onClick={() => setIsAsc(!isAsc)}>
          sort by date: {isAsc ? "asc" : "desc"}
        </div>
      </div>
      <div className="posts-container">
        <div>
          <Posts selectedTag={tagDisplay} sortByDate={isAsc} />
        </div>
      </div>
      {/* <div>footer placeholder</div> */}
    </div>
  );
}

export default CommonPlaceBookIndex;
