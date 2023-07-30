import { useState, useEffect } from "react";

import "./Chat.scss";
import { ChatInput } from "./ChatInput";
import { ChatHeader } from "./ChatHeader";
import { ChatMessage } from "./ChatMessage";
import { useAppSelector } from "../../app/hooks";
import {
  collection,
  onSnapshot,
  orderBy,
  query,
  Timestamp,
} from "firebase/firestore";
import { db } from "../../firebase";

interface Message {
  timestamp: Timestamp;
  message: string;
  user: {
    uid: string;
    photo: string;
    email: string;
    displayName: string;
  };
}

export const Chat = () => {
  const channelId = useAppSelector((state) => state.channel.channelId);
  const channelName = useAppSelector((state) => state.channel.channelName);

  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    if (!channelId) return;

    let collecitonRef = collection(db, "channels", channelId, "messages");

    const collectionRefOrderBy = query(
      collecitonRef,
      orderBy("timestamp", "asc")
    );

    onSnapshot(collectionRefOrderBy, (querySnapshot) => {
      let results: Message[] = [];
      querySnapshot.docs.forEach((doc) => {
        results.push({
          timestamp: doc.data().timestamp,
          message: doc.data().message,
          user: doc.data().user,
        });
      });
      setMessages(results);
      console.log(results);
    });
  }, [channelId]);

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
