import { AppSidebar } from "@/components/app-sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SidebarInset } from "@/components/ui/sidebar";
import { Send } from "lucide-react";

export default function Home() {
  return (
    <main className="font-sans flex h-screen">
      <AppSidebar />

      <SidebarInset className="min-w-3xl">
        <header className="bg-background flex shrink-0 items-center gap-3 border-b p-4">
          <Avatar className="size-10">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <span>Catherine</span>
            <span className="text-xs">Online</span>
          </div>
        </header>
        <div className="p-4 h-full">
          <div className="flex flex-col bg-muted/50 w-full h-full rounded-lg">
            <div className="h-full">{/* Bubble Chat */}</div>
            <div className="flex sticky bottom-0 items-center gap-2 p-4 border-t">
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
