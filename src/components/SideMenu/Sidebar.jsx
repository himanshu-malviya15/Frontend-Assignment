import {
  faBars,
  faBell,
  faClock,
  faEye,
  faListCheck,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Sidebar } from "flowbite-react";

const SidebarComponent = () => {
  return (
    <>
      <Sidebar aria-label="Default sidebar example" className="flex">
        <Sidebar.Items>
          <Sidebar.ItemGroup className="bg-[#F0F1F3] w-16">
            <Sidebar.Item href="#" className="mb-6">
              <img
                src="https://play-lh.googleusercontent.com/b5e81tekrRvuZHfbb4m7ghWXDTycOnF-FOewnMOQ5T5XRi0PGqigoYKKyBfOGezUEuQ"
                alt=""
                className="h-10 w-10 ml-[-4px]"
              />
            </Sidebar.Item>
            <Sidebar.Item href="#" className="mb-6">
              <FontAwesomeIcon icon={faBars} />
            </Sidebar.Item>
            <Sidebar.Item href="#" className="mb-6">
              <FontAwesomeIcon icon={faBell} />
            </Sidebar.Item>
            <Sidebar.Item href="#" className="mb-6">
              <FontAwesomeIcon icon={faClock} />
            </Sidebar.Item>
            <Sidebar.Item href="#" className="mb-6">
              <FontAwesomeIcon icon={faListCheck} />
            </Sidebar.Item>
            <Sidebar.Item href="#" className="mb-6">
              <FontAwesomeIcon icon={faEye} />
            </Sidebar.Item>
            <Sidebar.Item href="#" className="mb-6">
              <FontAwesomeIcon icon={faUser} />
            </Sidebar.Item>
            <Sidebar.Item href="#" className="">
              <FontAwesomeIcon icon={faBars} rotation={270} />
            </Sidebar.Item>
            <Sidebar.Item href="#" className=" flex mt-[120px]">
              <div className="bg-blue-500 rounded-full p-[15px] ">
                <FontAwesomeIcon icon={faUser} className="text-white" />
              </div>
            </Sidebar.Item>
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
    </>
  );
};

export default SidebarComponent;
