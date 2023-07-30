import { DocumentData } from "firebase/firestore";
import "./SidbarChannel.scss";
import { useAppDispatch } from "../../app/hooks";
import { setChannelInfo } from "../../features/channelSlice";

type Props = {
  id: string;
  channel: DocumentData;
};

export const SidbarChannel = ({ id, channel }: Props) => {
  console.log(channel);
  const dispatch = useAppDispatch();

  return (
    <div
      className="sidebarChannel"
      onClick={() =>
        dispatch(
          setChannelInfo({
            chanelId: id,
            channelName: channel.channel.channelName,
          })
        )
      }
    >
      <h4>
        <span className="sidebarChannelHash">#</span>
        {channel.channel.channelName}
      </h4>
    </div>
  );
};
