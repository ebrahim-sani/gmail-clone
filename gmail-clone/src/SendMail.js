import React from "react";
import "./SendMail.css";
import CloseIcon from "@material-ui/icons/Close";
import { Button, IconButton } from "@material-ui/core";

function SendMail() {
  return (
    <div className="sendMail">
      <div className="sendMail_header">
        <h3>New Message</h3>
        <IconButton>
          <CloseIcon className="sendMail_close" />
        </IconButton>
      </div>
      <form>
        <input type="text" placeholder="To" />
        <input type="text" placeholder="Subject" />
        <input type="text" placeholder="Message" className="mail_message" />
        <div className="sendMail_options">
          <Button className="sendMail_send">Send</Button>
        </div>
      </form>
    </div>
  );
}

export default SendMail;
