import "./Chat.scss";
import { ChatFooter } from "./ChatFooter";
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
      <ChatFooter />
    </div>
  );
};
