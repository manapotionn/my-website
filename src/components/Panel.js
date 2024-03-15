import React from "react";
import "../css/Panel.css";
import Draggable from "react-draggable";
import { useAppState } from "../store/AppState";
import { UPDATE_ONE_VAL } from "../store/AppReducer";

function Panel({ id, children }) {
  const [state, dispatch] = useAppState();
  const obj = state[id];

  const handleCloseWindow = () => {
    dispatch({
      type: UPDATE_ONE_VAL,
      valToBeUpdated: "open",
      id: id,
      newValue: false,
    });
  };

  const handleMinimizeWindow = () => {
    dispatch({
      type: UPDATE_ONE_VAL,
      valToBeUpdated: "minimize",
      id: id,
      newValue: true,
    });
  };

  const handleZIndex = () => {
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

  return obj.open && !obj.minimize ? (
    <Draggable handle=".title-bar" onStart={handleZIndex}>
      <div
        className="panel-container"
        id={"panel_" + id}
        style={{ zIndex: obj.z }}
      >
        <div className="title-bar">
          <div className="title">{obj.title}</div>
          <div className="title-bar-icons">
            <div className="title-bar-button" onClick={handleMinimizeWindow}>
              -
            </div>
            <div className="title-bar-button" onClick={handleCloseWindow}>
              x
            </div>
          </div>
        </div>
        <div className="content-container">{children}</div>
      </div>
    </Draggable>
  ) : (
    <div></div>
  );
}

export default Panel;
