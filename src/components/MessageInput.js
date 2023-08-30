import React, { useState } from "react";

function MessageInput({ sendMessage }) {
  const [message, setMessage] = useState("");

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      sendMessage(message);
      setMessage("");
    }
  };

  return (
    <div class="relative flex w-full flex-wrap items-stretch mb-3">
      <input
        type="text"
        value={message}
        onChange={handleMessageChange}
        onKeyDown={handleKeyDown} // Enter tuşuna basıldığında handleKeyDown çalışacak
        placeholder="Mesajınızı yazınız..."
        className="px-3 py-3 placeholder-slate-300 text-slate-600 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full pr-10"
      />
      <span class="z-10 h-full leading-snug font-normal absolute text-center text-slate-300 bg-transparent rounded text-base items-center justify-center w-8 right-0 pr-3 py-3">
        <i class="fas fa-user"></i>
      </span>
      <button onClick={() => sendMessage(message)}>Gönder</button>
    </div>
  );
}

export default MessageInput;
