import React, { useState } from "react";
import useBotResponse from "./useBotResponse";

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const { response, isLoading, refetch } = useBotResponse(input);

  const handleSendMessage = () => {
    if (!input.trim()) return;

    const userMessage = { text: input, sender: "user" };
    setMessages((prev) => [...prev, userMessage]);
    refetch();
    setInput("");
  };

  React.useEffect(() => {
    if (response) {
      const botMessage = { text: response, sender: "bot" };
      setMessages((prev) => [...prev, botMessage]);
    }
  }, [response]);

  return (
    <div>
      <h2>Chat</h2>
      <div
        style={{
          border: "1px solid gray",
          padding: "10px",
          minHeight: "200px",
        }}
      >
        {messages.map((msg, index) => (
          <p
            key={index}
            style={{ textAlign: msg.sender === "user" ? "right" : "left" }}
          >
            <strong>{msg.sender === "user" ? "You: " : "Bot: "}</strong>
            {msg.text}
          </p>
        ))}
        {isLoading && <p>Bot is typing...</p>}
      </div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type a message..."
      />
      <button onClick={handleSendMessage}>Send</button>
    </div>
  );
};

export default Chat;
