import "./ChatMessage.scss";
import { Avatar } from "@mui/material";

export const ChatMessage = () => {
  return (
    <div className="chatMessage">
      <Avatar />
      <div className="messageInfo">
        <h4>
          Discord Taro
          <span className="messageTimestamp">2023/04/03</span>
        </h4>
        <p>メッセージ本文</p>
      </div>
    </div>
  );
};
