import React from "react";
import "./EmailRow.css";
import { Checkbox, IconButton } from "@mui/material";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import { LabelImportantOutlined } from "@mui/icons-material";

function EmailRow({ id, title, subject, description, time }) {
  return (
    <div className="emailRow">
      <div className="emailRow_options">
        <Checkbox />
        <IconButton>
          <StarBorderIcon />
        </IconButton>
        <IconButton>
          <LabelImportantOutlined />
        </IconButton>
      </div>
      <div className="emailRow_title">
        <h3>{title}</h3>
      </div>
      <div className="emailRow_message">
        <h4>
          {subject}
          <span className="emailRow_description">{description}</span>
        </h4>
      </div>
      <p className="emailRow_time">{time}</p>
    </div>
  );
}

export default EmailRow;
