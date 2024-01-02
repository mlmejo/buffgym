import Link from "next/link";

export default function Register() {
  return (
    <main class="mx-auto w-full max-w-md p-6">
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
      <div class="mt-7 rounded-xl border border-gray-200 bg-white shadow-sm">
        <div class="p-4 sm:p-7">
          <div class="text-center">
            <h1 class="block text-2xl font-bold text-gray-800">Sign up</h1>
            <p class="mt-2 text-sm text-gray-600">
              Already have an account?{" "}
              <Link
                class="font-medium text-violet-600 decoration-2 hover:underline"
                href="/login"
              >
                Sign in here
              </Link>
            </p>
          </div>

          <div class="mt-5">
            <form>
              <div class="grid gap-y-4">
                <div>
                  <div class="relative">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      class="block w-full rounded-lg border-gray-200 px-4 py-3 text-sm focus:border-violet-500 focus:ring-violet-500 disabled:pointer-events-none disabled:opacity-50"
                      required
                      placeholder="Email address"
                    />
                  </div>
                </div>

                <div>
                  <div class="relative">
                    <input
                      type="text"
                      id="mobile-number"
                      name="mobile-number"
                      class="block w-full rounded-lg border-gray-200 px-4 py-3 text-sm focus:border-violet-500 focus:ring-violet-500 disabled:pointer-events-none disabled:opacity-50"
                      required
                      placeholder="Mobile number"
                    />
                  </div>
                </div>

                <div>
                  <div class="relative">
                    <input
                      type="password"
                      id="password"
                      name="password"
                      class="block w-full rounded-lg border-gray-200 px-4 py-3 text-sm focus:border-violet-500 focus:ring-violet-500 disabled:pointer-events-none disabled:opacity-50"
                      required
                      placeholder="Password"
                    />
                  </div>
                </div>

                <div>
                  <div class="relative">
                    <input
                      type="password"
                      id="confirm-password"
                      name="confirm-password"
                      class="block w-full rounded-lg border-gray-200 px-4 py-3 text-sm focus:border-violet-500 focus:ring-violet-500 disabled:pointer-events-none disabled:opacity-50"
                      required
                      placeholder="Confirm password"
                    />
                  </div>
                </div>

                <div class="flex items-center">
                  <div class="flex">
                    <input
                      id="remember-me"
                      name="remember-me"
                      type="checkbox"
                      class="pointer-events-none mt-0.5 shrink-0 rounded border-gray-200 text-violet-600 focus:ring-violet-500"
                    />
                  </div>
                  <div class="ms-3">
                    <label for="remember-me" class="text-sm text-gray-900">
                      I accept the{" "}
                      <a
                        class="font-medium text-violet-600 decoration-2 hover:underline"
                        href="#"
                      >
                        Terms and Conditions
                      </a>
                    </label>
                  </div>
                </div>

                <button
                  type="submit"
                  class="inline-flex w-full items-center justify-center gap-x-2 rounded-lg border border-transparent bg-violet-600 px-4 py-3 text-sm font-semibold text-white hover:bg-violet-700 disabled:pointer-events-none disabled:opacity-50"
                >
                  Sign up
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
