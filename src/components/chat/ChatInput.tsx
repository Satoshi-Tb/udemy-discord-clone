import { useState } from "react";
import "./ChatInput.scss";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import GifIcon from "@mui/icons-material/Gif";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import {
  CollectionReference,
  collection,
  DocumentData,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "../../firebase";
import { useAppSelector } from "../../app/hooks";

export const ChatInput = () => {
  const [inputMessage, setInputMessage] = useState("");

  const channelId = useAppSelector((state) => state.channel.channelId);
  const user = useAppSelector((state) => state.user.user);

  // 現在のチャンネルにメッセージを送信
  const sendMessage = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();

    console.log(channelId);
    if (!channelId) {
      setInputMessage("");
      return;
    }

    const collectionRef: CollectionReference<DocumentData, DocumentData> =
      collection(db, "channels", channelId, "messages");

    try {
      await addDoc(collectionRef, {
        message: inputMessage,
        timestamp: serverTimestamp(),
        user: user,
      });
      setInputMessage("");
      console.log("send");
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div className="chatInput">
      <AddCircleIcon />
      <form>
        <input
          type="text"
          placeholder="#Udemyへメッセージを送信"
          value={inputMessage}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setInputMessage(e.target.value)
          }
        />
        <button
          type="submit"
          className="chatInputButton"
          onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>
            sendMessage(e)
          }
        >
          送信
        </button>
      </form>
      <div className="chatInputIcons">
        <CardGiftcardIcon />
        <GifIcon />
        <EmojiEmotionsIcon />
      </div>
    </div>
  );
};
