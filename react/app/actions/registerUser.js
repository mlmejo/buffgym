"use server";

export default async function registerUser(formData) {
  const response = await fetch(
    "http://127.0.0.1:1337/api/auth/local/register",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: formData.get("username"),
        email: formData.get("email"),
        password: formData.get("password"),
      }),
    },
  );

  return (await response.json()).data;
}
