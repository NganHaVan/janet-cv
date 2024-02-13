/* eslint-disable react/jsx-no-comment-textnodes */
import { data } from "../data/portfolioData.js";
import { Element } from "react-scroll";

const Work = () => {
  // projects file
  const project = data;
  //setProject(data);

  return (
    <Element name="work">
      <div className="w-full text-gray-300 md:h-screen bg-primary">
        <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
          <div className="pb-8">
            <p className="inline text-4xl font-bold text-gray-300 border-b-4 border-secondary">
              Work
            </p>
            <p className="py-6">// Check out some of my recent work</p>
          </div>

          {/* container for projects */}
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            {/* Gird Item */}
            {project.map((item, index) => (
              <div
                key={index}
                style={{ backgroundImage: `url(${item.image})` }}
                className="container flex items-center justify-center mx-auto text-center rounded-md shadow-lg shadow-shadowColor group content-div "
              >
                {/* Hover effect for images */}
                <div className="opacity-0 group-hover:opacity-100 ">
                  <span className="text-2xl tracking-wider text-white font bold ">
                    {item.name}
                  </span>
                  <div className="pt-8 text-center ">
                    {}
                    <a href={item.github} target="_blank">
                      <button className="px-4 py-3 m-2 text-lg font-bold text-center text-gray-700 bg-white rounded-lg">
                        Code
                      </button>
                    </a>
                    {}
                    {item.live !== "" && (
                      <a href={item.live} target="_blank">
                        <button className="px-4 py-3 m-2 text-lg font-bold text-center text-gray-700 bg-white rounded-lg">
                          Live
                        </button>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Element>
  );
};

export default Work;
