import React from "react";
import "./Sidebar.css";
import { Button } from "@mui/material";
import CreateIcon from "@mui/icons-material/Create";

function Sidebar() {
  return (
    <div className="sidebar">
      <Button className="sidebar__compose">
        <CreateIcon />
        Compose
      </Button>
    </div>
  );
}

export default Sidebar;
