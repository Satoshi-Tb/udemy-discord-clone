import { useState, useEffect } from "react";
import {
  collection,
  onSnapshot,
  orderBy,
  query,
  Timestamp,
} from "firebase/firestore";
import { db } from "../firebase";
import { useAppSelector } from "../app/hooks";

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

export const useSubCollection = (
  collectionName: string,
  subCollectionName: string
) => {
  const channelId = useAppSelector((state) => state.channel.channelId);
  const [subDocuments, setSubDocuments] = useState<Message[]>([]);

  useEffect(() => {
    if (!channelId) {
      setSubDocuments([]);
      return;
    }

    let collecitonRef = collection(
      db,
      collectionName,
      channelId,
      subCollectionName
    );

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
      setSubDocuments(results);
    });
  }, [channelId]);

  return { subDocuments };
};
