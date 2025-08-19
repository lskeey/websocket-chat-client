import { format } from "date-fns";
import ChatBubble from "./chat-bubble";

interface Message {
  ID: number;
  Content: string;
  SenderID: number;
  RecipientID: number;
  CreatedAt: string;
}

interface ChatContainerProps {
  userId: number;
  messages: Message[];
}

export default function ChatContainer({
  userId,
  messages,
}: ChatContainerProps) {
  // Fungsi untuk memformat tanggal menjadi "DD MMMM YYYY"
  const formatDate = (dateString: string): string => {
    return format(new Date(dateString), "dd MMMM yyyy");
  };

  // Mengelompokkan pesan berdasarkan tanggal
  const groupedMessages = messages.reduce((acc, message) => {
    const date = formatDate(message.CreatedAt);
    if (!acc[date]) {
      acc[date] = [];
    }
    acc[date].push(message);
    return acc;
  }, {} as Record<string, Message[]>);

  return (
    <div className="flex flex-col flex-1 px-16 py-8 gap-8 overflow-y-auto custom-scrollbar">
      {Object.entries(groupedMessages).map(([date, messages]) => (
        <div key={date} className="flex flex-col gap-4">
          <div className="text-center text-sm text-gray-500 mb-8">
            <span className="bg-accent px-4 py-1 rounded-md">{date}</span>
          </div>
          {messages.map((message) => (
            <ChatBubble key={message.ID} message={message} userId={userId} />
          ))}
        </div>
      ))}
    </div>
  );
}
