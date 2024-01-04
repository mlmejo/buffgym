export default function WhyUs() {
  return (
    <div
      className="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14"
      id="why-us"
    >
      <div className="mx-auto mb-10 max-w-2xl text-center lg:mb-14">
        <h2 className="text-2xl font-bold uppercase text-violet-600 md:text-4xl md:leading-tight">
          Why choose us
        </h2>

        <h3 className="mt-6 text-2xl font-bold uppercase text-white md:text-4xl md:leading-tight">
          We give the best experience
        </h3>
      </div>

      <div className="grid grid-cols-2 gap-8 md:grid-cols-3 md:gap-8">
        <div className="text-center transition delay-100 hover:scale-105">
          <img
            className="mx-auto"
            src="/service_1.png"
            alt="Image Description"
          />
          <div className="mt-2 sm:mt-4">
            <h3 className="text-sm font-extrabold text-white sm:text-base lg:text-lg">
              Personal Training
            </h3>
          </div>
        </div>

        <div className="text-center transition delay-100 hover:scale-105">
          <img
            className="mx-auto"
            src="/service_2.png"
            alt="Image Description"
          />
          <div className="mt-2 sm:mt-4">
            <h3 className="text-sm font-extrabold text-white sm:text-base lg:text-lg">
              Strength Exercise
            </h3>
          </div>
        </div>

        <div className="text-center transition delay-100 hover:scale-105">
          <img
            className="mx-auto"
            src="/service_3.png"
            alt="Image Description"
          />
          <div className="mt-2 sm:mt-4">
            <h3 className="text-sm font-extrabold text-white sm:text-base lg:text-lg">
              Cardio Training
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}
