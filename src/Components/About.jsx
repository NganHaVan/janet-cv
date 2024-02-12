const About = () => {
  return (
    <div name="about" className="w-full h-screen text-gray-300 bg-primary">
      <div className="flex flex-col items-center justify-center w-full h-full">
        <div className="max-w-[-1000px] w-full px-4 grid grid-cols-2 gap-2">
          <div className="pb-8 pl-4 sm:text-right">
            <p className="inline text-4xl font-bold border-b-4 border-secondary">
              About
            </p>
          </div>
        </div>
        <div className="max-w-[-1000px] w-full px-4 grid sm:grid-cols-2 gap-8  lg:px-10">
          <div className="text-4xl font-bold sm:text-right">
            <p>
              Hi, I am Janet Van. Nice to have you here. Please take a look
              around
            </p>
          </div>
          <div>
            <p className="my-4">
              An energetic and dedicated developer who has several years of
              experience in both backend and frontend development.
            </p>
            <p className="my-4">
              So far having been involved in various projects built-in cutting-
              edge technologies.
            </p>
            <p className="my-4">A master of React Native and ReactJS.</p>
            <p className="my-4">
              Being able to adapt quickly to new techs and usually makes the
              client satisfied with the speed and quality of her service
              delivery.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
