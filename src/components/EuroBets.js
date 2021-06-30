import React from "react";
import { Line, Pie, Bar } from "react-chartjs-2";

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
        label: "Net Change in Unicorns",
        data: netChangeData,
        fill: false,
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgba(255, 99, 132, 0.2)",
        yAxisID: "y1",
      },
      {
        label: "Total # of Unicorns",
        data: totalData,
        fill: false,
        yAxisID: "y2",
      },
    ],
  };

  return data;
}

function getPieData() {
  let totalWins = 0;
  let totalLosses = 0;
  for (const [matchday, games] of Object.entries(betsData)) {
    for (let i = 0; i < games.length; i++) {
      if (betsData[matchday][i].winner === betsData[matchday][i].bet) {
        totalWins += 1;
      } else {
        totalLosses += 1;
      }
    }
  }

  const data = {
    labels: ["Win", "Lose"],
    datasets: [
      {
        label: "Win Ratio Total",
        data: [totalWins, totalLosses],
        backgroundColor: ["rgba(75, 192, 192, 0.2)", "rgba(255, 99, 132, 0.2)"],
        borderColor: ["rgba(75, 192, 192, 1)", "rgba(255, 99, 132, 1)"],
        borderWidth: 1,
      },
    ],
  };

  return data;
}

function getStackedBarData() {
  let winArray = [];
  let loseArray = [];
  for (const [matchday, games] of Object.entries(betsData)) {
    let wins = 0;
    let losses = 0;
    for (let i = 0; i < games.length; i++) {
      if (betsData[matchday][i].winner === betsData[matchday][i].bet) {
        wins += 1;
      } else {
        losses += 1;
      }
    }
    winArray.push(wins);
    loseArray.push(losses);
  }

  const data = {
    labels: Object.keys(betsData),
    datasets: [
      {
        label: "# of Correct Predictions",
        data: winArray,
        backgroundColor: "rgba(75, 192, 192, 0.2)",
      },
      {
        label: "# of Wrong Predictions",
        data: loseArray,
        backgroundColor: "rgba(255, 99, 132, 0.2)",
      },
    ],
  };

  return data;
}

function EuroBets() {
  const lineOptions = {
    scales: {
      y1: {
        type: "linear",
        display: true,
        position: "left",
      },
      y2: {
        type: "linear",
        display: true,
        position: "right",
        grid: {
          drawOnChartArea: false,
        },
      },
    },
  };

  const barOptions = {
    responsive: true,
    scales: {
      y: {
        stacked: true,
        ticks: {
          beginAtZero: true,
        },
      },
      x: {
        stacked: true,
      },
    },
  };

  return (
    <div>
      <div className="flexbox-panel">
        <div className="flexbox-panel-left">
          <Pie data={getPieData()} />
        </div>
        <div className="flexbox-panel-right">
          <Bar data={getStackedBarData()} options={barOptions} />
        </div>
      </div>
      <Line data={getLineData()} options={lineOptions} />
    </div>
  );
}

export default EuroBets;
