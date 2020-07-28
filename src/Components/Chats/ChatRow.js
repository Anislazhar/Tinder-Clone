import React from "react";
import Avatar from "@material-ui/core/Avatar";
import "./ChatRow.css";
import { Link } from "react-router-dom";

const ChatRow = ({ name, message, profilPic, timestamp }) => {
  return (
    <Link to={`/chat/${name}`}>
      <div className="chatRow">
        <Avatar className="chatRow__image" src={profilPic} />
        <div className="chatRow__details">
          <h2>{name}</h2>
          <p>{message}</p>
        </div>
        <p className="chatRow__time">{timestamp}</p>
      </div>
    </Link>
  );
};

export default ChatRow;
