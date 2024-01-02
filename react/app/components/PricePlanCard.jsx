export default function PricePlanCard({ price, plan, description }) {
  return (
    <div className="flex  flex-col rounded-2xl bg-stone-900 p-4 text-center transition delay-100 hover:scale-105 md:p-8">
      <h4 className="text-lg font-medium text-white">Billed Per Month</h4>
      <span className="mt-7 text-3xl font-bold text-white md:text-4xl xl:text-5xl">
        {price}
      </span>

      <div className="mt-7 text-2xl font-bold text-white">{plan}</div>

      <p className="mt-4">{description}</p>

      <a
        className="mt-5 inline-flex w-full items-center justify-center gap-x-2 rounded-lg bg-violet-700 px-4 py-3 text-sm font-semibold text-white hover:bg-violet-600 disabled:pointer-events-none disabled:opacity-50"
        href="#"
      >
        Subscribe
      </a>
    </div>
  );
}
