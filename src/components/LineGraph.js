import React, { useState } from "react";
import { Line } from "react-chartjs-2";

import MatchDayDetails from "./MatchDayDetails";

import betsData from "../euro2020.json";
import "../css/EuroBets.css";

function getLineData() {
  const netChangeData = [];
  for (const [matchday, games] of Object.entries(betsData)) {
    let acc = 0;
    for (let i = 0; i < games.length; i++) {
      acc += betsData[matchday][i].earnings - betsData[matchday][i].wager;
    }
    netChangeData.push(acc);
  }

  const totalData = [];
  let currentAmount = 1000;
  for (let i = 0; i < netChangeData.length; i++) {
    totalData.push(currentAmount + netChangeData[i]);
    currentAmount += netChangeData[i];
  }

  const data = {
    labels: Object.keys(betsData),
    datasets: [
      {
        label: "Total # of Unicorns",
        data: totalData,
        fill: false,
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgba(255, 99, 132, 0.2)",
        yAxisID: "y1",
      },
    ],
  };

  return data;
}

const data = getLineData();

const lineOptions = {
  scales: {
    y1: {
      type: "linear",
      display: true,
      position: "left",
    },
  },
};

function LineGraph() {
  const [clickedElement, setClickedElement] = useState("");

  const getElementAtEvent = (element) => {
    if (!element.length) return;

    const { index } = element[0];
    setClickedElement(`${data.labels[index]}`);
  };

  return (
    <div className="flexbox-panel">
      <div className="flexbox-panel-right">
        <Line
          data={data}
          options={lineOptions}
          getElementAtEvent={getElementAtEvent}
        />
      </div>
      <div className="flexbox-panel-left">
        <MatchDayDetails
          matchdayData={clickedElement === "" ? 0 : betsData[clickedElement]}
          matchday={clickedElement === "" ? 0 : clickedElement}
        />
      </div>
    </div>
  );
}

export default LineGraph;
