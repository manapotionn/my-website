import React, { useState } from "react";
import TagsNav from "./TagsNav";
import Posts from "./Posts";
import "./CommonPlaceBookIndex.css";

function CommonPlaceBookIndex() {
  const [tagDisplay, setTagDisplay] = useState("lyrics");
  return (
    <div className="commonPlace-container">
      <div className="tagsNav">
        {/* dynamically get list of tags */}
        <TagsNav
          tags={["lyrics", "movie quotes", "book quotes"]}
          setTagDisplay={setTagDisplay}
        />
      </div>
      <div className="posts-container">
        <div>
          <Posts selectedTag={tagDisplay} />
        </div>
      </div>
      {/* <div>footer placeholder</div> */}
    </div>
  );
}

export default CommonPlaceBookIndex;
