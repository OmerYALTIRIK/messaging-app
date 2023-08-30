import React, { useState } from 'react';

function MessageInput({ sendMessage }) {
  const [message, setMessage] = useState('');

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      sendMessage(message);
      setMessage('');
    }
  };

  return (
    <div>
      <input
        type="text"
        value={message}
        onChange={handleMessageChange}
        onKeyDown={handleKeyDown} // Enter tuşuna basıldığında handleKeyDown çalışacak
        className='border-2 border-gray-300 p-2 max-w-lg rounded-md'
      />
      <button onClick={() => sendMessage(message)}>Gönder</button>
    </div>
  );
}

export default MessageInput;
