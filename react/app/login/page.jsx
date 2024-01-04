"use client";

import Link from "next/link";
import { redirect } from "next/navigation";
import { useState } from "react";
import loginUser from "../actions/loginUser";

export default function Login() {
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (formData) => {
    const result = await loginUser(formData);

    if (result.hasOwnProperty("user")) {
      redirect("/");
    }

    if (result.error.name === "ValidationError") {
      setErrorMsg("Invalid email or password");
    }
  };

  return (
    <main className="mx-auto w-full max-w-md p-6">
      <div className="flex justify-center">
        <Link
          className="flex-none text-xl font-semibold uppercase text-white"
          href="/"
          aria-label="Brand"
        >
          Buff
          <span className="text-violet-600">Gym</span>
        </Link>
      </div>
      <div className="mt-7 rounded-xl border border-gray-200 bg-white shadow-sm">
        <div className="p-4 sm:p-7">
          <div className="text-center">
            <h1 className="block text-2xl font-bold text-gray-800">Login</h1>
            <p className="mt-2 text-sm text-gray-600">
              Don't have an account?{" "}
              <Link
                className="font-medium text-violet-600 decoration-2 hover:underline"
                href="/register"
              >
                Sign up here
              </Link>
            </p>
          </div>

          <div className="mt-5">
            <form action={handleSubmit}>
              <div className="grid gap-y-4">
                <div>
                  <div className="relative">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="block w-full rounded-lg border-gray-200 px-4 py-3 text-sm text-gray-900 focus:border-violet-500 focus:ring-violet-500 disabled:pointer-events-none disabled:opacity-50"
                      required
                      placeholder="Email address"
                    />
                    <div
                      className={
                        `pointer-events-none absolute inset-y-0 end-0 items-center pe-3 ` +
                        (errorMsg ? "flex" : "hidden")
                      }
                    >
                      <svg
                        className="h-5 w-5 text-red-500"
                        width="16"
                        height="16"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                        aria-hidden="true"
                      >
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                      </svg>
                    </div>
                    {errorMsg && (
                      <p className="mt-2 text-xs text-red-600" id="email-error">
                        {errorMsg}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <div className="relative">
                    <input
                      type="password"
                      id="password"
                      name="password"
                      className="block w-full rounded-lg border-gray-200 px-4 py-3 text-sm text-gray-900 focus:border-violet-500 focus:ring-violet-500 disabled:pointer-events-none disabled:opacity-50"
                      required
                      placeholder="Password"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center gap-x-2 rounded-lg border border-transparent bg-violet-600 px-4 py-3 text-sm font-semibold text-white hover:bg-violet-700 disabled:pointer-events-none disabled:opacity-50"
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
