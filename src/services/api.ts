import { Message } from "@/types/message";
import { User } from "@/types/user";

const API_BASE_URL = "http://localhost:8080/api";

function getAuthToken(): string | null {
  const name = "jwt-token=";
  const decodedCookie = decodeURIComponent(document.cookie);
  const ca = decodedCookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length);
    }
  }
  return null;
}

function setAuthToken(token: string): void {
  const d = new Date();
  d.setTime(d.getTime() + 7 * 24 * 60 * 60 * 1000);
  document.cookie = `jwt-token=${token}; expires=${d.toUTCString()}; path=/`;
}

export function clearAuthToken(): void {
  document.cookie =
    "jwt-token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}

export async function register(data: Pick<User, "username" | "password">) {
  const response = await fetch(`${API_BASE_URL}/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.error || "Failed to register");
  }
  return response.json();
}

export async function login(data: Pick<User, "username" | "password">) {
  const response = await fetch(`${API_BASE_URL}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.error || "Failed to log in");
  }
  const result = await response.json();
  if (result.token) {
    setAuthToken(result.token);
  }
  return result;
}

export async function searchUsers(usernameQuery: string): Promise<User[]> {
  const token = getAuthToken();
  if (!token) {
    throw new Error("Authentication token is missing.");
  }

  const response = await fetch(
    `${API_BASE_URL}/users/search?username=${usernameQuery}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.error || "Failed to search for users");
  }
  return response.json();
}

export async function getMessages(recipientId: number): Promise<Message[]> {
  const token = getAuthToken();
  if (!token) {
    throw new Error("Authentication token is missing.");
  }

  const response = await fetch(`${API_BASE_URL}/messages/${recipientId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.error || "Failed to fetch messages");
  }
  return response.json();
}
