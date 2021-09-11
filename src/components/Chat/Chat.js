import React, { useEffect, useState } from "react";
// Params
import { useParams } from "react-router";
// Firebase
import * as fb from "../../firebase";
// Styles
import "./Chat.css";
// Icons
import StarBorderOutlinedIcon from "@material-ui/icons/StarBorderOutlined";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import Message from "../Message/Message";

function Chat() {
  const { roomId } = useParams();
  const [roomDetails, setRoomDetails] = useState(null);
  const [roomMessages, setRoomMessages] = useState(null);

  useEffect(() => {
    if (roomId) {
      fb.onSnapshot(fb.doc(fb.db, "rooms", roomId), (snapshot) =>
        setRoomDetails(snapshot.data())
      );
    }

    fb.onSnapshot(
      fb.query(
        fb.collection(fb.doc(fb.db, "rooms", roomId), "messages"),
        fb.orderBy("timestamp", "asc")
      ),
      (snapshot) => setRoomMessages(snapshot.docs.map((doc) => doc.data()))
    );
  }, [roomId]);

  return (
    <div className="chat">
      <div className="chat__header">
        <div className="chat__headerLeft">
          <h4 className="chat__channelName">
            <strong># {roomDetails?.name}</strong>
            <StarBorderOutlinedIcon />
          </h4>
        </div>
        <div className="chat__headerRight">
          <p>
            <InfoOutlinedIcon /> Details
          </p>
        </div>
      </div>

      <div className="chat__messages">
        <Message />
      </div>
    </div>
  );
}

export default Chat;
