import React, { useState } from "react";
import Select from "react-select";
import TagsNav from "./TagsNav";
import Posts from "./Posts";
import "./CommonPlaceBookIndex.css";
import { PAGE_COLORS, FILTER_COLORS } from "./Constants";

function CommonPlaceBookIndex() {
  const [tagDisplay, setTagDisplay] = useState("lyrics");
  const [isAsc, setIsAsc] = useState(false);
  const [month, setMonth] = useState(0);
  const [year, setYear] = useState(0);

  const generateOptions = (start, end) => {
    let options = [];
    options.push({ value: 0, label: "All" });
    for (let i = start; i <= end; i++) {
      options.push({ value: i, label: i.toString() });
    }

    return options;
  };

  return (
    <>
      <div className="filter-stickies">
        {/*move all of this into a separate component probably*/}
        <Select
          id="month-filter"
          options={generateOptions(1, 12)}
          onChange={({ value }) => setMonth(value)}
          placeholder={"Month"}
        />
        <Select
          id="year-filter"
          options={generateOptions(2012, 2023)}
          onChange={({ value }) => setYear(value)}
          placeholder={"Year"}
        />
        <Select
          id="sort-filter"
          options={[
            { value: true, label: "asc" },
            { value: false, label: "desc" },
          ]}
          onChange={({ value }) => setIsAsc(value)}
          placeholder={"Sort by Date"}
        />
      </div>
      <div className="commonPlace-container">
        <div className="tagsNav">
          {/* dynamically get list of tags ? */}
          <TagsNav
            tags={Object.keys(PAGE_COLORS)}
            tagDisplay={tagDisplay}
            setTagDisplay={setTagDisplay}
          />
        </div>
        <div
          className="posts-container"
          style={{ backgroundColor: PAGE_COLORS[tagDisplay] }}
        >
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
    </>
  );
}

export default CommonPlaceBookIndex;
