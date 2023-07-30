import { DocumentData } from "firebase/firestore";
import "./SidbarChannel.scss";

type Props = {
  id: string;
  channel: DocumentData;
};

export const SidbarChannel = ({ id, channel }: Props) => {
  console.log(channel);
  return (
    <div className="sidebarChannel">
      <h4>
        <span className="sidebarChannelHash">#</span>
        {channel.channel.channelName}
      </h4>
    </div>
  );
};
