"use client";
import { useState } from "react";
import Image from "next/image";


export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<{ user: string; bot: string }[]>([]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = input;
    setMessages([...messages, { user: userMessage, bot: "..." }]);
    setInput("");

    try {
      const res = await fetch("http://localhost:5000/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userMessage }),
      });

      const data = await res.json();
      setMessages([...messages, { user: userMessage, bot: data.reply }]);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="fixed bottom-5 right-5">
      {/* Chatbot Toggle Button */}
      <div
        className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-lg cursor-pointer hover:scale-105 transition"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Image src="https://imgs.search.brave.com/Xc_q53xxYwrbfFOv1oKf0XgWrhxsYmGQtlONZUfw1tg/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA1Lzg2LzEyLzE5/LzM2MF9GXzU4NjEy/MTk3Nl9nVXBEeDdi/WjBMZ3E2YkJqUTMz/ZzZDT3V1UW5xTVd6/MS5qcGc" alt="Chatbot" width={40} height={40} />
      </div>

      {/* Chatbot Box */}
      {isOpen && (
        <div className="mt-3 p-4 w-96 bg-white shadow-xl rounded-2xl border border-gray-200">
          {/* Greeting Message */}
          <div className="flex items-center space-x-2 bg-gray-100 p-3 rounded-lg shadow">
            <div className="w-10 h-10 bg-blue-900 rounded-full flex items-center justify-center">
              <Image src="https://imgs.search.brave.com/Xc_q53xxYwrbfFOv1oKf0XgWrhxsYmGQtlONZUfw1tg/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA1Lzg2LzEyLzE5/LzM2MF9GXzU4NjEy/MTk3Nl9nVXBEeDdi/WjBMZ3E2YkJqUTMz/ZzZDT3V1UW5xTVd6/MS5qcGc" alt="Bot" width={30} height={30} />
            </div>
            <div>
              <p className="font-semibold text-blue-900">Hello! How can I help?</p>
              <p className="text-sm text-gray-600">Reloassist Assistance</p>
            </div>
          </div>

          {/* Chat Messages */}
          <div className="h-64 overflow-auto p-2 mt-3 rounded-lg bg-gray-100">
            {messages.map((msg, index) => (
              <div key={index} className="mb-3">
                <p className="font-bold text-red-600">You: {msg.user}</p>
                <p className="text-gray-800 bg-gray-200 p-2 rounded-md mt-1">
                  Bot: {msg.bot}
                </p>
              </div>
            ))}
          </div>

          {/* Input Field */}
          <div className="mt-3 flex items-center space-x-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
              placeholder="Ask me anything..."
            />
            <button
              onClick={sendMessage}
              className="bg-red-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-red-600 transition"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
