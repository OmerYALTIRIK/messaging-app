import React, { useState } from "react";

function MessageInput({ sendMessage }) {
  const [message, setMessage] = useState("");

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      sendMessage(message);
      setMessage(""); // Input alanını temizle enter'a basınca
    }
  };

  const handleSendClick = () => {
    sendMessage(message);
    setMessage(""); // Input alanını temizle mouse ile tıklayınca
  };

  return (
    <div className="flex flex-col w-2/6 mb-3 items-stretch m-auto mt-14">
      <div className="flex items-center border rounded border-gray-300 p-2">
        <input
          type="text"
          value={message}
          onChange={handleMessageChange}
          onKeyDown={handleKeyDown}
          placeholder="Writing Message..."
          className="flex-grow bg-transparent outline-none"
        />
        <span className="h-full leading-snug font-normal text-center text-slate-300 bg-transparent text-base">
          <i className="fas fa-user"></i>
        </span>
      </div>
      <button
        onClick={handleSendClick}
        className="bg-sky-500 rounded-lg mt-3 px-4 py-2 text-white"
      >
        Gönder
      </button>
    </div>
  );
}

export default MessageInput;
