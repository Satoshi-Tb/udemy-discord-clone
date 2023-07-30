import "./Chat.scss";
import { ChatInput } from "./ChatInput";
import { ChatHeader } from "./ChatHeader";
import { ChatMessage } from "./ChatMessage";
import { useAppSelector } from "../../app/hooks";
export const Chat = () => {
  const channelName = useAppSelector((state) => state.channel.channelName);

  return (
    <div className="chat">
      {/* chatHeader */}
      <ChatHeader channelName={channelName} />
      {/* chatMessage */}
      <div className="chatMessageList">
        <ChatMessage />
        <ChatMessage />
        <ChatMessage />
        <ChatMessage />
      </div>

      {/* chatFooter */}
      <ChatInput />
    </div>
  );
};
