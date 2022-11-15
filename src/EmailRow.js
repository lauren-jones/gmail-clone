import React from "react";
import "./EmailRow.css";
import { Checkbox, IconButton } from "@mui/material";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import { Link } from "react-router-dom";

function EmailRow({ id, title, subject, description, time }) {
  return (
    <Link to="./mail" className="emailRow">
      <div className="emailRow_options">
        <Checkbox />
        <IconButton>
          <StarBorderIcon className="emailRow_optionsIcon" />
        </IconButton>
      </div>
      <div className="emailRow_title">
        <h3>{title}</h3>
      </div>
      <div className="emailRow_message">
        <h4>
          {subject}{" "}
          <span className="emailRow_description">- {description}</span>
        </h4>
      </div>
      <p className="emailRow_time">{time}</p>
    </Link>
  );
}

export default EmailRow;
