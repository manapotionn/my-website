import { ReactComponent as InternetIcon } from "./resources/internet_64.svg";

import Draggable from "react-draggable";
import "../css/DesktopIcon.css";

const ExternalLink = ({ link, text }) => {
  return (
    <Draggable>
      <div className="icon-container">
        <a href={link} target="_blank">
          <InternetIcon />
        </a>
        <div className="icon-text">{text}</div>
      </div>
    </Draggable>
  );
};

export default ExternalLink;
