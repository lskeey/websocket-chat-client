"use client";

import { AppSidebar } from "@/components/layout/app-sidebar";
import ChatContainer from "@/components/chat/chat-container";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SidebarInset } from "@/components/ui/sidebar";
import { messages } from "@/data/message";
import { getInitials } from "@/lib/utils";
import { Send } from "lucide-react";
import { useCurrentUser } from "@/hooks/use-current-user";
import { BarLoader } from "react-spinners";

export default function Home() {
  const user = useCurrentUser();

  if (!user) {
    return (
      <main className="font-sans flex h-screen items-center justify-center">
        <BarLoader color="var(--color-sidebar-primary)" />
      </main>
    );
  }

  return (
    <main className="font-sans flex h-screen">
      <AppSidebar />

      <SidebarInset className="min-w-3xl h-full">
        <header className="bg-background flex items-center gap-3 border-b p-4">
          <Avatar className="size-10">
            <AvatarImage src="#`" />
            <AvatarFallback>{getInitials(user.username)}</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <span className="capitalize">{user.username}</span>
            <span className="text-xs">Online</span>
          </div>
        </header>
        <div className="flex-1 p-4 overflow-hidden">
          <div className="flex flex-col bg-muted/50 w-full h-full rounded-lg overflow-hidden">
            <ChatContainer userId={user.id} messages={messages} />
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
