import React, { useState } from "react";
import Select from "react-select";
import TagsNav from "./TagsNav";
import Posts from "./Posts";
import "./CommonPlaceBookIndex.css";

function CommonPlaceBookIndex() {
  const [tagDisplay, setTagDisplay] = useState("lyrics");
  const [isAsc, setIsAsc] = useState(false);
  const [month, setMonth] = useState(0);

  const generateMonths = () => {
    let monthOptions = [];
    monthOptions.push({ value: 0, label: "--" });
    for (let i = 1; i <= 12; i++) {
      monthOptions.push({ value: i, label: i.toString() });
    }

    return monthOptions;
  };

  return (
    <div className="commonPlace-container">
      <div className="tagsNav">
        {/* dynamically get list of tags ? */}
        <TagsNav
          tags={["lyrics", "movie quotes", "book quotes"]}
          tagDisplay={tagDisplay}
          setTagDisplay={setTagDisplay}
        />
        <Select
          options={generateMonths()}
          onChange={({ value }) => setMonth(value)}
        />
        {/*move all of this into a separate component probably*/}
        <div onClick={() => setIsAsc(!isAsc)}>
          sort by date: {isAsc ? "asc" : "desc"}
        </div>
      </div>
      <div className="posts-container">
        <div>
          <Posts selectedTag={tagDisplay} sortByDate={isAsc} month={month} />
        </div>
      </div>
      {/* <div>footer placeholder</div> */}
    </div>
  );
}

export default CommonPlaceBookIndex;
