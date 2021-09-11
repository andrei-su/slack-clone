import React from "react";
// History
import { createBrowserHistory } from "history";
// Firebase
import * as firebase from "../../firebase";
// Styles
import "./SidebarOption.css";

function SidebarOption({ Icon, title, id, addChannelOption }) {
  const history = createBrowserHistory();

  const selectChannel = () => {
    if (id) {
      history.push(`/room/${id}`);
    } else {
      history.push(title);
    }
  };

  const addChannel = () => {
    const channelName = prompt("Please enter the channel name");
    if (channelName) {
      firebase.addDoc(firebase.collection(firebase.db, "rooms"), {
        name: channelName,
      });
    }
  };

  return (
    <div
      className="sidebarOption"
      onClick={addChannelOption ? addChannel : selectChannel}
    >
      {Icon && <Icon className="sidebarOption__icon" />}
      {Icon ? (
        <h3>{title}</h3>
      ) : (
        <h3 className="sidebarOption__channel">
          <span className="sidebarOption__hash">#</span> {title}
        </h3>
      )}
    </div>
  );
}

export default SidebarOption;
