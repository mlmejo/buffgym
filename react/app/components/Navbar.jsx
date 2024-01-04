import { cookies } from "next/headers";
import { deleteCookie, getCookies } from "cookies-next";
import Link from "next/link";
import { redirect } from "next/navigation";

export default function Navbar() {
  const pageCookies = getCookies({ cookies });

  async function logout() {
    "use server";

    deleteCookie("user", { cookies });
    redirect("/login");
  }

  return (
    <header className="z-50 flex w-full flex-wrap bg-transparent py-3 text-sm sm:flex-nowrap sm:justify-start sm:py-0">
      <nav
        className="relative mx-auto w-full max-w-7xl px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex items-center justify-between">
          <Link
            className="flex-none text-xl font-semibold uppercase text-white"
            href="/"
            aria-label="Brand"
          >
            Buff
            <span className="text-violet-600">Gym</span>
          </Link>
          <div className="sm:hidden">
            <button
              type="button"
              className="hs-collapse-toggle flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 text-sm font-semibold text-gray-800 hover:bg-gray-100 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              data-hs-collapse="#navbar-collapse-with-animation"
              aria-controls="navbar-collapse-with-animation"
              aria-label="Toggle navigation"
            >
              <svg
                className="hs-collapse-open:hidden h-4 w-4"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                />
              </svg>
              <svg
                className="hs-collapse-open:block hidden h-4 w-4 flex-shrink-0"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
              </svg>
            </button>
          </div>
        </div>
        <div
          id="navbar-collapse-with-animation"
          className="hs-collapse hidden grow basis-full overflow-hidden transition-all duration-300 sm:block"
        >
          <div className="mt-5 flex flex-col gap-x-0 gap-y-4 sm:mt-0 sm:flex-row sm:items-center sm:justify-end sm:gap-x-7 sm:gap-y-0">
            <a
              className="font-medium text-white sm:py-6"
              href="#"
              aria-current="page"
            >
              Home
            </a>
            <Link
              className="font-medium text-white hover:text-gray-400 sm:py-6"
              href="#why-us"
            >
              Why Us
            </Link>
            <a
              className="font-medium text-white hover:text-gray-400 sm:py-6"
              href="#news"
            >
              News
            </a>
            <a
              className="font-medium text-white hover:text-gray-400 sm:py-6"
              href="#contact-us"
            >
              Contacts
            </a>

            {Object.entries(pageCookies).length > 0 ? (
              <form action={logout}>
                <button
                  type="submit"
                  className="flex items-center gap-x-2 font-medium text-white hover:text-violet-600 sm:my-6 sm:border-s sm:border-gray-300 sm:ps-6"
                >
                  Log out
                </button>
              </form>
            ) : (
              <a
                className="flex items-center gap-x-2 font-medium text-white hover:text-violet-600 sm:my-6 sm:border-s sm:border-gray-300 sm:ps-6"
                href="/login"
              >
                <svg
                  className="h-4 w-4 flex-shrink-0"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                </svg>
                Log in
              </a>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
}
