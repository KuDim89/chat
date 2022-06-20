import {useLayoutEffect, useState} from "react";
import chatService from "../services/chat";

const FirstPerson = () => {
  const [chatState, setChatState] = useState(chatService.initialState)

  useLayoutEffect(() => {
    chatService.subscribe(setChatState);
    chatService.init();
  }, []);

  const onFormSubmit = e => {
    e.preventDefault();
    const messageObject = {
      person: 'first-person',
      text: e.target.elements.messageInput.value.trim(),
    }
    chatService.sendMessage(messageObject);
    document.getElementById('messageForm').reset();
  }

  return (
      <div className="container">
        <h2>Dmytro</h2>
        <div className="chat-box">
          {chatState.data.map( message => (
              <div key={Math.random() * 100}>
                <p className={message.person}>{message.text}</p>
                <div className="clear"></div>
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

export default FirstPerson;