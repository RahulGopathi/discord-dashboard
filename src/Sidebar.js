import { BsPlus } from "react-icons/bs";
import { FaDiscord, FaPoo } from "react-icons/fa";
import { MdExplore } from "react-icons/md";

const SideBar = () => {
  return (
    <div className=" h-screen w-16 m-0 flex flex-col bg-gray-900 text-white shadow-lg ">
      <div className="flex flex-row">
        <div className="whiteBar"></div>
        <SideBarIcon icon={<FaDiscord size="28" />} text={"Home"} />
      </div>
      <SideBarIcon icon={<FaPoo size="20" />} text={"DevLup Labs"} />
      <SideBarIcon
        icon={<BsPlus size="32" />}
        text={"Add a Server"}
        isServerIcon={false}
      />
      <SideBarIcon
        icon={<MdExplore size="20" />}
        text={"Explore Public Servers"}
        isServerIcon={false}
      />
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

export default SideBar;
