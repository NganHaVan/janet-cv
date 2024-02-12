import { FaArrowRight } from "@react-icons/all-files/fa/FaArrowRight";
import { scroller } from "react-scroll";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-primary">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-secondary">Hi, my name is </p>
        <h1 className="text-4xl font-bold text-whiteText sm:text-7xl">
          Janet Van
        </h1>
        <h2 className="text-4xl font-bold sm:text-7xl text-lightWhite">
          I am a fullstack/mobile developer
        </h2>
        <p className="py-4 text-lightWhite max-w-[700px]">
          I have experience building web applications and mobile applications in
          different industries like e-commerce, Fintech, SaaS
        </p>

        <div>
          <button
            className="flex items-center px-6 py-3 my-2 text-white border-2 group hover:bg-secondary hover:border-secondary"
            onClick={() => {
              scroller.scrollTo("work", {
                duration: 1000,
                delay: 100,
                smooth: true
              });
            }}
          >
            View Work
            <span className="duration-300 group-hover:rotate-90">
              <FaArrowRight className="ml-2 hover:" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
