"use client";

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
import { useCurrentUser } from "@/hooks/use-current-user";
import { searchUsers } from "@/services/api";
import { User } from "@/types/user";
import { useRef, useState } from "react";
import { ClipLoader } from "react-spinners";
import Link from "next/link";
import { sidebarData } from "@/data/message";

export function AppSidebar() {
  const user = useCurrentUser();
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);
  const debounceTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleSearch = async (query: string) => {
    setLoading(true);
    try {
      const results = await searchUsers(query);
      setSearchResults(results);
    } catch (error) {
      console.error("Failed to search users:", error);
      setSearchResults([]);
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);

    if (debounceTimeoutRef.current) {
      clearTimeout(debounceTimeoutRef.current);
    }

    if (query.trim()) {
      debounceTimeoutRef.current = setTimeout(() => {
        handleSearch(query);
      }, 300);
    } else {
      setSearchResults([]);
    }
  };

  return (
    <div>
      <div className="flex-1 bg-sidebar text-sidebar-foreground flex h-full w-[var(--sidebar-width)] flex-col relative">
        <SidebarHeader className="gap-3.5 border-b p-4">
          <div className="flex w-full items-center justify-between">
            <div className="text-foreground text-base font-medium">Chats</div>
            <ProfileDropdown />
          </div>
          <SearchForm
            value={searchQuery}
            onChange={handleInputChange}
            onSubmit={(e) => e.preventDefault()}
          />
        </SidebarHeader>

        {searchQuery && (
          <div className="absolute inset-x-0 top-[110px] z-20 mx-2 flex w-[calc(100%-1rem)] flex-col rounded-lg border bg-background shadow-lg">
            <SidebarGroup className="px-0">
              <SidebarGroupContent>
                {loading ? (
                  <div className="w-full flex items-center justify-center h-16">
                    <ClipLoader color="var(--color-sidebar-primary)" />
                  </div>
                ) : searchResults && searchResults.length > 0 ? (
                  searchResults.map((searchResult) => (
                    <Link
                      href="#"
                      key={searchResult.id}
                      className="group hover:bg-accent flex items-center gap-2 border-b p-4 text-sm leading-tight whitespace-nowrap last:border-b-0"
                    >
                      <Avatar className="size-12">
                        <AvatarFallback className="group-hover:bg-sidebar">
                          {getInitials(searchResult.username)}
                        </AvatarFallback>
                      </Avatar>
                      <div className="space-y-2">
                        <div className="flex w-full items-center gap-2">
                          <span className="capitalize">
                            {searchResult.username}
                          </span>
                        </div>
                      </div>
                    </Link>
                  ))
                ) : (
                  <div className="p-4 flex items-center justify-center text-muted-foreground h-16">
                    No users found.
                  </div>
                )}
              </SidebarGroupContent>
            </SidebarGroup>
          </div>
        )}

        <SidebarContent className="custom-scrollbar">
          <SidebarGroup className="px-0">
            <SidebarGroupContent>
              {sidebarData.messages.map((message, index) => (
                <Link
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
                </Link>
              ))}
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </div>
    </div>
  );
}
