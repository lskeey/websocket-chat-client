import React from "react";

interface Message {
  ID: number;
  Content: string;
  SenderID: number;
  RecipientID: number;
  CreatedAt: string;
}

interface ChatBubbleProps {
  message: Message;
  userId: number;
}

const ChatBubble: React.FC<ChatBubbleProps> = ({ message, userId }) => {
  return (
    <div
      className={`max-w-[70%] px-3 py-2 rounded-lg text-sm flex flex-col relative ${
        message.SenderID === userId
          ? "self-end bg-[#1447e6] text-white rounded-br-none"
          : "self-start bg-sidebar-border text-black dark:text-white rounded-bl-none"
      }`}
    >
      <p className="pr-2">{message.Content}</p>
      <span className="text-xs self-end opacity-80">
        {new Date(message.CreatedAt).toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        })}
      </span>
      <div
        className={`absolute bottom-0 w-0 h-0 border-t-[9px] border-t-transparent border-b-[-1px] border-b-transparent
        ${message.SenderID === userId ? "right-[-8px]" : "left-[-8px]"}
        ${
          message.SenderID === userId
            ? "border-l-[8px] border-l-[#1447e6]"
            : "border-r-[8px] border-r-sidebar-border"
        }`}
      />
    </div>
  );
};

export default ChatBubble;
