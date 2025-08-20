import { AppSidebar } from "@/components/layout/app-sidebar";
import ChatContainer from "@/components/chat/chat-container";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SidebarInset } from "@/components/ui/sidebar";
import { messages } from "@/data/message";
import { getInitials } from "@/lib/utils";
import { Send } from "lucide-react";

const userId = 1;
const username = "Emma Carter";

export default function Home() {
  return (
    <main className="font-sans flex h-screen">
      <AppSidebar />

      <SidebarInset className="min-w-3xl h-full">
        <header className="bg-background flex items-center gap-3 border-b p-4">
          <Avatar className="size-10">
            <AvatarImage src="#`" />
            <AvatarFallback>{getInitials(username)}</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <span>{username}</span>
            <span className="text-xs">Online</span>
          </div>
        </header>
        <div className="flex-1 p-4 overflow-hidden">
          <div className="flex flex-col bg-muted/50 w-full h-full rounded-lg overflow-hidden">
            <ChatContainer userId={userId} messages={messages} />
            <div className="flex items-center sticky bottom-0 gap-2 p-4 border-t bg-muted">
              <Input placeholder="Type message here" />
              <Button size="icon" className="cursor-pointer">
                <Send />
              </Button>
            </div>
          </div>
        </div>
      </SidebarInset>
    </main>
  );
}
