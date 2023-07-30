import "./Sidvar.scss";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AddIcon from "@mui/icons-material/Add";
import MicIcon from "@mui/icons-material/Mic";
import HeadphonesIcon from "@mui/icons-material/Headphones";
import SettingsIcon from "@mui/icons-material/Settings";
import { SidbarChannel } from "./SidbarChannel";
import { auth, db } from "../../firebase";
import { useAppSelector } from "../../app/hooks";
import ReactIcon from "../../assets/react.svg";
import { useCollection } from "../../hooks/useCollection";
import { addDoc, collection } from "firebase/firestore";

const Sidebar = () => {
  const { documents: channels } = useCollection("channels");
  const user = useAppSelector((state) => state.user.user);

  const addChannel = async () => {
    let channelName = prompt("新しいチャンネルを作ります");

    if (!channelName) return;

    await addDoc(collection(db, "channels"), {
      channelName: channelName,
    });
  };

  return (
    <div className="sidebar">
      <div className="sidebarLeft">
        <div className="serverIcon">
          <img src={ReactIcon} alt="イメージ" />
        </div>
        <div className="serverIcon">
          <img src={ReactIcon} alt="イメージ" />
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
            <AddIcon className="sidebarAddIcon" onClick={addChannel} />
          </div>

          <div className="sidebarChannelList">
            {channels.map((channel) => (
              <SidbarChannel
                id={channel.id}
                channel={channel}
                key={channel.id}
              />
            ))}
          </div>

          <div className="sidebarFooter">
            <div className="sidebarAccount">
              <img
                src={user ? user.photo : ReactIcon}
                alt="アイコン"
                onClick={() => {
                  console.log("sign out");
                  auth.signOut();
                }}
              />
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
