"use client";

import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";

interface UserPayload {
  sub: number;
  exp: number;
  username: string;
}

export function useCurrentUser() {
  const [user, setUser] = useState<{ id: number; username: string } | null>(
    null
  );

  useEffect(() => {
    const token = document.cookie
      .split("; ")
      .find((row) => row.startsWith("jwt-token="))
      ?.split("=")[1];

    if (token) {
      try {
        const decoded = jwtDecode<UserPayload>(token);

        setUser({ id: decoded.sub, username: decoded.username });
      } catch (e) {
        console.error("Failed to decode token", e);
        setUser(null);
      }
    } else {
      setUser(null);
    }
  }, []);

  return user;
}
