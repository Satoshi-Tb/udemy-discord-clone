import "./Sidvar.scss";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AddIcon from "@mui/icons-material/Add";
import { SidbarChannel } from "./SidbarChannel";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarLeft">
        <div className="serverIcon">
          <img src="../../assets/react.svg" alt="イメージ" />
        </div>
        <div className="serverIcon">
          <img src="../../assets/react.svg" alt="イメージ" />
        </div>
      </div>
      <div className="sidebarRight">
        <div className="sidebarTop">
          <h3>Discord</h3>
          <ExpandMoreIcon />
        </div>

        <div className="sidebarChannels">
          <div className="sidebarChannelsHeader">
            <div className="sidebarHeader">
              <ExpandMoreIcon />
              <h4>プログラミングチャンネル</h4>
            </div>
            <AddIcon className="sidebarAddIcon" />
          </div>

          <div className="sidebarChannelList">
            <SidbarChannel />
            <SidbarChannel />
            <SidbarChannel />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
