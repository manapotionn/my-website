import React from "react";
import "../css/Panel.css";
import Draggable from "react-draggable";

function Panel(props) {
  const isVisible = props.openWindows[props.id];
  return isVisible ? (
    <Draggable handle=".title-bar">
      <div className="panel-container">
        <div className="title-bar">
          <div className="title">{props.title}</div>
          <div className="title-bar-icons">
            <div
              className="title-bar-button"
              onClick={() => {
                props.setOpenWindows({
                  ...props.openWindows,
                  [props.id]: false,
                });
              }}
            >
              x
            </div>
          </div>
        </div>
        <div className="content-container">{props.children}</div>
      </div>
    </Draggable>
  ) : (
    <div></div>
  );
}

export default Panel;
