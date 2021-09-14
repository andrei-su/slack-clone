import React, { useState } from "react";
// Data Layer
import { useStateProviderValue } from "../../StateProvider";
// Firebase
import * as fb from "../../firebase";
// Styles
import "./ChatInput.css";

function ChatInput({ channelName, channelId }) {
  const [input, setInput] = useState("");
  const [{ user }] = useStateProviderValue();

  const sendMessage = (e) => {
    e.preventDefault();

    if (channelId) {
      fb.addDoc(fb.collection(fb.doc(fb.db, "rooms", channelId), "messages"), {
        message: input,
        timestamp: fb.serverTimestamp(),
        user: user.displayName,
        userImage: user.photoURL,
      });
      setInput("");
    }
  };

  return (
    <div className="chatInput">
      <form>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={`Message # ${channelName?.toLowerCase()}`}
        />
        <button type="submit" onClick={sendMessage}>
          SEND
        </button>
      </form>
    </div>
  );
}

export default ChatInput;
