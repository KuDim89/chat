import React, {useEffect, useState} from 'react';
import chatService from "../services/chat";
import {NavLink} from "react-router-dom";

const Switcher = () => {
  const [chatState, setChatState] = useState(chatService.initialState);
  const location = window.location.href.split('/')[3];

  console.log(location)

  useEffect(() => {
    chatService.subscribe(setChatState)
    chatService.init();
  }, [])

  const messageNotification = chatState.newDataCount > 0
      && (<span className="notify">{chatState.newDataCount}</span>)

  console.log(chatState.newDataCount)

  return (
      <div className="switcher-div">
        <NavLink
            style={({isActive}) => ({
              border: isActive ? "2px solid #00ade7" : "",
              borderRadius: 30,
              display: "inline-block",
              width: '5em',
              margin: '0 10'
            })}
            to={"/first-person"}>
          <button className="switcher">
            Person 1
            {location !== 'first-person' && messageNotification}
          </button>
        </NavLink>

        <NavLink style={({isActive}) => ({
          border: isActive ? "2px solid #06c406" : "",
          borderRadius: 30,
          display: "inline-block",
          width: '5em',
          margin: '0 10'
        })} to={"/second-person"}>
          <button className="switcher">
            Person 2
            {location !== 'second-person' && messageNotification}
          </button>
        </NavLink>
      </div>
  );
};

export default Switcher;