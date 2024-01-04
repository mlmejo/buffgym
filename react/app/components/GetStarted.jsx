export default function GetStarted() {
  return (
    <div className="flex justify-center p-6">
      <div className="flex max-w-4xl flex-grow justify-between rounded-lg bg-violet-800 p-8 px-6">
        <div>
          <h1 className="text-2xl text-white">Ready to join?</h1>
          <p className="text-sm text-gray-200">Let's get started!</p>
        </div>

        <div>
          <button
            type="button"
            className="inline-flex items-center gap-x-2 rounded-lg border border-transparent bg-stone-700 p-4 text-sm font-semibold text-white shadow-lg hover:bg-stone-900 disabled:pointer-events-none disabled:opacity-50 sm:p-4 sm:px-10"
          >
            Join Now
          </button>
        </div>
      </div>
    </div>
  );
}
