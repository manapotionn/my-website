import React from "react";
import "../css/Panel.css";
import Draggable from "react-draggable";
import { useAppState } from "../store/AppState";
import { OPEN_WINDOW } from "../store/AppReducer";

function Panel({ id, children }) {
  const [state, dispatch] = useAppState();
  const obj = state[id];

  const handleCloseWindow = () => {
    dispatch({ type: OPEN_WINDOW, id: id, newValue: false });
  };

  return obj.open ? (
    <Draggable handle=".title-bar">
      <div className="panel-container" id={"panel_" + id}>
        <div className="title-bar">
          <div className="title">{obj.title}</div>
          <div className="title-bar-icons">
            <div
              className="title-bar-button"
              onClick={() => handleCloseWindow()}
            >
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
