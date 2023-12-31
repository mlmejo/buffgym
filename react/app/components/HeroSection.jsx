import { cookies } from "next/headers";
import { getCookies } from "cookies-next";

export default function HeroSection() {
  const pageCookies = getCookies({ cookies });

  return (
    <div
      className={
        `mx-auto max-w-[85rem] space-y-8 bg-cover bg-top px-4 py-24 sm:px-6 lg:px-8 ` +
        (Object.entries(pageCookies).length > 0
          ? "bg-[url('/authenticated.png')]"
          : "bg-[url('/home.png')]")
      }
    >
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="block text-4xl font-medium uppercase text-white sm:text-5xl md:text-6xl lg:text-7xl">
          {Object.entries(pageCookies).length > 0
            ? "Welcome back"
            : "Forge your strongest self"}
        </h1>
      </div>

      <div className="mx-auto max-w-3xl text-center">
        <p className="text-lg font-semibold uppercase italic text-gray-50">
          {Object.entries(pageCookies).length > 0
            ? "Where fitness becomes your lifestyle"
            : "Unleash your potential, embrace the journey"}
        </p>
      </div>

      <div className="text-center">
        <a
          className="inline-flex items-center justify-center gap-x-3 rounded-full border border-transparent bg-gradient-to-tl from-blue-600 to-violet-600 px-6 py-3 text-center text-sm font-medium text-white shadow-lg shadow-transparent hover:shadow-blue-700/50 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-800"
          href="/register"
        >
          Join now
        </a>
      </div>
    </div>
  );
}
