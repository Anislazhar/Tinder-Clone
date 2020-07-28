import React from "react";
import ChatRow from "./ChatRow";
import "./Chats.css";

const Chats = () => {
  return (
    <div className="chats">
      <ChatRow
        name="Alicia keys"
        message="Miss you babe"
        timestamp="5 minute ago"
        profilPic="https://blog.ticketmaster.de/wp-content/uploads/2020/01/Alicia-Keys-Tour-Deutschland-2020-Tickets.jpg"
      />
      <ChatRow
        name="Ellen"
        message="Can i call you plz"
        timestamp="20 minute ago"
        profilPic="https://m.media-amazon.com/images/I/41Tt8dCznTL.jpg"
      />
      <ChatRow
        name="Ellen"
        message="No answer! ok !!!"
        timestamp="37 minute ago"
        profilPic="https://m.media-amazon.com/images/I/41Tt8dCznTL.jpg"
      />
      <ChatRow
        name="Ellen"
        message="Whats Up!!!!!!!!"
        timestamp="41 minute ago"
        profilPic="https://m.media-amazon.com/images/I/41Tt8dCznTL.jpg"
      />
      <ChatRow
        name="Ellen"
        message="Hi!! Whats Up!"
        timestamp="44 minute ago"
        profilPic="https://m.media-amazon.com/images/I/41Tt8dCznTL.jpg"
      />
      <ChatRow
        name="Steve"
        message="Long time no news ! Call me PLZ"
        timestamp="50 minute ago"
        profilPic="https://images-na.ssl-images-amazon.com/images/I/418XttEFsaL._SX329_BO1,204,203,200_.jpg"
      />
    </div>
  );
};

export default Chats;
