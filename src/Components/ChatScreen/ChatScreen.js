import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import "./ChatScreen.css";

const ChatScreen = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      name: "Alicia keys",
      image:
        "https://blog.ticketmaster.de/wp-content/uploads/2020/01/Alicia-Keys-Tour-Deutschland-2020-Tickets.jpg",
      message: "Miss you babe ♥️",
    },
    {
      name: "Alicia keys",
      image:
        "https://blog.ticketmaster.de/wp-content/uploads/2020/01/Alicia-Keys-Tour-Deutschland-2020-Tickets.jpg",
      message: "Anis how are you !!",
    },
    {
      message: "how is going!",
    },
  ]);
  const handleSend = (e) => {
    e.preventDefault();
    setMessages([...messages, { message: input }]);
    setInput("");
  };
  return (
    <div className="chatscreen">
      <p className="chatscreen__time">You matched with Alicia on 10/08/20</p>
      {messages.map((message) =>
        message.name ? (
          <div className="chatScreen__message">
            <Avatar
              className="chatScree__image"
              alt={message.name}
              src={message.image}
            />
            <p className="chatScreen__text">{message.message}</p>
          </div>
        ) : (
          <div className="chatScreen__message">
            <p className="chatscreen__textUser">{message.message}</p>
          </div>
        ),
      )}

      <form className="chatScreen__input">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="chatScreen__inputfield"
          placeholder=" Type a message"
          type="text"
        />
        <button
          onClick={handleSend}
          type="submit"
          className="chatScreen__button"
        >
          SEND
        </button>
      </form>
    </div>
  );
};

export default ChatScreen;
