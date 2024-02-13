/* eslint-disable react/prop-types */
function ExpItem({ year, title, duration, details }) {
  return (
    <ol className="relative flex flex-col border-l md:flex-row border-lightYellow">
      <li className="mb-10 ml-4">
        <div className="absolute w-3 h-3 bg-yellow rounded-full mt-1.5 -left-1.5 border-white"></div>
        <p className="flex flex-row flex-wrap items-center justify-start gap-4 text-xs md:text-sm">
          <span className="inline-block px-2 py-1 font-semibold text-white rounded-md bg-orange">
            {year}
          </span>
          <span className="text-lg font-semibold text-orange">{title}</span>
          <span className="my-1 text-sm font-normal leading-none text-whiteText">
            {duration}
          </span>
        </p>
        <p className="my-2 text-base font-normal ">{details}</p>
      </li>
    </ol>
  );
}

export default ExpItem;
