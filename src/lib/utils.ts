import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getInitials(name: string): string {
  if (!name || typeof name !== "string") {
    return "";
  }

  const trimmedName = name.trim();
  if (!trimmedName) {
    return "";
  }

  const words = trimmedName.split(/\s+/);

  if (words.length === 1) {
    return words[0].charAt(0).toUpperCase();
  } else {
    const firstLetter = words[0].charAt(0);
    const secondLetter = words[1]?.charAt(0) || "";
    return (firstLetter + secondLetter).toUpperCase();
  }
}

export function formatTime(timestamp: Date | string | number): string {
  return new Date(timestamp).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
}
