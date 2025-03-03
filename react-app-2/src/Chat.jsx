import { useState } from "react";
import Message from "./Message";

const Chat = () => {
  const [messages, setMessages] = useState([
    { text: "Hello!", isSent: false },
    { text: "Hi! How are you?", isSent: true },
  ]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (input.trim() !== "") {
      setMessages([...messages, { text: input, isSent: true }]);
      setInput("");
    }
  };

  return (
    <div
      style={{
        width: "300px",
        margin: "0 auto",
        padding: "20px",
        border: "1px solid #ccc",
      }}
    >
      <div style={{ height: "300px", overflowY: "auto", marginBottom: "10px" }}>
        {messages.map((msg, index) => (
          <Message key={index} text={msg.text} isSent={msg.isSent} />
        ))}
      </div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        style={{ width: "80%", padding: "5px" }}
      />
      <button onClick={sendMessage} style={{ padding: "5px" }}>
        Send
      </button>
    </div>
  );
};

export default Chat;
