"use client";

import { useState, useRef, useEffect } from "react";
import { X, Send, Loader2 } from "lucide-react";
import { RobotMascotIcon } from "./chatbot-icons";
import "./chatbot.css";

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput("");
    
    // Add user message
    const newMessages = [...messages, { role: "user", content: userMessage }];
    setMessages(newMessages);
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messages: newMessages,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to get response");
      }

      // Add assistant message
      setMessages([
        ...newMessages,
        { role: "assistant", content: data.reply },
      ]);
    } catch (error) {
      console.error("Chat error:", error);
      setMessages([
        ...newMessages,
        {
          role: "assistant",
          content:
            error.message ||
            "I'm having trouble responding right now. Please email us at info@corevolvix.com for assistance.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  return (
    <>
      {/* Chat Button */}
      <button
        className={`chatbot-button ${isOpen ? "chatbot-button-open" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Close chat" : "Open chat"}
        aria-expanded={isOpen}
      >
        <div className="chatbot-button-icon">
          {isOpen ? <X size={28} strokeWidth={2.5} /> : <RobotMascotIcon size={48} />}
        </div>
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="chatbot-window" role="dialog" aria-label="Chat with Corevolvix">
          <div className="chatbot-header">
            <div className="chatbot-header-content">
              <div className="chatbot-avatar">
                <RobotMascotIcon size={36} />
              </div>
              <div>
                <h3>Chat with Corevolvix</h3>
                <p>Ask about our services and expertise</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              aria-label="Close chat"
              className="chatbot-close"
            >
              <X size={20} />
            </button>
          </div>

          <div className="chatbot-messages">
            {messages.length === 0 && (
              <div className="chatbot-welcome">
                <div className="chatbot-welcome-avatar">
                  <RobotMascotIcon size={56} />
                </div>
                <p>
                  Hello! I can help you learn about Corevolvix's services,
                  industries we serve, and how we can support your organization.
                </p>
                <p className="chatbot-contact">
                  For detailed discussions, email{" "}
                  <a href="mailto:info@corevolvix.com">info@corevolvix.com</a>
                </p>
              </div>
            )}

            {messages.map((message, index) => (
              <div
                key={index}
                className={`chatbot-message chatbot-message-${message.role}`}
              >
                {message.role === "assistant" && (
                  <div className="chatbot-message-avatar">
                    <RobotMascotIcon size={28} />
                  </div>
                )}
                <div className="chatbot-message-content">{message.content}</div>
              </div>
            ))}

            {isLoading && (
              <div className="chatbot-message chatbot-message-assistant">
                <div className="chatbot-message-avatar">
                  <RobotMascotIcon size={28} />
                </div>
                <div className="chatbot-message-content chatbot-loading">
                  <Loader2 size={16} className="chatbot-spinner" />
                  <span>Thinking...</span>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          <form className="chatbot-input-form" onSubmit={handleSubmit}>
            <input
              ref={inputRef}
              type="text"
              className="chatbot-input"
              placeholder="Ask about our services..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
              maxLength={500}
              disabled={isLoading}
              aria-label="Chat message"
            />
            <button
              type="submit"
              className="chatbot-send"
              disabled={!input.trim() || isLoading}
              aria-label="Send message"
            >
              <Send size={20} />
            </button>
          </form>
        </div>
      )}
    </>
  );
}
