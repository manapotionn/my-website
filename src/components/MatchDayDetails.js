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
                  <p>{"my bet: " + matchDetails["bet"]}</p>
                  <p>{"actual winner: " + matchDetails["winner"]}</p>
                  <br />
                </div>
              );
            })}
      </div>
    </>
  );
}

export default MatchDayDetails;
