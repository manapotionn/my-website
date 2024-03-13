import { ReactComponent as DocSmall } from "./resources/doc_32.svg";
import { ReactComponent as DocMedium } from "./resources/doc_64.svg";
import { ReactComponent as PicMedium } from "./resources/pic_64.svg";
import { useAppState } from "../store/AppState";
import { UPDATE_ONE_VAL } from "../store/AppReducer";
import Draggable from "react-draggable";
import "../css/DesktopIcon.css";

const DesktopIcon = ({ icon, text, id }) => {
  const [state, dispatch] = useAppState();

  const handleOpenWindow = () => {
    dispatch({
      type: UPDATE_ONE_VAL,
      valToBeUpdated: "open",
      id: id,
      newValue: true,
    });
  };

  const iconFactory = () => {
    if (icon === "doc") {
      return <DocMedium />;
    } else if (icon === "pic") {
      return <PicMedium />;
    }
  };

  return (
    <Draggable>
      <div className="icon-container" onDoubleClick={handleOpenWindow}>
        {iconFactory()}
        <div className="icon-text">{text}</div>
      </div>
    </Draggable>
  );
};

export default DesktopIcon;
