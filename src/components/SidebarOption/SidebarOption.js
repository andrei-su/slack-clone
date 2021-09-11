import React from "react";
// Firebase
import * as firebase from "../../firebase";
// Styles
import "./SidebarOption.css";

function SidebarOption({ Icon, title, addChannelOption }) {
  const addChannel = () => {
    const channelName = prompt("Please enter the channel name");
    if (channelName) {
      firebase.addDoc(firebase.collection(firebase.db, "rooms"), {
        name: channelName,
      });
    }
  };

  return (
    <div className="sidebarOption" onClick={addChannelOption && addChannel}>
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
