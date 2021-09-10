import React from "react";
// Params
import { useParams } from "react-router";
// Styles
import "./Chat.css";

function Chat() {
  const { roomId } = useParams();
  return (
    <div className="chat">
      <h2>Your are in the {roomId} room</h2>
      <div className="chat__header">
        <div className="chat__headerLeft">
          <h4 className="chat__channelName">
            <strong># general</strong>
          </h4>
        </div>
        <div className="chat__headerRight">
          <p>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Chat;
