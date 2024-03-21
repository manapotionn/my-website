import React from "react";
import "../css/BottomBar.css";
import { useAppState } from "../store/AppState";
import { UPDATE_MULTIPLE_VALS_ID, UPDATE_ONE_VAL } from "../store/AppReducer";

const BottomBar = () => {
  const [state, dispatch] = useAppState();

  const handleMinimizeWindow = (id) => {
    dispatch({
      type: UPDATE_ONE_VAL,
      valToBeUpdated: "minimize",
      id: id,
      newValue: !state[id].minimize,
    });
  };

  const handleZIndex = (id) => {
    let maxVal = 0;
    for (let key in state) {
      if (state[key].z > maxVal) {
        maxVal = state[key].z;
      }
    }

    dispatch({
      type: UPDATE_ONE_VAL,
      valToBeUpdated: "z",
      id: id,
      newValue: maxVal + 1,
    });
  };

  /* temporary -- will be replaced with legit menu */
  const handleStart = () => {
    let maxVal = 0;
    for (let key in state) {
      if (state[key].z > maxVal) {
        maxVal = state[key].z;
      }
    }

    dispatch({
      type: UPDATE_MULTIPLE_VALS_ID,
      id: "tempabout",
      newValue: { ...state["tempabout"], z: maxVal, open: true },
    });
  };

  return (
    <div className="bottom-bar-container">
      <div onClick={handleStart} className="start-button">
        start
      </div>
      <div className="bottom-bar-items">
        {Object.entries(state).map((item, index) => {
          if (item[1].open) {
            return (
              <div
                onClick={() => {
                  handleZIndex(item[0]);
                  handleMinimizeWindow(item[0]);
                }}
                className={
                  "bottom-bar-item" + (item[1].minimize ? "" : "-visible")
                }
                id={"bottom-bar-item" + index}
              >
                {item[1].title}
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default BottomBar;
