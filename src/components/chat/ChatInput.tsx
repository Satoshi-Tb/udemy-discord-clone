import "./ChatInput.scss";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import GifIcon from "@mui/icons-material/Gif";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
export const ChatInput = () => {
  return (
    <div className="chatInput">
      <AddCircleIcon />
      <form>
        <input type="text" placeholder="#Udemyへメッセージを送信" />
        <button type="submit" className="chatInputButton">
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
