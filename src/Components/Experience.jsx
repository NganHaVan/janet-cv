import { expData } from "../data/expData";
import ExpItem from "./ExpItem";

function Experience() {
  return (
    <div
      name="experience"
      className="max-w-[1000px] m-auto md:pl-15 p-4 text-white flex flex-col justify-center w-full h-full lg:h-screen"
    >
      <div className="pb-8">
        <p className="inline text-4xl font-bold text-gray-300 border-b-4 border-secondary">
          Experience
        </p>
      </div>
      <div className="px-5 lg:px-10">
        {expData.map((item, index) => (
          <ExpItem
            year={item.year}
            title={item.title}
            duration={item.duration}
            details={item.details}
            key={index}
          />
        ))}
      </div>
    </div>
  );
}

export default Experience;
