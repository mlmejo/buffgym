import PricePlanCard from "./PricePlanCard";
import PricingPlanCard from "./PricePlanCard";

export default function PricingPlan() {
  return (
    <div class="mx-auto max-w-[85rem] px-4 pt-10 sm:px-6 lg:p-14 lg:px-8">
      <div class="mx-auto mb-10 max-w-2xl text-center">
        <h2 class="text-center text-2xl font-bold uppercase  md:text-4xl md:leading-tight">
          Choose Your <span className="text-violet-600">Pricing Plan</span>
        </h2>
      </div>

      <div class="mt-6 grid gap-3 sm:grid-cols-2 md:mt-12 md:gap-6 lg:grid-cols-3 lg:items-center lg:gap-3 xl:gap-6">
        <PricePlanCard
          price={"₱700"}
          plan={"Beginner"}
          description={
            "Easy start, cost-effective features, reliable support. Kickstart your journey with our Beginner Plan."
          }
        />

        <PricePlanCard
          price={"₱900"}
          plan={"Basic"}
          description={
            "Affordable, essential features, user-friendly interface. Get the core functionalities you need with our Basic Plan."
          }
        />

        <PricePlanCard
          price={"₱1200"}
          plan={"Advanced"}
          description={
            "Enhanced capabilities, scalability, dedicated support. Take your journey with our Advanced Plan."
          }
        />
      </div>
    </div>
  );
}
