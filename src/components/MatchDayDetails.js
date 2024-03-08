import React from "react";

function MatchDayDetails({ matchdayData, matchday }) {
  return (
    <>
      <div>{matchday === 0 ? "Click a point to see details" : matchday}</div>

      <div>
        {matchdayData === 0
          ? ""
          : matchdayData.map((matchDetails, i) => {
              return (
                <div>
                  <p key={i}>{matchDetails["match"]}</p>
                  <p key={i + "bet"}>{"my bet: " + matchDetails["bet"]}</p>
                  <p key={i + "winner"}>
                    {"actual winner: " + matchDetails["winner"]}
                  </p>
                  <br />
                </div>
              );
            })}
      </div>
    </>
  );
}

export default MatchDayDetails;
