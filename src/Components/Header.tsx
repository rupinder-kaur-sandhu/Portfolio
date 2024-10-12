import { IconHexagonLetterR } from "@tabler/icons-react";
import SideBar from "./SideBar";

const links = ["About", "Skills", "Projects", "Experience", "Contact"];
const navlinks = (col: Boolean) => {
  return links.map((link, index) => {
    return (
      <a
        className={`${
          col ? "flex flex-col items-center" : ""
        } text-textColor text-lg hover:text-primaryColor`}
        href={`#${link}`}
      >
        <span className="text-primaryColor">0{index + 1}. </span>
        {link}
      </a>
    );
  });
};

const Header = () => {
  return (
    <nav className="flex bg-bgColor px-10 h-[18vh] dm-mono-regular justify-between items-center">
      <IconHexagonLetterR
        size={60}
        color="#64FFDA"
        stroke={1.25}
      ></IconHexagonLetterR>
      <div className="md:flex gap-8 hidden">{navlinks(false)}</div>
      <SideBar></SideBar>
    </nav>
  );
};

export default Header;
export { navlinks };
