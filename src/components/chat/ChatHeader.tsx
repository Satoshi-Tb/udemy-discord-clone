import "./ChatHeader.scss";
import NotificationsIcon from "@mui/icons-material/Notifications";
import PushPinIcon from "@mui/icons-material/PushPin";
import PeopleIcon from "@mui/icons-material/People";
import SearchIcon from "@mui/icons-material/Search";
import SendIcon from "@mui/icons-material/Send";
import HelpIcon from "@mui/icons-material/Help";

type Prop = {
  channelName: string;
};

export const ChatHeader = ({ channelName }: Prop) => {
  return (
    <div className="chatHeader">
      <div className="chatHeaderLeft">
        <div className="chatHeaderHash">
          <h3>#{channelName}</h3>
        </div>
      </div>
      <div className="chatHeaderRight">
        <NotificationsIcon />
        <PushPinIcon />
        <PeopleIcon />
        <div className="chatHeaderSearch">
          <input type="text" placeholder="検索" />
          <SearchIcon />
        </div>
        <SendIcon />
        <HelpIcon />
      </div>
    </div>
  );
};
