import {Subject} from "rxjs";

const subject = new Subject();
const initialState = {
  data: [],
  firstPerson: {
    newDataCount: 0,
  },
  secondPerson: {
    newDataCount: 0,
  },
}
let state = initialState;

const chatService = {
  init: person => {
    state = {...state, [person]: {newDataCount: 0,}}
    subject.next(state)
  },
  subscribe: setState => subject.subscribe(setState),
  sendMessage: (e, person) => {
    const messageObject = {
      person: person,
      text: e.target.elements.messageInput.value.trim(),
      date: new Date().toLocaleTimeString([], { hour: '2-digit', minute: "2-digit", hour12: false })
    };

    state = {
      ...state,
      data: [...state.data, messageObject],
      [person]: {
        newDataCount: state[person].newDataCount + 1
      }
    }
    subject.next(state);
  },
  clearChat: () => {
    state = initialState;
    subject.next(state);
  },
  initialState
}

export default chatService;