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
    <div class="grid gap-4 grid-cols-2 grid-rows-2 w-2/6 mb-3 items-stretch">
      <input
        type="text"
        value={message}
        onChange={handleMessageChange}
        onKeyDown={handleKeyDown} // Enter tuşuna basıldığında handleKeyDown çalışacak
        placeholder="Writing Message..."
        className=" placeholder-slate-300 text-slate-600 bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring"
      />
      <span class="z-10 h-full leading-snug font-normal text-center text-slate-300 bg-transparent rounded text-base w-8 py-3">
        <i class="fas fa-user"></i>
      </span>
      <button onClick={() => sendMessage(message)} className="bg-sky-500 outline outline-offset-2 outline-cyan-500 rounded-lg">Gönder</button>
    </div>
  );
}

export default MessageInput;
