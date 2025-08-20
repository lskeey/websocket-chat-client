"use client";

import * as React from "react";

import {
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
} from "@/components/ui/sidebar";
import { SearchForm } from "./search-form";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { ProfileDropdown } from "./profile-dropdown";
import { getInitials } from "@/lib/utils";

const data = {
  messages: [
    {
      name: "Emma Carter",
      date: "18.00",
      last_message: "Nice, I'll check it out then. Thanks for the heads-up!",
    },
    {
      name: "Lucas Bennett",
      date: "16/08/2025",
      last_message:
        "Solid progress, man! Let's set up a call to talk about the next steps, cool?",
    },
    {
      name: "Noah Hayes",
      date: "15/08/2025",
      last_message:
        "Yo, what if we do a team outing this weekend? Hiking or beach vibes—whatcha think?",
    },
    {
      name: "Ava Thompson",
      date: "15/08/2025",
      last_message:
        "I checked the budget you sent. Can we hop on a quick call to go over a few tweaks?",
    },
    {
      name: "Ethan Brooks",
      date: "10/08/2025",
      last_message:
        "Heads-up, big meeting tomorrow at 3 PM. They’re dropping some major company updates.",
    },
    {
      name: "Isabella Reed",
      date: "10/08/2025",
      last_message:
        "I reviewed your proposal. Got a few notes—wanna chat about it soon?",
    },
    {
      name: "Mason Ford",
      date: "10/08/2025",
      last_message:
        "Got a new project idea—think it could be a game-changer. Can we talk it over?",
    },
    {
      name: "Olivia Grant",
      date: "10/08/2025",
      last_message:
        "I’m taking a two-week vacation next month, so I’ll make sure all my tasks are done before then.",
    },
    {
      name: "Liam Parker",
      date: "10/08/2025",
      last_message:
        "Just signed us up for the conference. Hit me up if you need more details!",
    },
    {
      name: "Sophia Lane",
      date: "10/08/2025",
      last_message:
        "How about a team dinner to celebrate the project win? Anyone free Friday night?",
    },
  ],
};

export default data;

export function AppSidebar() {
  return (
    <div>
      <div className="flex-1 bg-sidebar text-sidebar-foreground flex h-full w-(--sidebar-width) flex-col">
        <SidebarHeader className="gap-3.5 border-b p-4">
          <div className="flex w-full items-center justify-between">
            <div className="text-foreground text-base font-medium">Chats</div>
            <ProfileDropdown />
          </div>
          <SearchForm />
        </SidebarHeader>
        <SidebarContent className="custom-scrollbar">
          <SidebarGroup className="px-0">
            <SidebarGroupContent>
              {data.messages.map((message, index) => (
                <a
                  href="#"
                  key={index}
                  className="group hover:bg-sidebar-accent hover:text-sidebar-accent-foreground flex items-center gap-2 border-b p-4 text-sm leading-tight whitespace-nowrap last:border-b-0"
                >
                  <Avatar className="size-12">
                    <AvatarImage src="#" />
                    <AvatarFallback className="group-hover:bg-sidebar">
                      {getInitials(message.name)}
                    </AvatarFallback>
                  </Avatar>
                  <div className="space-y-2">
                    <div className="flex w-full items-center gap-2">
                      <span>{message.name}</span>
                      <span className="ml-auto text-xs">{message.date}</span>
                    </div>
                    <span className="line-clamp-1 w-[260px] text-xs whitespace-break-spaces">
                      {message.last_message}
                    </span>
                  </div>
                </a>
              ))}
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </div>
    </div>
  );
}
