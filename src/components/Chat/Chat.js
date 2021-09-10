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
    </div>
  );
}

export default Chat;
