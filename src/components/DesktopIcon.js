import { ReactComponent as DocSmall } from "./resources/doc_32.svg";
import { ReactComponent as DocMedium } from "./resources/doc_64.svg";
import { ReactComponent as PicMedium } from "./resources/pic_64.svg";
import { ReactComponent as FolderMedium } from "./resources/folder_64.svg";
import { ReactComponent as GenericAppMedium } from "./resources/app_64.svg";
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

    handleZIndex();
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

  const handleUnMinimizeWindow = () => {
    if (state[id].minimize === true) {
      dispatch({
        type: UPDATE_ONE_VAL,
        valToBeUpdated: "minimize",
        id: id,
        newValue: false,
      });
    }
  };

  const iconFactory = () => {
    if (icon === "doc") {
      return <DocMedium />;
    } else if (icon === "pic") {
      return <PicMedium />;
    } else if (icon === "folder") {
      return <FolderMedium />;
    } else if (icon === "app") {
      return <GenericAppMedium />;
    }
  };

  return (
    <Draggable>
      <div
        className="icon-container"
        onDoubleClick={() => {
          handleOpenWindow();
          handleUnMinimizeWindow();
        }}
      >
        {iconFactory()}
        <div className="icon-text">{text}</div>
      </div>
    </Draggable>
  );
};

export default DesktopIcon;
