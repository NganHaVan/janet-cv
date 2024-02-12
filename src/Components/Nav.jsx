import { Link } from "react-scroll";
import { useState } from "react";
import { FaTimes } from "@react-icons/all-files/fa/FaTimes";
import { CgMenu } from "@react-icons/all-files/cg/CgMenu";

const Nav = () => {
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    setClicked(!clicked);
  };
  const content = (
    <>
      <div className="absolute left-0 right-0 block w-full transition lg:hidden top-16 bg-primary">
        <ul className="p-20 text-xl text-center">
          <Link onClick={handleClick} spy smooth to="home">
            <li className="py-4 my-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">
              Home
            </li>
          </Link>
          <Link onClick={handleClick} spy smooth to="about">
            <li className="py-4 my-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">
              About
            </li>
          </Link>
          <Link onClick={handleClick} spy smooth to="skills">
            <li className="py-4 my-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">
              Skills
            </li>
          </Link>
          <Link onClick={handleClick} spy smooth to="work">
            <li className="py-4 my-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">
              Work
            </li>
          </Link>
          <Link onClick={handleClick} spy smooth to="contact">
            <li className="py-4 my-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">
              Contact
            </li>
          </Link>
        </ul>
      </div>
    </>
  );
  return (
    <nav>
      <div className="fixed z-50 flex justify-between flex-1 w-full px-20 py-4 text-white h-10vh lg:py-5 bg-primary">
        <div className="flex items-center flex-1">
          <span className="text-3xl font-bold">JanetVan</span>
        </div>
        <div className="items-center justify-end flex-1 hidden font-normal lg:flex md:flex">
          <div className="flex-10">
            <ul className="flex gap-8 mr-16 text-[18px]">
              <Link onClick={handleClick} spy smooth to="home">
                <li className="transition border-b-2 cursor-pointer hover:text-secondary border-primary hover:border-secondary">
                  Home
                </li>
              </Link>
              <Link onClick={handleClick} spy smooth to="about">
                <li className="transition border-b-2 cursor-pointer hover:text-secondary border-primary hover:border-secondary">
                  About
                </li>
              </Link>
              <Link onClick={handleClick} spy smooth to="skills">
                <li className="transition border-b-2 cursor-pointer hover:text-secondary border-primary hover:border-secondary">
                  Skills
                </li>
              </Link>
              <Link onClick={handleClick} spy smooth to="work">
                <li className="transition border-b-2 cursor-pointer hover:text-secondary border-primary hover:border-secondary">
                  Work
                </li>
              </Link>
              <Link onClick={handleClick} spy smooth to="contact">
                <li className="transition border-b-2 cursor-pointer hover:text-secondary border-primary hover:border-secondary">
                  Contact
                </li>
              </Link>
            </ul>
          </div>
        </div>
        <div>{clicked && content}</div>
        <button
          className="block transition sm:hidden"
          onClick={() => {
            setClicked(!clicked);
          }}
        >
          {clicked ? <FaTimes /> : <CgMenu />}
        </button>
      </div>
    </nav>
  );
};

export default Nav;
