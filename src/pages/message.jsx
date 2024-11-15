import React, { useState } from "react";

const Message = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "This is others' message.",
      date: "Friday, November 15",
      time: "8:01 PM",
      sender: "other",
    },
    {
      id: 2,
      text: "This is my section.",
      date: "Today",
      time: "8:01 PM",
      sender: "me",
    },
  ]);
  const [newMessage, setNewMessage] = useState("");

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      const now = new Date();
      const isToday = now.toDateString() === new Date().toDateString();
      const formattedDate = isToday
        ? "Today"
        : now.toLocaleDateString("en-US", {
            weekday: "short",
            month: "short",
            day: "numeric",
          });
      const formattedTime = now.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      });

      const message = {
        id: messages.length + 1,
        text: newMessage,
        date: formattedDate,
        time: formattedTime,
        sender: "me",
      };
      setMessages([...messages, message]);
      setNewMessage("");
    }
  };

  return (
    <>
      <div className="pt-24 h-screen flex flex-col justify-between">
        <div className="flex justify-center mb-4">
          <h3 className="font-bold mr-2 pt-[2px]">Role</h3>

          <button className="px-4 py-1 bg-blue-600 text-white rounded-l">
            Me
          </button>
          <button className="px-4 py-1 bg-gray-200 rounded-r">You</button>
        </div>
        <div className="flex flex-col max-w-md w-[70%] mx-auto bg-gray-100 rounded shadow flex-1 p-4 overflow-y-auto h-[60vh]">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`mb-4 ${
                message.sender === "me" ? "text-right" : "text-left"
              }`}
            >
              {message.date && (
                <p className="text-xs text-gray-500 mb-2">{message.date}</p>
              )}
              <div
                className={`inline-block rounded-lg p-3 ${
                  message.sender === "me"
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 text-black"
                }`}
              >
                <p>{message.text}</p>
                <span className="text-xs mt-1 text-gray-400 block">
                  {message.time}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="flex max-w-md mx-auto lg:w-[70%] w-[90%] items-center p-2 bg-white border-t">
          <input
            type="text"
            className="flex-1 p-2 border rounded-l focus:outline-none"
            placeholder="Type your message"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
          />
          <button
            onClick={handleSendMessage}
            className="px-4 py-2 bg-blue-500 text-white rounded-r"
          >
            Send
          </button>
        </div>
      </div>
    </>
  );
};

export default Message;
