import React from "react";
import "./Mail.css";
import ArchiveIcon from "@mui/icons-material/Archive";
import { IconButton } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ReportGmailerrorredIcon from "@mui/icons-material/ReportGmailerrorred";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import MarkunreadIcon from "@mui/icons-material/Markunread";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import DriveFileMoveIcon from "@mui/icons-material/DriveFileMove";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Link } from "react-router-dom";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

function Mail() {
  return (
    <div className="mail">
      <div className="mail__tools">
        <div className="mail__toolsLeft">
          <Link to="/">
            <IconButton>
              <ArrowBackIcon className="mail_toolsIcon" />
            </IconButton>
          </Link>
          <div className="mail_toolsLeft_Group">
            <IconButton>
              <ArchiveIcon className="mail_toolsIcon" />
            </IconButton>
            <IconButton>
              <ReportGmailerrorredIcon className="mail_toolsIcon" />
            </IconButton>
            <IconButton>
              <DeleteOutlineIcon className="mail_toolsIcon" />
            </IconButton>
            <IconButton>
              <MarkunreadIcon className="mail_toolsIcon" />
            </IconButton>
            <IconButton>
              <AccessTimeIcon className="mail_toolsIcon" />
            </IconButton>
            <IconButton>
              <DriveFileMoveIcon className="mail_toolsIcon" />
            </IconButton>
            <IconButton>
              <MoreVertIcon className="mail_toolsIcon" />
            </IconButton>
          </div>
        </div>
        <div className="mail__toolsRight"></div>
      </div>
      <div className="mail__body">
        <div className="mail__bodyHeader">
          <h2>Subject</h2>
          <div className="mail__bodyHeader_senderInfo">
            <h3>
              <strong>hackajob Team</strong>
              <span className="mail__bodyHeader_email">
                {" <"}notifications@hackajob.co{"> "}
              </span>
            </h3>
            <p className="mail__bodyHeader_time">Nov 14, 2022, 3:52 PM</p>
          </div>
          <p>
            to me
            <span>
              <ArrowDropDownIcon />
            </span>
          </p>
        </div>
        <div className="mail__message">
          <p>This is a message</p>
        </div>
      </div>
    </div>
  );
}

export default Mail;
