import React from "react";
import "./Sidebar.css";
import { Button } from "@mui/material";
import CreateIcon from "@mui/icons-material/Create";
import InboxIcon from "@mui/icons-material/Inbox";
import SidebarOption from "./SidebarOption";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import SendIcon from "@mui/icons-material/Send";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import DraftsIcon from "@mui/icons-material/Drafts";
import { LabelImportant } from "@mui/icons-material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function Sidebar() {
  return (
    <div className="sidebar">
      <Button className="sidebar__compose">
        <CreateIcon />
        Compose
      </Button>
      <SidebarOption
        Icon={InboxIcon}
        title="Inbox"
        number={17}
        selected={true}
      />
      <SidebarOption
        Icon={DraftsIcon}
        title="Drafts"
        number={1}
        selected={false}
      />
      <SidebarOption
        Icon={SendIcon}
        title="Sent"
        number={21}
        selected={false}
      />
      <SidebarOption
        Icon={StarBorderIcon}
        title="Starred"
        number={3}
        selected={false}
      />
      <SidebarOption
        Icon={AccessTimeIcon}
        title="Snoozed"
        number={4}
        selected={false}
      />
      <SidebarOption
        Icon={LabelImportant}
        title="Important"
        number={2}
        selected={false}
      />
      <SidebarOption
        Icon={ExpandMoreIcon}
        title="More"
        number={null}
        selected={false}
      />
    </div>
  );
}

export default Sidebar;
