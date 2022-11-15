import React from "react";
import "./EmailList.css";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import { IconButton } from "@mui/material";
import { Checkbox } from "@mui/material";
import RefreshOutlinedIcon from "@mui/icons-material/RefreshOutlined";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import KeyboardIcon from "@mui/icons-material/Keyboard";
import InboxIcon from "@mui/icons-material/Inbox";
import Section from "./Section";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import EmailRow from "./EmailRow";

function EmailList() {
  return (
    <div className="emailList">
      <div className="emailList__settings">
        <div className="emailList__settingsLeft">
          <Checkbox />
          <IconButton>
            <ArrowDropDownOutlinedIcon />
          </IconButton>
          <IconButton>
            <RefreshOutlinedIcon />
          </IconButton>
          <IconButton>
            <MoreVertOutlinedIcon />
          </IconButton>
        </div>
        <div className="emailList__settingsRight">
          <IconButton>
            <ChevronLeftIcon />
          </IconButton>
          <IconButton>
            <ChevronRightIcon />
          </IconButton>
          <IconButton>
            <KeyboardIcon />
          </IconButton>
        </div>
      </div>
      <div className="emailList__sections">
        <Section Icon={InboxIcon} title="Primary" selected />
        <Section Icon={PeopleAltIcon} title="Social" />
        <Section Icon={LocalOfferIcon} title="Promotions" />
      </div>
      <div className="emailList_list">
        <EmailRow
          title="Amazon"
          subject="Something interesting"
          description="This is a description This is a description This is a description"
          time="10pm"
        />
        <EmailRow
          title="Google"
          subject="Something interesting"
          description="This is a description"
          time="10pm"
        />
      </div>
    </div>
  );
}

export default EmailList;
