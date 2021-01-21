import React from "react";
import "./SendMail.css";
import CloseIcon from "@material-ui/icons/Close";
import { Button, IconButton } from "@material-ui/core";
import { useForm } from "react-hook-form";
import { closeSendMessage } from "./features/mailSlice";
import { useDispatch } from "react-redux";
import { db } from "./firebase";
import firebase from "firebase";

function SendMail() {
  const onSubmit = (formData) => {
    console.log(formData);
    db.collection("emails").add({
      to: formData.to,
      subject: formData.subject,
      message: formData.message,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    dispatch(closeSendMessage());
  };
  const { register, handleSubmit, watch, errors } = useForm();
  const dispatch = useDispatch();
  return (
    <div className="sendMail">
      <div className="sendMail_header">
        <h3>New Message</h3>
        <IconButton>
          <CloseIcon
            className="sendMail_close"
            onClick={() => dispatch(closeSendMessage())}
          />
        </IconButton>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          name="to"
          type="email"
          placeholder="To"
          ref={register({ required: true })}
        />
        {errors.to && <p className="sendMail_error">To is required!</p>}
        <input
          name="subject"
          type="text"
          placeholder="Subject"
          ref={register({ required: true })}
        />
        {errors.subject && (
          <p className="sendMail_error">Subject is required!</p>
        )}

        <input
          name="message"
          type="text"
          placeholder="Message"
          className="mail_message"
          ref={register({ required: true })}
        />
        {errors.message && (
          <p className="sendMail_error">Message is required!</p>
        )}

        <div className="sendMail_options">
          <Button className="sendMail_send" type="submit" variant="contained">
            Send
          </Button>
        </div>
      </form>
    </div>
  );
}

export default SendMail;
