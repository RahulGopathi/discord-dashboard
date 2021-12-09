import { BsPlus } from "react-icons/bs";
import { FaDiscord, FaPoo } from "react-icons/fa";
import { MdExplore } from "react-icons/md";

const FreindsBar = () => {
  return (
    <div
      className=" h-screen
     w-16 flex flex-col bg-gray-800 text-white shadow-lg "
    >
      <div className="inputField">hii</div>
    </div>
  );
};

const SideBarIcon = ({ icon, text, isServerIcon = true }) => (
  <div className={"group " + (isServerIcon ? "server-icon" : "sidebar-icon")}>
    {icon}
    {text && (
      <span className="sidebar-tooltip group-hover:scale-100 ">{text}</span>
    )}
  </div>
);

export default FreindsBar;
