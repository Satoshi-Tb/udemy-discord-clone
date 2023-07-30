import { Timestamp } from "firebase/firestore";
import "./ChatMessage.scss";
import { Avatar } from "@mui/material";

type Props = {
  message: string;
  timestamp: Timestamp;
  userName: string;
  userPhoto: string;
};

export const ChatMessage = ({
  message,
  timestamp,
  userName,
  userPhoto,
}: Props) => {
  return (
    <div className="chatMessage">
      <Avatar src={userPhoto} />
      <div className="messageInfo">
        <h4>
          {userName}
          <span className="messageTimestamp">
            {new Date(timestamp?.toDate()).toLocaleString()}
          </span>
        </h4>
        <p>{message}</p>
      </div>
    </div>
  );
};
