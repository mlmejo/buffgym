"use server";

import { cookies } from "next/headers";
import { setCookie } from "cookies-next";

export default async function registerUser(formData) {
  const response = await fetch(
    "http://127.0.0.1:1337/api/auth/local",
    {
      cache: "no-store",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        identifier: formData.get("email"),
        password: formData.get("password"),
      }),
    },
  );
  const data = await response.json();

  if (response.ok) {
    setCookie("user", data.user.username, { cookies });
  }

  return data;
}
