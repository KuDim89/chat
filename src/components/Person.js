import React, {useLayoutEffect, useState} from 'react';
import chatService from "../services/chatService";
import camelize from "../utils/camelize";

const Person = ({name, person}) => {
  const [chatState, setChatState] = useState(chatService.initialState);

  useLayoutEffect(() => {
    chatService.subscribe(setChatState);
    chatService.init(camelize(person));
  }, [person]);

  const onFormSubmit = e => {
    e.preventDefault();
    chatService.sendMessage(e, camelize(person));
    e.target.reset();
  }

  return (
      <div className="container">
        <h2>{name}</h2>
        <div className="chat-box">
          {chatState.data.map( message => (
                <div key={Math.random() * 100} className={message.person}>
                    <div className="message">{message.text}</div>
                    <div className="date">{message.date}
                    </div>
                </div>
          ))}
        </div>
        <form id="messageForm" onSubmit={onFormSubmit}>
          <input type="text" id="messageInput" name="messageInput" placeholder="type here..." required />
          <button type="submit">Send</button>
        </form>
        <button className="clear-button" onClick={() => chatService.clearChat()}> Clear Chat</button>
      </div>
  );
};

export default Person;