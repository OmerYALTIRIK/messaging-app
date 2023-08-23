import './App.css';
import React, { useState } from 'react';
import MessageInput from './components/MessageInput';
import MessageList from './components/MessageList';

function App() {
  const [messages, setMessages] = useState([]);

  const sendMessage = (message) => {
    setMessages([...messages, message]);
  };

  return (
    <div>
      <MessageList messages={messages} />
      <MessageInput sendMessage={sendMessage} />
    </div>
  );
}

export default App;
