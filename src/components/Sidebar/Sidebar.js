import React from "react";
// Components
import SidebarOption from "../SidebarOption/SidebarOption";
// Styles
import "./Sidebar.css";
// Icons
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import CreateIcon from "@material-ui/icons/Create";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <div className="sidebar__info">
          <h2>Workspace Name</h2>
          <h3>
            <FiberManualRecordIcon />
            User Name
          </h3>
        </div>
        <CreateIcon />
      </div>
      <SidebarOption title="Threads" />
      <SidebarOption title="Mentions & reactions" />
      <SidebarOption title="Saved items" />
      <SidebarOption title="Channel browser" />
      <SidebarOption title="People & user groups" />
      <SidebarOption title="Apps" />
      <SidebarOption title="File browser" />
      <SidebarOption title="Show less" />
      {/* break */}
      {/* channels */}
      {/* break */}
      {/* add channel */}
      {/* connect to DB and list all the channels */}
      {/* <SidebarOption ... /> */}
    </div>
  );
}

export default Sidebar;
