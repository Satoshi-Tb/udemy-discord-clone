import "./Chat.scss";
import { ChatInput } from "./ChatInput";
import { ChatHeader } from "./ChatHeader";
import { ChatMessage } from "./ChatMessage";
import { useAppSelector } from "../../app/hooks";
import { useSubCollection } from "../../hooks/useSubCollection";

export const Chat = () => {
  const channelName = useAppSelector((state) => state.channel.channelName);

  const { subDocuments: messages } = useSubCollection("channels", "messages");

  return (
    <div className="chat">
      {/* chatHeader */}
      <ChatHeader channelName={channelName} />
      {/* chatMessage */}
      <div className="chatMessageList">
        {messages.length === 0 ? (
          <div>メッセージが投稿されていません</div>
        ) : (
          messages.map((m, idx) => (
            <ChatMessage
              key={idx}
              message={m.message}
              timestamp={m.timestamp}
              userName={m.user.displayName || ""}
              userPhoto={m.user.photo}
            />
          ))
        )}
      </div>

      {/* chatFooter */}
      <ChatInput />
    </div>
  );
};
