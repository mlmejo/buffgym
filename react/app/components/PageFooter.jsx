export default function PageFooter() {
  return (
    <footer className="mx-auto w-full max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8">
      <div className="mb-10 grid grid-cols-2 gap-6 md:grid-cols-4 lg:grid-cols-5">
        <div className="col-span-full hidden lg:col-span-1 lg:block">
          <a
            className="flex-none text-xl font-semibold dark:text-white dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
            href="#"
            aria-label="Brand"
          >
            Buff
            <span className="text-violet-600">Gym</span>
          </a>
          <p className="mt-3 text-xs text-gray-600 sm:text-sm dark:text-gray-400">
            © 2023 All rights reserved.
          </p>
        </div>

        <div>
          <h4 className="text-xs font-semibold uppercase text-gray-100">
            Opening Hours
          </h4>

          <div className="mt-3 grid space-y-3 text-sm">
            <p>
              <a
                className="text inline-flex gap-x-2 text-gray-400 hover:text-gray-200 focus:outline-none focus:ring-1 focus:ring-gray-600"
                href="#"
              >
                Monday-Friday ... 6AM - 10PM
              </a>
            </p>
            <p>
              <a
                className="inline-flex gap-x-2 text-gray-400 hover:text-gray-200 focus:outline-none focus:ring-1 focus:ring-gray-600"
                href="#"
              >
                Saturday ... 6AM - 12PM
              </a>
            </p>
          </div>
        </div>

        <div>
          <p className="text-xs italic text-white">
            "Push yourself beyond limits, for it is in the struggle that
            strength is forged. Embrace the burn, embrace the challegne, and
            watch as your body transforms into a masterpice of determination and
            resilience. In the gym, greatness awaits those who dare to sweat and
            believe."
          </p>
        </div>
      </div>
    </footer>
  );
}
