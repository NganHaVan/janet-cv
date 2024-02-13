import { FaLinkedin } from "@react-icons/all-files/fa/FaLinkedin";
import { FaGithub } from "@react-icons/all-files/fa/FaGithub";
import { MdMailOutline } from "@react-icons/all-files/md/MdMailOutline";
import { BsPersonLinesFill } from "@react-icons/all-files/bs/BsPersonLinesFill";

const SocialMediaLinks = () => {
  return (
    <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
      <ul>
        <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[0px] duration-300 bg-linkedIn">
          <a
            className="flex items-center justify-around w-full text-white"
            href="https://www.linkedin.com/in/janet-van/"
            target="_blank"
          >
            LinkedIn
            <FaLinkedin size={30} />
          </a>
        </li>

        <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[0px] duration-300 bg-github">
          <a
            className="flex items-center justify-around w-full text-white"
            href="https://github.com/NganHaVan?tab=repositories"
            target="_blank"
          >
            Github <FaGithub size={30} />
          </a>
        </li>

        <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[0px] duration-300 bg-mail">
          <a
            className="flex items-center justify-around w-full text-white"
            href="mailto:vannunganha@gmail.com"
          >
            Email <MdMailOutline size={30} />
          </a>
        </li>

        <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[0px] duration-300 bg-resume">
          <a
            className="flex items-center justify-around w-full text-white"
            href="./CV2024.pdf"
            target="_blank"
          >
            Resume <BsPersonLinesFill size={30} />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SocialMediaLinks;
