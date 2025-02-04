import { GrGithub } from "react-icons/gr";
import { IoLogoLinkedin } from "react-icons/io5";
import { SiLeetcode } from "react-icons/si";

const Footer = (): JSX.Element => {
  //a basic footer
  return (
    <div className="bg-[#7D938A] text-white w-full p-[19px] flex items-center justify-center h-30">
      <p className="font-semibold text-xl">SHOPPY GLOBE &#169; &#8482;</p>
      <div className="flex gap-5 mx-10">
        <a href="https://github.com/Anchal-Mishra" target="_blank">
          <GrGithub className="text-xl hover:scale-110 cursor-pointer transition-all duration-200 ease-linear" />
        </a>
        <a
          href="https://www.linkedin.com/in/anchal-mishra-/"
          target="_blank"
        >
          <IoLogoLinkedin className="text-xl hover:scale-110 cursor-pointer transition-all duration-200 ease-linear" />
        </a>
        <a href="https://leetcode.com/u/anchal-mishra-/" target="_blank">
          <SiLeetcode className="text-xl hover:scale-110 cursor-pointer transition-all duration-200 ease-linear" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
