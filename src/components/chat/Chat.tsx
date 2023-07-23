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
      <ChatMessage />
      {/* chatFooter */}
      <ChatInput />
    </div>
  );
};
