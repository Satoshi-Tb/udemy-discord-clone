import "./Chat.scss";
import { ChatInput } from "./ChatInput";
import { ChatHeader } from "./ChatHeader";
import { ChatMessage } from "./ChatMessage";
export const Chat = () => {
  return (
    <div className="chat">
      {/* chatHeader */}
      <ChatHeader />
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
