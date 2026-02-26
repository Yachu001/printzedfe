import Step from "./Step";
import collect from "../assets/images/workflow/collect.png"
import design from "../assets/images/workflow/design.png"
import approve from "../assets/images/workflow/approve.png"
import deliver from "../assets/images/workflow/deliver.png"

function WorkFlow() {
  return (
    <section className="w-full bg-[#1c1f1e] py-16 px-6 xl:px-[11%]">

      {/* TOP */}
      <div className="flex flex-col  lg:flex-row items-center lg:items-center lg:justify-center gap-10">

        {/* HEADING */}
        <h2 className="text-white text-center lg:text-end text-3xl md:text-4xl font-semibold leading-snug ">
          OUR WORK <br /> FLOW
        </h2>

        {/* DIVIDER */}
        <div className="hidden lg:block w-[2px] bg-white rounded-2xl h-22"></div>

        {/* CONTENT */}
        <p className="text-[#ffffff]   text-center max-w-xl text-sm md:text-base">
          tincidunt Cras adipiscing nec quam ipsum id enim. nibh lorem.
          urna. sollicitudin. massa tincidunt at, quam nibh ex ex ullamcorper
          vehicula, ipsum Donec elit non sit sodales, felis, gravida quis
          sodales, quam ullamcorper massa Ut Sed non.
        </p>

      </div>

      {/* STEPS */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 mt-16 px-[15%]">
        <Step image={collect} title="Collect Details" />
        <Step image={design} title="Design" />
        <Step image={approve} title="Approve & Print" />
        <Step image={deliver} title="Fast Delivery" />

      </div>

    </section>
  );
}

export default WorkFlow;