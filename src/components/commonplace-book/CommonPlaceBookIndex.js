import React, { useState } from "react";
import Select from "react-select";
import TagsNav from "./TagsNav";
import Posts from "./Posts";
import "./CommonPlaceBookIndex.css";

function CommonPlaceBookIndex() {
  const [tagDisplay, setTagDisplay] = useState("lyrics");
  const [isAsc, setIsAsc] = useState(false);
  const [month, setMonth] = useState(0);
  const [year, setYear] = useState(0);

  const generateOptions = (start, end) => {
    let options = [];
    options.push({ value: 0, label: "--" });
    for (let i = start; i <= end; i++) {
      options.push({ value: i, label: i.toString() });
    }

    return options;
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

        {/*move all of this into a separate component probably*/}
        <Select
          options={generateOptions(1, 12)}
          onChange={({ value }) => setMonth(value)}
          placeholder={"Month"}
        />
        {/*todo: 2023 should be dynamic */}
        <Select
          options={generateOptions(2012, 2023)}
          onChange={({ value }) => setYear(value)}
          placeholder={"Year"}
        />
        <div onClick={() => setIsAsc(!isAsc)}>
          sort by date: {isAsc ? "asc" : "desc"}
        </div>
      </div>
      <div className="posts-container">
        <div>
          <Posts
            selectedTag={tagDisplay}
            sortByDate={isAsc}
            month={month}
            year={year}
          />
        </div>
      </div>
      {/* <div>footer placeholder</div> */}
    </div>
  );
}

export default CommonPlaceBookIndex;
