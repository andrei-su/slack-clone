import React from "react";
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
      {/* threads */}
      {/* mentions and reactions */}
      {/* saved items */}
      {/* channel browser */}
      {/* people and user groups */}
      {/* apps */}
      {/* file browser */}
      {/* show more / show less */}
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
