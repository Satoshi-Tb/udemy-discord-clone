import "./Sidvar.scss";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AddIcon from "@mui/icons-material/Add";
import MicIcon from "@mui/icons-material/Mic";
import HeadphonesIcon from "@mui/icons-material/Headphones";
import SettingsIcon from "@mui/icons-material/Settings";
import { SidbarChannel } from "./SidbarChannel";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarLeft">
        <div className="serverIcon">
          <img src="./vite.svg" alt="イメージ" />
        </div>
        <div className="serverIcon">
          <img src="./vite.svg" alt="イメージ" />
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

          <div className="sidebarFooter">
            <div className="sidebarAccount">
              <img src="./vite.svg" alt="アイコン" />
              <div className="accountName">
                <h4>DiscodeTaro</h4>
                <span>#8162</span>
              </div>
            </div>

            <div className="sidebarVoice">
              <MicIcon />
              <HeadphonesIcon />
              <SettingsIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
