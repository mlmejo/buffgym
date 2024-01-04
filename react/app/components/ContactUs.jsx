export default function ContactUs() {
  return (
    <div
      className="grid gap-6 p-6 sm:grid-cols-1 lg:grid-cols-3"
      id="contact-us"
    >
      <div className="flex flex-col items-center gap-y-4">
        <div className="flex items-center justify-between space-x-8 rounded-lg bg-stone-900 p-6 shadow-md">
          <div className="flex flex-col items-center space-y-4 text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-6 w-6 text-violet-600"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
              />
            </svg>
            <p className="text-center uppercase">Need help</p>
          </div>

          <div>
            <p className="text-sm text-white">
              Available Monday - Friday at 9am to 5pm
            </p>
            <p className="text-sm text-white">(085) 342 1830</p>
          </div>
        </div>

        <div className="flex max-w-md items-center justify-between space-x-8 rounded-lg bg-stone-900 p-6 shadow-md">
          <div className="flex flex-col items-center space-y-4 text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="h-6 w-6 text-violet-600"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21.75 9v.906a2.25 2.25 0 0 1-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 0 0 1.183 1.981l6.478 3.488m8.839 2.51-4.66-2.51m0 0-1.023-.55a2.25 2.25 0 0 0-2.134 0l-1.022.55m0 0-4.661 2.51m16.5 1.615a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V8.844a2.25 2.25 0 0 1 1.183-1.981l7.5-4.039a2.25 2.25 0 0 1 2.134 0l7.5 4.039a2.25 2.25 0 0 1 1.183 1.98V19.5Z"
              />
            </svg>

            <p className="text-center uppercase">Inquiries</p>
          </div>

          <div>
            <p className="text-sm text-white">
              Available Monday - Friday at 9am to 5pm
            </p>
            <p className="text-sm text-white">(085) 342 1830</p>
          </div>
        </div>

        <div className="flex max-w-md items-center justify-between space-x-8 rounded-lg bg-stone-900 p-6 shadow-md">
          <div className="flex flex-col items-center space-y-4 text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-6 w-6 text-violet-600"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 6.75V15m6-6v8.25m.503 3.498 4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 0 0-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0Z"
              />
            </svg>

            <p className="text-center uppercase">Location</p>
          </div>

          <div>
            <p className="text-sm text-white">
              Available Monday - Friday at 9am to 5pm
            </p>
            <p className="text-sm text-white">(085) 342 1830</p>
          </div>
        </div>
      </div>

      <div className="col-span-2 flex max-w-2xl flex-col space-y-6">
        <div>
          <label
            for="input-label"
            class="mb-2 block text-sm font-medium text-white"
          >
            Email address
          </label>
          <input
            type="email"
            id="input-label"
            class="block w-full rounded-lg border-gray-700 bg-slate-900 px-4 py-3 text-sm text-gray-400 focus:border-violet-500 focus:ring-violet-500 disabled:pointer-events-none disabled:opacity-50"
          />
        </div>

        <div>
          <label
            for="input-label"
            class="mb-2 block text-sm font-medium text-white"
          >
            Message
          </label>
          <textarea
            type="email"
            id="input-label"
            class="block w-full rounded-lg border-gray-700 bg-slate-900 px-4 py-3 text-sm text-gray-400 focus:border-violet-500 focus:ring-violet-500 disabled:pointer-events-none disabled:opacity-50"
            rows={10}
          ></textarea>
        </div>

        <div>
          <button
            type="button"
            class="inline-flex items-center gap-x-2 rounded-lg border border-transparent bg-violet-600 px-4 py-3 text-sm font-semibold text-white hover:bg-violet-700 disabled:pointer-events-none disabled:opacity-50"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}
