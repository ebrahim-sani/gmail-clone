import React from "react";
import "./Sidebar.css";
import SidebarOption from "./SidebarOption";
import { Button, IconButton } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import InboxIcon from "@material-ui/icons/Inbox";
import StarIcon from "@material-ui/icons/Star";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import LabelImportantIcon from "@material-ui/icons/LabelImportant";
import NearMeIcon from "@material-ui/icons/NearMe";
import NoteIcon from "@material-ui/icons/Note";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import PersonIcon from "@material-ui/icons/Person";
import DuoIcon from "@material-ui/icons/Duo";
import PhoneIcon from "@material-ui/icons/Phone";
import { openSendMessage } from "./features/mailSlice";
import { useDispatch } from "react-redux";

function Sidebar() {
  const dispatch = useDispatch();
  return (
    <div className="sidebar">
      <Button
        startIcon={<AddIcon font-size="large" />}
        className="sidebar_compose"
        onClick={() => dispatch(openSendMessage())}
      >
        Compose
      </Button>
      <SidebarOption
        Icon={InboxIcon}
        title="Inbox"
        number={32}
        selected={true}
      />
      <SidebarOption Icon={StarIcon} title="Starred" number={52} />
      <SidebarOption Icon={AccessTimeIcon} title="Snoozed" number={4} />
      <SidebarOption Icon={LabelImportantIcon} title="Important" number={17} />
      <SidebarOption Icon={NearMeIcon} title="Sent" number={23} />
      <SidebarOption Icon={NoteIcon} title="Draft" number={5} />
      <SidebarOption Icon={ExpandMoreIcon} title="More" />
      <div className="sidebar_footer">
        <div className="sidebar_footerIcon">
          <IconButton>
            <PersonIcon />
          </IconButton>
          <IconButton>
            <DuoIcon />
          </IconButton>
          <IconButton>
            <PhoneIcon />
          </IconButton>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
